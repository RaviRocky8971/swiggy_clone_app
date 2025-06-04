// App.js
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Search from './components/Search';
import Offers from './components/Offers';
import Help from './components/Help';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import SwiggyCorporate from './components/SwiggyCorporate';
import Home from './components/Home';

function AppContent() {
    const location = useLocation();
    const hideHeaderPaths = ["/swiggycorporate","/search","/offers","/help","/signin","/cart"];
    const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

    return (
        <div>
            {shouldShowHeader && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/swiggycorporate" element={<SwiggyCorporate />} />
                <Route path="/search" element={<Search />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/help" element={<Help />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
