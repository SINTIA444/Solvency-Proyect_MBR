// src/pages/AddProject.tsx
import React, { useState } from "react";

const AddProject: React.FC<{ onSubmit: (project: any) => void }> = ({
  onSubmit,
}) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      name: projectName,
      description: projectDescription,
      // Aquí podrías agregar más campos según tus necesidades
    };
    onSubmit(newProject); // Llama a la función onSubmit pasada como prop
    setProjectName("");
    setProjectDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Proyecto</h2>
      <label>
        Nombre del Proyecto:
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </label>
      <label>
        Descripción:
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Enviar Proyecto</button>
    </form>
  );
};

export default AddProject;
