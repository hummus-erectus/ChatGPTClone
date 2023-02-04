import './App.css'
import OptionSelection from './components/OptionSelection'
import { arrayItems } from './AIOptions'

function App() {
  // const configuration = new Configuration({
  //   apiKey: import.meta.env.VITE_Open_AI_Key,
  // })


  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems}/>
    </div>
  )
}

export default App
