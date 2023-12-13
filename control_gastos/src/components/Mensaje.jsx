
const Mensaje = ({children, tipo}) => {
    //Children es el mensaje y tipo es la clase para el tipo de mensaje
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}

export default Mensaje