export type AcademyDto = {
  created_at: string;
  featured_image: string;
  id: number;
  is_pinned: number;
  lang: string;
  level: string;
  news_content: string;
  posted_by: string;
  slug: string;
  title: string;
  updated_at: string | null;
  visibility: number;
};

export enum AcademyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export type NewsDto = AcademyDto;
