import React, { useState } from 'react';

const initialLoginState = {
    email: '',
    password: '',
};

const initialSignupState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState(initialLoginState);
    const [signupData, setSignupData] = useState(initialSignupState);

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Add login logic here (API call, validation, etc.)
        // For now, just clear the form
        setLoginData(initialLoginState);
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here (API call, validation, etc.)
        // For now, just clear the form
        setSignupData(initialSignupState);
    };

    const toggleMode = () => setIsLogin((prev) => !prev);

    return (
        <div style={styles.container}>
            <form
                onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}
                style={styles.form}
            >
                <h2 style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</h2>
                {!isLogin && (
                    <div style={styles.inputGroup}>
                        <label htmlFor="fullName" style={styles.label}>Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={signupData.fullName}
                            onChange={handleSignupChange}
                            required
                            style={styles.input}
                            autoComplete="name"
                        />
                    </div>
                )}
                <div style={styles.inputGroup}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={isLogin ? loginData.email : signupData.email}
                        onChange={isLogin ? handleLoginChange : handleSignupChange}
                        required
                        style={styles.input}
                        autoComplete="email"
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={isLogin ? loginData.password : signupData.password}
                        onChange={isLogin ? handleLoginChange : handleSignupChange}
                        required
                        style={styles.input}
                        autoComplete={isLogin ? "current-password" : "new-password"}
                    />
                </div>
                {!isLogin && (
                    <div style={styles.inputGroup}>
                        <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={signupData.confirmPassword}
                            onChange={handleSignupChange}
                            required
                            style={styles.input}
                            autoComplete="new-password"
                        />
                    </div>
                )}
                <button type="submit" style={styles.button}>
                    {isLogin ? 'Login to TrashTrack' : 'Create Account'}
                </button>
                <div style={styles.toggleText}>
                    {isLogin ? (
                        <>
                            Need an account?{' '}
                            <span style={styles.link} onClick={toggleMode}>
                                Sign Up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <span style={styles.link} onClick={toggleMode}>
                                Login
                            </span>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

// Simple inline styling for mobile-responsive and centered layout
const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f6fa',
    },
    form: {
        width: '100%',
        maxWidth: 350,
        background: '#fff',
        padding: '2rem 1.5rem',
        borderRadius: 10,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1rem',
        fontWeight: 600,
        fontSize: '1.5rem',
        letterSpacing: 0.5,
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
    },
    label: {
        fontSize: '1rem',
        marginBottom: 2,
        color: '#222',
    },
    input: {
        padding: '0.7rem 0.9rem',
        fontSize: '1rem',
        borderRadius: 5,
        border: '1px solid #ddd',
        outline: 'none',
        background: '#f9f9f9',
    },
    button: {
        marginTop: 8,
        padding: '0.8rem',
        borderRadius: 6,
        background: '#009966',
        color: '#fff',
        fontWeight: 600,
        border: 'none',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'background 0.2s',
    },
    toggleText: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: '0.97rem',
        color: '#444',
    },
    link: {
        color: '#009966',
        cursor: 'pointer',
        fontWeight: 500,
        textDecoration: 'underline',
        marginLeft: 4,
    },
};

export default AuthForm;
