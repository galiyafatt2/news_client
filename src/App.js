import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import NewsListPage from './components/NewsListPage';
import NewsPage from './components/NewsPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
  );
}

export default App;
