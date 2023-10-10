import { useState, useEffect } from 'react'


const Formulario = () => {

  const[nombre, setNombre] = useState('');
  const[propietario, setPropietario] = useState('');
  const[email, setEmail] = useState('');
  const[fecha, setFecha] = useState('');
  const[sintomas, setSintomas] = useState('');


  const handleSubmit = e => {
    e.preventDefault();

    // Validar formulario
    if(nombre.trim() === '') {
      console.log('El campo nombre esta vacio');
      return;
    }

    // Crear objeto con los datos
    const datos = {
      nombre
    }

    // Enviar los datos al componente principal
    console.log(datos);

    // Reiniciar el formulario
    setNombre('');
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '} <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 ml-5 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={ e => setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={ e => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email de contacto
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={ e => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Fecha de alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fecha}
            onChange={ e => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
           id="sintomas"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ e => setSintomas(e.target.value) }
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar paciente"
        />
      </form>
    </div>
  )
}

export default Formulario