import ThemeNavbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeNavbar />
      </BrowserRouter>
    </>
  )
}

export default App
