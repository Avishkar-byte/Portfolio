"use client";
import { CinematicProjects } from "./CinematicProjects";
import { ALL_PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <CinematicProjects projects={ALL_PROJECTS} />
    </section>
  );
}
