import '../App.css'
import { AppUi } from './App-UI';
import { TodoProvider } from './TodoContex';


function App() {  
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  )  
}

export default App
