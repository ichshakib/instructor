import os
import sys
import json
import time
import cv2
import fitz
import numpy as np
from concurrent.futures import ThreadPoolExecutor, as_completed
from rapidocr_onnxruntime import RapidOCR

PDF_PATH = r"d:\instructor\work-with-resources\toaz.info-netzwerk-a1-kursbuch-pdf-pr_da44e806492088f2152c95f8684eeded.pdf"
CACHE_DIR = r"d:\instructor\work-with-resources\.ocr_cache"
MD_PATH = r"d:\instructor\work-with-resources\toaz.info-netzwerk-a1-kursbuch-pdf-pr_da44e806492088f2152c95f8684eeded.md"
TXT_PATH = r"d:\instructor\work-with-resources\toaz.info-netzwerk-a1-kursbuch-pdf-pr_da44e806492088f2152c95f8684eeded.txt"

os.makedirs(CACHE_DIR, exist_ok=True)

ocr = RapidOCR()

def process_single_page(pdf_path, page_idx):
    page_num = page_idx + 1
    cache_file = os.path.join(CACHE_DIR, f"page_{page_num:03d}.json")
    
    if os.path.exists(cache_file):
        try:
            with open(cache_file, "r", encoding="utf-8") as f:
                data = json.load(f)
                if data and "lines" in data:
                    return page_num, data["lines"], True
        except Exception:
            pass

    doc = fitz.open(pdf_path)
    page = doc[page_idx]
    
    imgs = page.get_images()
    img_cv = None
    if imgs:
        try:
            xref = imgs[0][0]
            base_img = doc.extract_image(xref)
            img_bytes = base_img["image"]
            nparr = np.frombuffer(img_bytes, np.uint8)
            img_cv = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        except Exception:
            img_cv = None
            
    if img_cv is None:
        pix = page.get_pixmap(dpi=130)
        img_bytes = pix.tobytes("png")
        nparr = np.frombuffer(img_bytes, np.uint8)
        img_cv = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    doc.close()

    res, _ = ocr(img_cv)
    
    items = []
    if res:
        for item in res:
            box, text, score = item
            text = text.strip()
            if not text or "camscanner" in text.lower():
                continue
            y_top = min(p[1] for p in box)
            x_left = min(p[0] for p in box)
            y_bottom = max(p[1] for p in box)
            items.append({
                "text": text,
                "x": x_left,
                "y": y_top,
                "h": y_bottom - y_top
            })

    # Group into reading lines
    items.sort(key=lambda it: it["y"])
    lines = []
    curr_line = []
    curr_y = None
    line_thresh = 15.0

    for it in items:
        if curr_y is None or abs(it["y"] - curr_y) <= line_thresh:
            curr_line.append(it)
            if curr_y is None:
                curr_y = it["y"]
        else:
            curr_line.sort(key=lambda x: x["x"])
            lines.append("  ".join(x["text"] for x in curr_line))
            curr_line = [it]
            curr_y = it["y"]

    if curr_line:
        curr_line.sort(key=lambda x: x["x"])
        lines.append("  ".join(x["text"] for x in curr_line))

    # Save to cache
    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump({"page_num": page_num, "lines": lines}, f, ensure_ascii=False, indent=2)

    return page_num, lines, False


