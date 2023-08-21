import { ActionHome } from "./components/ActionHome";
import { InfoSession } from './components/InfoSession';
import { Library } from './components/Library';
import './styles/App.css'

const App = ():JSX.Element =>{
  return (
    <>
      <div className="grid grid-cols-6 lg:grid-cols-8 gap-2 m-2 bg-black">
        <div className="col-span-3 lg:col-span-2">
          <div className="flex flex-col">
            <ActionHome />
            <Library />
          </div>
          </div>
        <div className="col-span-3 lg:col-span-6"><InfoSession /></div>
      </div>
    </>
  )
}
export default App
