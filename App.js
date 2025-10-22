import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// Import all components created by the team here:
import Home from './components/Home'; // Kirt's component
import PetitionFeed from './components/PetitionFeed'; // Kirt's component
import AuthForm from './components/AuthForm'; // Your component
import CreatePetition from './components/CreatePetition'; // Your component
import HowToUse from './components/HowToUse'; // Your component
import FAQ from './components/FAQ'; // Your component
import SocialLinks from './components/SocialLinks'; // Your component
import Footer from './components/Footer'; // Assume a simple Footer component exists

// Basic Navbar/Header component
const Navbar = () => {
    const location = useLocation();
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <Link to="/" style={styles.logoLink}>RISE</Link>
            </div>
            <div style={styles.navLinks}>
                <Link to="/" style={getLinkStyle(location, "/")}>Home</Link>
                <Link to="/feed" style={getLinkStyle(location, "/feed")}>Petitions</Link>
                <Link to="/new-petition" style={getLinkStyle(location, "/new-petition")}>Create Petition</Link>
                <Link to="/how-to-use" style={getLinkStyle(location, "/how-to-use")}>How To Use</Link>
                <Link to="/faq" style={getLinkStyle(location, "/faq")}>FAQ</Link>
                <Link to="/login" style={getLinkStyle(location, "/login")}>Login</Link>
            </div>
        </nav>
    );
};

function getLinkStyle(location, path) {
    return {
        ...styles.navLink,
        ...(location.pathname === path ? styles.activeLink : {}),
    };
}

const App = () => {
    return (
        <Router>
            <div style={styles.appContainer}>
                <Navbar />
                <main style={styles.main}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/feed" element={<PetitionFeed />} />
                        <Route path="/login" element={<AuthForm />} />
                        <Route path="/signup" element={<AuthForm />} />
                        <Route path="/new-petition" element={<CreatePetition />} />
                        <Route path="/how-to-use" element={<HowToUse />} />
                        <Route path="/faq" element={<FAQ />} />
                        {/* Add a catch-all route or 404 page if you wish */}
                    </Routes>
                    <div style={{ margin: "2rem 0 1rem 0" }}>
                        <SocialLinks />
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

// Simple styling object for layout and navbar
const styles = {
    appContainer: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#f5f6fa',
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '80vh',
    },
    navbar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.7rem 2rem',
        background: '#fff',
        borderBottom: '1px solid #e5e8eb',
        boxShadow: '0 1px 8px rgba(0,0,0,0.02)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        minHeight: 60,
    },
    logo: {
        fontSize: '1.45rem',
        fontWeight: 700,
    },
    logoLink: {
        color: '#009966',
        textDecoration: 'none',
        letterSpacing: 1,
    },
    navLinks: {
        display: 'flex',
        gap: '1.3rem',
    },
    navLink: {
        color: '#196547',
        fontWeight: 600,
        textDecoration: 'none',
        fontSize: '1.05rem',
        padding: '0.2rem 0.3rem',
        borderRadius: 3,
        transition: 'background 0.18s,color 0.18s',
    },
    activeLink: {
        background: '#e9f7ef',
        color: '#009966',
    },
};

export default App;
