import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Go"],
  },
  {
    label: "Backend",
    items: ["Django", "DRF", "Celery", "Node.js", "Express"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Elasticsearch"],
  },
  {
    label: "Cloud & Infra",
    items: ["AWS ECS", "EC2", "RDS", "SQS", "S3", "Docker", "GitHub Actions"],
  },
  {
    label: "Tooling",
    items: ["Claude Code", "MCP", "n8n", "Supabase", "Auth0"],
  },
];
