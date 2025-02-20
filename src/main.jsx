import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Carousel from './components/Carousel.jsx';
import "./index.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Carousel/>
  </StrictMode>,
)