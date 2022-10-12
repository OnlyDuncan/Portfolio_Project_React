import React from 'react';
import HomePage from './pages/Homepage';
import NewsPage from './pages/NewsPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='news' element={<NewsPage/>} />
        <Route path='portfolio' element={<PortfolioPage/>} />
        <Route path='about' element={<AboutMePage/>} />
        <Route path='contact' element={<ContactMePage/>} />
      </Routes>
    </div>
  );
}

export default App;
