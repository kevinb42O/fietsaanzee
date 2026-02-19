
import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900 overflow-x-clip">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
