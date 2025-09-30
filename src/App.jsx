import './App.css'
import FormularioDeEvento  from './componentes/FormularioDeEvento'

// No react, componentes são FUNÇÕES que retornam HTML (JSX)
// Componentes sempre começam com letra maiúscula
// Um componente pode retornar APENAS UM ELEMENTO PAI
// Esse elemento pai pode ter N filhos

function App() {
  return (
  <main>
    <header>
      <img src="/logo.png" alt="" />
    </header>
    <section>
      <img src="/banner.png" alt="" />
    </section>
    <FormularioDeEvento />
  </main>
  )
}

export default App
