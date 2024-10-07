// src/pages/AdminDashboard.tsx
import React, { useState } from "react";
import AddProject from "./AddProject"; // Importa el componente AddProject
import ProjectApprovalModal from "./ProjectApprovalModal"; // Modal para aprobación

interface Project {
  name: string;
  description: string;
}

const AdminDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectSubmit = (project: Project) => {
    setProjects((prev) => [...prev, project]);
  };

  const handleApproveProject = () => {
    // Lógica para crear el token y mover el proyecto a la sección de explorar
    if (selectedProject) {
      // Lógica para crear el token y agregar a la lista de proyectos explorables
      console.log("Token creado para el proyecto:", selectedProject);
      // Aquí podrías llamar a la función que crea el token
    }
    setShowModal(false);
    setSelectedProject(null);
  };

  const openApprovalModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <AddProject onSubmit={handleProjectSubmit} />
      <h3>Proyectos Enviados</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.name}{" "}
            <button onClick={() => openApprovalModal(project)}>Aprobar</button>
          </li>
        ))}
      </ul>
      {showModal && selectedProject && (
        <ProjectApprovalModal
          project={selectedProject}
          onClose={() => setShowModal(false)}
          onApprove={handleApproveProject}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
