"use client";

import React, { useRef, useState, useEffect } from "react";
import { ProjectData } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/ui/project-modal";
import { Badge } from "@/components/ui/badge";
import { CinematicProjects } from "./CinematicProjects";

import { ALL_PROJECTS } from "@/data/projects";



export default function ProjectsSection() {
  return (
    <section id="projects">
      <CinematicProjects projects={ALL_PROJECTS} />
    </section>
  );
}
