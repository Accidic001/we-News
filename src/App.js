
import { Routes , Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/news' element={<NewsPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
