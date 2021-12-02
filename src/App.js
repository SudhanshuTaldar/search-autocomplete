import React from 'react';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div style={{ textAlign: "center" }}>
      <Router>
        <Routes>
          <Route path="/" element={<SearchBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
