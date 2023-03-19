import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
