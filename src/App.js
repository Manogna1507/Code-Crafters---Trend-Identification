import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Trivia from './Components/Pages/Trivia';
import Games from './Components/Pages/Games';
import NavigationBar from './Components/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar />
                <main className="content"> {/* Wrap the routes in a main tag */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trivia" element={<Trivia />} />
                        <Route path="/games" element={<Games />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
