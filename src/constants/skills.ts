export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
}

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Git", category: "Tools" },
  { name: "Adobe PS", category: "Design" },
  { name: "supabase", category: "Backend" }
];
