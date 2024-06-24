import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Hero from "./Hero";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
                {/* Contenu principal de la page */}
                 <Hero/>
            </main>
            <Footer />
        </div>
    );
}

export default App;
