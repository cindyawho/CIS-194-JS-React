import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
        <Routes>
          <Route path='/' exact element={<NotesListPage />} />
          <Route path='/note/:userId' element={<NotePage />} />
        </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
