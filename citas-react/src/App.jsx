import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const[pacientes, setPacientes] = useState([]); // Array de objetos [{}]
  const [paciente,setPaciente] = useState({}); // Objeto {}
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
