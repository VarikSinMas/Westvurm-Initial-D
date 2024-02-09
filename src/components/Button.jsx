import React, { useState } from "react";
import countriesData from "../assets/countries.json";

const Button = ({ styles }) => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const handleButtonClick = () => {
    setShowQuestionnaire(true);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Get Started
      </button>

      {showQuestionnaire && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-[400px]">
            <h2 className="text-2xl font-bold mb-4">Registro</h2>
            {/* Formulario de Registro */}
            <form>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full border rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">
                  Apellidos
                </label>
                <input type="text" id="apellidos" name="apellidos" className="mt-1 p-2 w-full border rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input type="email" id="correo" name="correo" className="mt-1 p-2 w-full border rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="pais" className="block text-sm font-medium text-gray-700">
                  País
                </label>
                {/* Campo de selección de países */}
                <select
  id="pais"
  name="pais"
  className="mt-1 p-2 w-full border rounded text-black"
>
  {countriesData.map((country) => (
    <option key={country.abbreviation} value={country.country}>
      {country.country}
    </option>
  ))}
</select>
              </div>
              {/* Otros campos según tus necesidades */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowQuestionnaire(false)}
                  className="py-2 px-4 bg-blue-gradient text-white rounded hover:bg-blue-700 mr-2"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-gradient text-white rounded hover:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
