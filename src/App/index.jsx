import '../App.css'
import { AppUi } from './App-UI';
import { TodoProider } from './TodoContex';


function App() {  
  return (
    <TodoProider>
      <AppUi />
    </TodoProider>
  )  
}

export default App
