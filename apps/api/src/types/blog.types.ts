export type BlogCategory =
  | "Grammar"
  | "Vocabulary"
  | "Exam Prep"
  | "German Life & Culture"
  | "Study Tips"
  | "Career";

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogSection {
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  keyTakeaway?: string;
  bulletPoints?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  sections: BlogSection[];
}
