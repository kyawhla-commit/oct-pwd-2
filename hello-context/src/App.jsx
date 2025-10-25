import { createContext, useContext} from "react"
import { useApp } from "../AppProvider";

const AppContext = createContext();

function Title() {
 const count = useApp();
  return <h1>Context ({ count})</h1>
}

function Header() {
  return (
    <div>
      <Title />
    </div>
  )
}

export default function App() {
return <div>
  <Header/>
</div>
}