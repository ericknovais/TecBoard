// props é um OBJETO
// props.children é o conteúdo que fica entre a abertura e fechamento da tag do componente
// Ex: <TituloFormulario>Conteúdo</TituloFormulario>
// props.children === "Conteúdo"
 function TituloFormulario(props){
  return <h2>
    {props.children}
  </h2>
}

export default TituloFormulario