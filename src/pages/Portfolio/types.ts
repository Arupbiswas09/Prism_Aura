export type Category = 'Branding' | 'UI/UX' | 'Print' | 'Illustration' | 'Motion';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  image: string;
  tags: string[];
  link?: string;
}