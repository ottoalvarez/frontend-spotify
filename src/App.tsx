import './styles/App.css'
import { ActionHome } from "./components/ActionHome";
import { InfoSession } from './components/InfoSession';

const App = ():JSX.Element =>{
  return (
    <>
      <div className="grid grid-cols-6 gap-2 my-2 bg-black">
        <div className="col-span-3"><ActionHome /></div>
        <div className="col-span-3"><InfoSession /></div>
      </div>
    </>
  )
}
export default App
