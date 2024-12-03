import React from "react";
import Homepage from "./pages/HomePage/homepage";
import Contact from "./pages/Contact/contact";
import { Routes, Route } from 'react-router-dom'
import './styles/global.css'

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
        </div>
    );
}

export default App;
