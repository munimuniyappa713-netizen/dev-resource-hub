export interface RoadmapResource {
  name: string;
  url: string;
}

export interface Roadmap {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: string;
  icon: string;
  skills: string[];
  resources: RoadmapResource[];
}
