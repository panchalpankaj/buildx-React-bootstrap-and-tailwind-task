import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MRCGZBKrTuOspcbRPvItyFD7A7eq6LQn4nd8ZYeDpDgKAfkeM0sFugSSiZp1Ucsc" crossorigin="anonymous"></script>


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
