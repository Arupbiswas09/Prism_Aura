import { motion } from 'framer-motion';
import ProjectGrid from './ProjectGrid';
import ProjectFilters from './ProjectFilters';
import { useState } from 'react';
import { Category, Project } from './types';
import { projects } from './data';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my latest projects and creative works across various design disciplines.
        </p>
      </motion.div>

      <ProjectFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}