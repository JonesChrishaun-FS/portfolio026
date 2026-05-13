import ProjectDetail from "../ProjectDetail";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

const project = projects.find((project) => project.slug === "admin-dashboard");

if (!project) notFound();

export default function Page() {
  return <ProjectDetail project={project} />;
}
