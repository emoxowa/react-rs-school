import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Forms from './pages/Forms/Forms';
import * as ROUTES from './constants/routes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path={ROUTES.ABOUT}
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path={ROUTES.FORMS}
            element={
              <>
                <Header />
                <Forms />
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
