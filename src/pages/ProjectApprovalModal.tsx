// src/pages/ProjectApprovalModal.tsx
import React from "react";

const ProjectApprovalModal: React.FC<{
  project: any;
  onClose: () => void;
  onApprove: () => void;
}> = ({ project, onClose, onApprove }) => {
  return (
    <div className="modal">
      <h2>Aprobar Proyecto: {project.name}</h2>
      <p>{project.description}</p>
      <h3>Requisitos</h3>
      <ul>
        <li>Requisito 1: [Descripción]</li>
        <li>Requisito 2: [Descripción]</li>
        <li>Requisito 3: [Descripción]</li>
        {/* Agrega más requisitos según sea necesario */}
      </ul>
      <button onClick={onApprove}>Aprobar Proyecto y Crear Token</button>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default ProjectApprovalModal;
