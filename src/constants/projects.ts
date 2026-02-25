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
    tags: ["Next.js","TypeScript","Tailwind CSS","Supabase","Lucide React"],
    link: "https://shaido-shop.vercel.app",
    github: "",
    image: "/images/shaido-e.png",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Developed a high-performance admin dashboard using Next.js 15, TypeScript, and Tailwind CSS for real-time inventory and order management.",
    tags: ["Next.js","TypeScript","Tailwind CSS","Supabase","Lucide React"],
    link: "https://shaido-admin.vercel.app",
    github: "",
    image: "/images/admin.png",
  },
  {
    id: 4,
    title: "Saas project 'Testimonial Wall'",
    description: "The primary hurdle was creating a seamlessly embedded widget that could live on any website (Shopify, Webflow, React) without affecting the host site's SEO or performance. I solved this by developing a custom postMessage API bridge that dynamically syncs the height of the cross-domain iframe, ensuring zero layout shift and a 'native' feel.",
    tags: ["Next.js","TypeScript","Tailwind CSS","Supabase",],
    link: "https://testimonial-wall-ten.vercel.app",
    github: "",
    image: "/images/SaaS1.png",
  }
];
