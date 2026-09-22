import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { ProjectCaseStudy } from "@/components/work/project-case-study";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return { title: project.name, description: project.context };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <ProjectCaseStudy project={project} next={next} />;
}
