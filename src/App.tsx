import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Connection } from "@solana/web3.js"; // Importamos la conexión de Solana
import ConnectWallet from "./components/ConnectWallet"; // Asegúrate de que esta ruta es correcta
import Footer from "./components/Footer";
import AddProject from "./pages/AddProject"; // Asegúrate de que la ruta es correcta
import ExploreProjects from "./pages/ExploreProjects"; // Asegúrate de que la ruta es correcta
import Transfer from "./components/Transfer"; // Asegúrate de tener este componente
import CreateToken from "./components/CreateToken"; // Asegúrate de que esta ruta es correcta
import CheckTokenBalance from "./components/CheckTokenBalance"; // Importar el nuevo componente
import ReviewProjects from "./pages/ReviewProjects"; // Importa la página de revisión de proyectos
import MainScreen from "./pages/MainScreen"; // Importa el nuevo componente de pantalla principal
import AdminDashboard from "./pages/AdminDashboard"; // Importa la página de administración
import ContractDetails from "./pages/ContractDetails"; // Importa la nueva página de detalles del contrato
import "./App.css"; // Importar los estilos

const App: React.FC = () => {
  // Nueva funcionalidad para conectarse a la testnet de Solana
  const connection = new Connection(
    "https://api.testnet.solana.com",
    "confirmed"
  );

  // Estado para almacenar el tipo de usuario registrado
  const [userType, setUserType] = useState<
    "mype" | "investor" | "admin" | null
  >(null);

  const checkConnection = async () => {
    try {
      const version = await connection.getVersion();
      console.log("Conectado a la testnet de Solana. Versión:", version);
    } catch (error) {
      console.error("Error conectando a la testnet de Solana:", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  useEffect(() => {
    // Recuperar el tipo de usuario registrado desde localStorage (simulación)
    const savedUserType = localStorage.getItem("userType");
    if (
      savedUserType === "mype" ||
      savedUserType === "investor" ||
      savedUserType === "admin"
    ) {
      setUserType(savedUserType as "mype" | "investor" | "admin");
    }
  }, []);

  return (
    <Router>
      <div>
        <div className="app-container">
          <h1>SOLVENCY-PROYECT</h1>
          <ConnectWallet /> {/* Componente para conectar la wallet */}
          <nav>
            {userType === "mype" ? (
              <>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/add">Añadir Proyectos</Link> |{" "}
                <Link to="/explore">Explorar Proyectos</Link>
              </>
            ) : userType === "investor" ? (
              <>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/explore">Explorar Proyectos</Link>
              </>
            ) : userType === "admin" ? (
              <>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/transfer">Transferir SOL</Link> |{" "}
                <Link to="/create-token">Crear Token</Link> |{" "}
                <Link to="/check-balance">Verificar Saldo</Link> |{" "}
                <Link to="/review">Revisar Proyectos</Link> |{" "}
                <Link to="/admin">Panel de Administración</Link>
              </>
            ) : (
              <>
                <Link to="/">Inicio</Link> {/* Enlace predeterminado */}
              </>
            )}
          </nav>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/add" element={<AddProject />} />
            <Route path="/explore" element={<ExploreProjects />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/create-token" element={<CreateToken />} />
            <Route path="/check-balance" element={<CheckTokenBalance />} />
            <Route path="/review" element={<ReviewProjects />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/contract/:projectId" element={<ContractDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
