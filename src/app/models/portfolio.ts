export interface Portfolio {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}
