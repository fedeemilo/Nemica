import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    opciones: {
      arbolGenealogico: false,
      testimonios: false,
      circuloRelaciones: false,
      resumenBiografico: false,
      lineaDeTiempo: false,
      videoclip: false,
      museum: false,
      sintesisGenetica: false,
      todos: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        opciones: {
          ...prevData.opciones,
          [name]: checked,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes procesar los datos del formulario, como enviarlos a un servidor
    console.log(formData);
  };

  return (
    <div className="form-container bg-beige p-6 text-purpura">
      <h1 className="text-2xl font-bold">Formulario de Contacto</h1>
      <p className="font-base">
        Envíanos tus datos para que nos pongamos en contacto
      </p>
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-md mx-auto">
          <label htmlFor="nombre" className="block text-sm font-medium">
            Nombre
          </label>
          <input
            className='className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white'
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        <div className="w-full max-w-md mx-auto">
          <label htmlFor="apellido">Apellido</label>
          <input
            className='className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white'
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Ingresa tu apellido"
            required
          />
        </div>

        <div className="w-full max-w-md mx-auto">
          <label htmlFor="email">Email</label>
          <input
            className='className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@mail.com"
            required
          />
        </div>

        <div className="w-full max-w-md mx-auto">
          <label htmlFor="telefono">Teléfono celular</label>
          <input
            className='className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white'
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="011 0000 0000"
            required
          />
        </div>

        <div className="bg-beige p-6 rounded-lg max-w-md mx-auto">
          <p className="text-lg font-semibold text-purpura mb-4">
            Elegi los formatos que más te interesen o el legado completo:
          </p>
          <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
            <label className="flex items-center gap-2 text-purpura">
              <input
                type="checkbox"
                name="arbolGenealogico"
                checked={formData.opciones.arbolGenealogico}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Árbol genealógico
            </label>

            <label className="flex items-center gap-2 text-purpura">
              <input
                type="checkbox"
                name="testimonios"
                checked={formData.opciones.testimonios}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Testimonios
            </label>

            <label className="flex items-center gap-3 text-purpura">
              <input
                type="checkbox"
                name="circuloRelaciones"
                checked={formData.opciones.circuloRelaciones}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Círculo de relaciones
            </label>

            <label className="flex items-center gap-3 text-purpura">
              <input
                type="checkbox"
                name="resumenBiografico"
                checked={formData.opciones.resumenBiografico}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Resumen biográfico
            </label>

            <label className="flex items-center gap-3 text-purpura">
              <input
                type="checkbox"
                name="lineaDeTiempo"
                checked={formData.opciones.lineaDeTiempo}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Línea de tiempo
            </label>

            <label className="flex items-center gap-3 text-purpura">
              <input
                type="checkbox"
                name="videoclip"
                checked={formData.opciones.videoclip}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Videoclip
            </label>

            <label className="flex items-center gap-3 text-purpura">
              <input
                type="checkbox"
                name="museum"
                checked={formData.opciones.museum}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Museum
            </label>

            <label className="flex items-center gap-3 text-purpura">
              <input
                type="checkbox"
                name="sintesisGenetica"
                checked={formData.opciones.sintesisGenetica}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Síntesis genética
            </label>

            <label className="flex items-center gap-3 text-purpura">
              <input
                type="checkbox"
                name="todos"
                checked={formData.opciones.todos}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-white border-2 border-purple-500 rounded focus:ring-2 focus:ring-purple-400 accent-purpura"
              />
              Todos
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-purple-700 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-purple-800 transition lg:w-50"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
