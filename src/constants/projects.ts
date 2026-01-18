export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string; // We'll use a placeholder for now
}

export const PROJECTS: Project[] = [
  {
    id: 2,
    title: "E-Commerce",
    description: "Built with Next.js 14 (App Router) for Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) to ensure lightning-fast page loads",
    tags: [""],
    link: "https://shaido-shop.vercel.app",
    github: "",
    image: "/images/shaido-e.png",
  }
];