export interface Project {
  id: string;
  key: string;
  name: string;
  img: string;
  liveURL: string;
  repoURL: string | null;
  blurb: string;
  tech: string[];
}
