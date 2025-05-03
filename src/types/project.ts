export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  frontend: string[];
  backend: string[];
  website?: string;
  github?: string;
}
