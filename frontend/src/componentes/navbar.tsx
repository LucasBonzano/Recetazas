import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Cambiar el estado para abrir o cerrar el menú
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <a
        href="/"
        className="text-2xl font-bold text-gray-800"
        onClick={(e) => {
          e.preventDefault();
          handleNavigate("/");
        }}
      >
        Recetazas
      </a>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Buscar recetas..."
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleNavigate("/NewReceta")}
          className="hidden sm:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Publicar receta
        </button>
        <div className="relative">
          <button
            onClick={toggleMenu} // Al hacer clic, se cambia el estado de visibilidad del menú
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Menú
          </button>
          {/* Menú desplegable */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <button
                onClick={() => handleNavigate("/Login")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Iniciar sesión
              </button>
              <button
                onClick={() => handleNavigate("/Recetas")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Recetas
              </button>
              <button
                onClick={() => handleNavigate("/About")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Acerca de
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
