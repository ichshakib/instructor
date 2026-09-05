"use client";

/**
 * German Speech Synthesis Utility
 * Uses the Web Speech API (SpeechSynthesis) to pronounce German words and phrases.
 */

class GermanSpeechService {
  private synth: SpeechSynthesis | null = null;
  private germanVoice: SpeechSynthesisVoice | null = null;
  private isInitialized = false;

  private init() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    this.synth = window.speechSynthesis;

    const findVoice = () => {
      if (!this.synth) return;
      const voices = this.synth.getVoices();
      // Look for de-DE or any German voice
      const deVoice =
        voices.find((v) => v.lang === "de-DE") ||
        voices.find((v) => v.lang.startsWith("de")) ||
        voices[0] ||
        null;
      this.germanVoice = deVoice;
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
    this.isInitialized = true;
  }

  /**
   * Speak a German text with clean natural pacing
   */
  public speak(
    rawText: string,
    options?: {
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: () => void;
    }
  ): void {
    if (!this.isInitialized) {
      this.init();
    }
    if (!this.synth) {
      options?.onError?.();
      return;
    }

    // Stop any ongoing speech
    this.synth.cancel();

    // Clean text: strip out English translations in parentheses, brackets, or arrows
    // e.g. "das Wasser (water)" -> "das Wasser"
    let cleanText = rawText
      .replace(/\(.*?\)/g, "")
      .replace(/\[.*?\]/g, "")
      .replace(/\(.*?$/g, "")
      .replace(/->.*$/g, "")
      .trim();

    // If there is an equals sign like "W = [V]", extract the German term "W"
    if (cleanText.includes("=")) {
      cleanText = (cleanText.split("=")[0] || "").trim();
    }

    // If phrase has English explanatory "sounds like", isolate the German text
    if (/sounds like/i.test(cleanText)) {
      cleanText = (cleanText.split(/sounds like/i)[0] || "").trim();
    }

    if (!cleanText) {
      options?.onEnd?.();
      return;
    }

    // Dynamic voice re-check in case voices loaded asynchronously
    if (!this.germanVoice && this.synth) {
      const voices = this.synth.getVoices();
      this.germanVoice =
        voices.find((v) => v.lang === "de-DE") ||
        voices.find((v) => v.lang.startsWith("de")) ||
        null;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "de-DE";
    utterance.rate = options?.rate ?? 0.88; // slightly relaxed rate for language learners
    utterance.pitch = options?.pitch ?? 1.0;

    if (this.germanVoice) {
      utterance.voice = this.germanVoice;
    }

    utterance.onstart = () => {
      options?.onStart?.();
    };

    utterance.onend = () => {
      options?.onEnd?.();
    };

    utterance.onerror = () => {
      options?.onError?.();
    };

    this.synth.speak(utterance);
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const speechService = new GermanSpeechService();
