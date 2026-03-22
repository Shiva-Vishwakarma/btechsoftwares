export interface Team {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  skills: string[];
}
