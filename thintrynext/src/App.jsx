import React from "react";
import Homepage from "./pages/HomePage/homepage";
import Articles from "./pages/Articles/articles";
import Spotlight from "./pages/Spotlight/spotlight";
import { Routes, Route } from 'react-router-dom'
import './styles/global.css'

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    {/* <Route path="/articles" element={<Articles/>} />
                    <Route path="/spotlight" element={<Spotlight/>} /> */}
                </Routes>
        </div>
    );
}

export default App;
