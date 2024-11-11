import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PDFme_editor from './components/PDFme_editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-pdf" element={<PDFme_editor />} />
      </Routes>
    </Router>
  );
}

export default App;
