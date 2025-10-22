import React from 'react';

const HowToUse = () => {
    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h1 style={styles.heading}>
                    RISE: Report Issue &amp; Seek Engagement - A Simple Guide
                </h1>
                <p style={styles.intro}>
                    Welcome to RISE! Our platform empowers you to spotlight local issues and rally community action. Follow these easy steps to report a problem and create real impact.
                </p>
                <ol style={styles.stepsList}>
                    <li style={styles.step}>
                        <strong>Sign Up or Log In</strong>
                        <div style={styles.stepDesc}>
                            Create an account or log in to access all features and start making a difference.
                        </div>
                    </li>
                    <li style={styles.step}>
                        <strong>Navigate to the 'Create Petition' Form</strong>
                        <div style={styles.stepDesc}>
                            Click on the <b>Create Petition</b> option from the menu or homepage.
                        </div>
                    </li>
                    <li style={styles.step}>
                        <strong>Provide a Clear Title and Detailed Description</strong>
                        <div style={styles.stepDesc}>
                            Give your issue a short, descriptive title and explain all important details that help others understand the problem and its impact.
                        </div>
                    </li>
                    <li style={styles.step}>
                        <strong>Pinpoint the Location and Upload a Photo</strong>
                        <div style={styles.stepDesc}>
                            Enter the exact address or landmark, and upload a relevant photo to make your petition more effective.
                        </div>
                    </li>
                    <li style={styles.step}>
                        <strong>Submit and Share Your Petition Link</strong>
                        <div style={styles.stepDesc}>
                            Submit your petition and share its link with your community to gather more support!
                        </div>
                    </li>
                </ol>
                <div style={styles.encouragement}>
                    <b>Together, we can build a better community — start your journey with RISE today!</b>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        background: '#f7fafd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
    },
    box: {
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        padding: '2.5rem 2rem',
        maxWidth: 540,
        width: '100%',
    },
    heading: {
        fontSize: '2.1rem',
        marginBottom: '1.3rem',
        textAlign: 'center',
        color: '#00734b',
        fontWeight: 700,
        letterSpacing: '0.5px',
        lineHeight: 1.2,
    },
    intro: {
        fontSize: '1.14rem',
        color: '#333',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    stepsList: {
        fontSize: '1.08rem',
        color: '#24292f',
        margin: 0,
        paddingLeft: '1.4em',
        marginBottom: '2rem',
        lineHeight: 1.8,
    },
    step: {
        marginBottom: '1.15em',
    },
    stepDesc: {
        marginTop: '0.15em',
        color: '#555',
        fontSize: '1rem',
    },
    encouragement: {
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: '1.11rem',
        color: '#00734b',
        background: '#e9f7ef',
        borderRadius: 6,
        padding: '1rem 0.5rem',
        fontWeight: 500,
    },
};

export default HowToUse;
