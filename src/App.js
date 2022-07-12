import './index.scss'
import LOGO from './img/logo.svg'

const App = () => {
  return <>
    <h1>Boilerplate for React apps - {process.env.name}</h1>
    <img src={LOGO} alt='React Logo' width='100'></img>
  </>
}

export default App