const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Ricardo</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
          <span className="font-normal normal-case">Ricardo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
          <span className="font-normal normal-case">23/10/23</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">Tos</span>
        </p>
      </div>
  )
}

export default Paciente