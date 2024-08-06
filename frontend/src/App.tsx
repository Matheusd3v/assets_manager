import { RouteProvider } from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <RouteProvider/>
      <ToastContainer/>
    </>
  )
}

export default App
