import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Work from './views/Work'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<Work />} />
      </Routes>
    </Router>
  )
}

export default App
