import ProjectDetail from "../ProjectDetail";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

const project = projects.find(
  (project) => project.slug === "logo-design-collection",
);

if (!project) notFound();

export default function Page() {
  return <ProjectDetail project={project} />;
}
