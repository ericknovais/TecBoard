
import './formulario-de-evento.estilos.css'
import  TituloFormulario  from "../TituloFormulario";
import  CampoDeEntrada from "../CampoDeEntrada";
import  CampoDeFormulario  from "../CampoDeFormulario";
import  Label  from "../Label";

function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      <TituloFormulario> 
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
      </CampoDeFormulario>
    </form>
  )
}

export  default FormularioDeEvento