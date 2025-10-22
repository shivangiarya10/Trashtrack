import React, { useState } from 'react';

const faqData = [
    {
        question: 'What is TrashTrack (RISE)?',
        answer:
            "It's a platform for citizens to report civic issues and collectively petition for action.",
    },
    {
        question: 'Is my identity visible?',
        answer:
            'User submissions can be anonymous or registered; only team members can view full data for verification.',
    },
    {
        question: 'How does a petition get resolved?',
        answer:
            'Petitions with a high number of upvotes are highlighted to local authorities and our community partners.',
    },
    {
        question: 'What kind of issues can I report?',
        answer:
            'Potholes, poor waste management, broken streetlights, water-logging, etc.',
    },
    {
        question: 'Who built this project?',
        answer:
            'This was created by a team of first-year PSIT Kanpur students for the Tech Expo.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h1 style={styles.heading}>Frequently Asked Questions</h1>
                <div style={styles.accordion}>
                    {faqData.map((item, idx) => (
                        <div key={idx} style={styles.faqItem}>
                            <button
                                style={{
                                    ...styles.question,
                                    ...(openIndex === idx ? styles.questionOpen : {}),
                                }}
                                onClick={() => toggleIndex(idx)}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                                id={`faq-question-${idx}`}
                                type="button"
                            >
                                <span>{item.question}</span>
                                <span style={styles.toggleIcon}>
                                    {openIndex === idx ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === idx && (
                                <div
                                    style={styles.answer}
                                    id={`faq-answer-${idx}`}
                                    aria-labelledby={`faq-question-${idx}`}
                                >
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
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
        width: '100%',
        maxWidth: 540,
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        padding: '2.2rem 2rem',
    },
    heading: {
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '2rem',
        color: '#00734b',
        letterSpacing: 0.5,
    },
    accordion: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    faqItem: {
        borderRadius: 8,
        background: '#f4f8fa',
        border: '1px solid #e5e8eb',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    },
    question: {
        width: '100%',
        background: 'none',
        border: 'none',
        outline: 'none',
        textAlign: 'left',
        fontSize: '1.1rem',
        fontWeight: 600,
        color: '#196547',
        padding: '1rem 1.1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.18s',
    },
    questionOpen: {
        background: '#e9f7ef',
    },
    toggleIcon: {
        fontSize: '1.5rem',
        lineHeight: 1,
        marginLeft: 10,
        color: '#009966',
        fontWeight: 700,
    },
    answer: {
        padding: '0.9rem 1.2rem 1.1rem 1.2rem',
        background: '#fff',
        fontSize: '1rem',
        color: '#232323',
        borderTop: '1px solid #e1e4ea',
        animation: 'fadeIn 0.25s',
    },
};

export default FAQ;