def main():
    print(f"Starting OCR extraction for: {PDF_PATH}")
    doc = fitz.open(PDF_PATH)
    total_pages = len(doc)
    doc.close()
    print(f"Total pages to extract: {total_pages}")

    start_time = time.time()
    results = {}
    
    # Check already cached pages
    cached_count = 0
    pages_to_process = []
    for i in range(total_pages):
        p_num = i + 1
        c_file = os.path.join(CACHE_DIR, f"page_{p_num:03d}.json")
        if os.path.exists(c_file):
            cached_count += 1
            with open(c_file, "r", encoding="utf-8") as f:
                results[p_num] = json.load(f)["lines"]
        else:
            pages_to_process.append(i)

    print(f"Already cached: {cached_count}/{total_pages} pages")
    print(f"Remaining pages to OCR: {len(pages_to_process)}")

    if pages_to_process:
        with ThreadPoolExecutor(max_workers=3) as executor:
            future_to_idx = {
                executor.submit(process_single_page, PDF_PATH, idx): idx
                for idx in pages_to_process
            }
            completed = 0
            for future in as_completed(future_to_idx):
                idx = future_to_idx[future]
                try:
                    p_num, lines, was_cached = future.result()
                    results[p_num] = lines
                    completed += 1
                    elapsed = time.time() - start_time
                    rate = completed / max(1, elapsed)
                    rem = (len(pages_to_process) - completed) / max(0.001, rate)
                    print(f"[{completed}/{len(pages_to_process)}] Processed Page {p_num} ({len(lines)} lines) | Elapsed: {elapsed:.1f}s | ETA: {rem:.1f}s")
                except Exception as e:
                    print(f"Error processing page {idx + 1}: {e}")

    print("\nAll pages extracted! Compiling Markdown and Text documents...")

    # Build Table of Contents
    toc_entries = []
    for p_num in range(1, total_pages + 1):
        lines = results.get(p_num, [])
        first_meaningful = ""
        for l in lines:
            l_clean = l.strip()
            if len(l_clean) > 3:
                first_meaningful = l_clean
                break
        if not first_meaningful:
            first_meaningful = f"Page {p_num}"
        # Truncate if long
        if len(first_meaningful) > 60:
            first_meaningful = first_meaningful[:57] + "..."
        toc_entries.append((p_num, first_meaningful))

    # Generate Markdown (.md)
    print(f"Writing Markdown to: {MD_PATH}")
    with open(MD_PATH, "w", encoding="utf-8") as f_md:
        f_md.write("# Netzwerk A1: Deutsch als Fremdsprache - Kursbuch\n\n")
        f_md.write("> **Authors**: Stefanie Dengler, Paul Rusch, Helen Schmitz, Tanja Sieber  \n")
        f_md.write("> **Publisher**: Klett-Langenscheidt / Goyal Publishers  \n")
        f_md.write("> **Target Level**: CEFR A1 (German / Deutsch als Fremdsprache)  \n")
        f_md.write(f"> **Original File**: `toaz.info-netzwerk-a1-kursbuch-pdf-pr_da44e806492088f2152c95f8684eeded.pdf`  \n")
        f_md.write(f"> **Total Pages**: {total_pages}  \n")
        f_md.write("> **Extraction Engine**: RapidOCR High-Precision OCR Engine  \n\n")
        f_md.write("---\n\n")
        f_md.write("## Table of Contents (Page Index)\n\n")
        for p_num, title in toc_entries:
            f_md.write(f"- [Page {p_num}: {title}](#page-{p_num})\n")
        f_md.write("\n---\n\n")
        f_md.write("# Book Content\n\n")

        for p_num in range(1, total_pages + 1):
            f_md.write(f'<a id="page-{p_num}"></a>\n\n')
            f_md.write("---\n\n")
            f_md.write(f"### [Page {p_num}]\n\n")
            lines = results.get(p_num, [])
            if lines:
                f_md.write("\n".join(lines) + "\n\n")
            else:
                f_md.write("*(No text detected on this page)*\n\n")

    # Generate Plain Text (.txt)
    print(f"Writing Plain Text to: {TXT_PATH}")
    with open(TXT_PATH, "w", encoding="utf-8") as f_txt:
        f_txt.write("=" * 80 + "\n")
        f_txt.write("Netzwerk A1: Deutsch als Fremdsprache - Kursbuch\n")
        f_txt.write("Authors: Stefanie Dengler, Paul Rusch, Helen Schmitz, Tanja Sieber\n")
        f_txt.write("Publisher: Klett-Langenscheidt / Goyal Publishers\n")
        f_txt.write("Target Level: CEFR A1 (German / Deutsch als Fremdsprache)\n")
        f_txt.write(f"Total Pages: {total_pages}\n")
        f_txt.write("=" * 80 + "\n\n")
        f_txt.write("TABLE OF CONTENTS (PAGE INDEX)\n")
        f_txt.write("-" * 80 + "\n")
        for p_num, title in toc_entries:
            f_txt.write(f"- Page {p_num:3d}: {title}\n")
        f_txt.write("\n" + "=" * 80 + "\n\n")

        for p_num in range(1, total_pages + 1):
            f_txt.write("=" * 80 + "\n")
            f_txt.write(f"--- PAGE {p_num} ---\n")
            f_txt.write("=" * 80 + "\n\n")
            lines = results.get(p_num, [])
            if lines:
                f_txt.write("\n".join(lines) + "\n\n")
            else:
                f_txt.write("(No text detected on this page)\n\n")

    print("Extraction and document compilation completed successfully!")
    print(f"MD file size: {os.path.getsize(MD_PATH)} bytes")
    print(f"TXT file size: {os.path.getsize(TXT_PATH)} bytes")

if __name__ == "__main__":
    main()
