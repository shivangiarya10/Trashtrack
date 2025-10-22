import React, { useState } from 'react';

const initialState = {
    title: '',
    description: '',
    location: '',
    category: '',
    image: null,
};

const CreatePetition = () => {
    const [petitionData, setPetitionData] = useState(initialState);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPetitionData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setPetitionData((prev) => ({
            ...prev,
            image: e.target.files[0] || null,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!petitionData.title.trim() || !petitionData.description.trim()) {
            setError('Title and Description are required.');
            return;
        }
        // Logging the form data (for now, before integrating the API)
        const formData = { ...petitionData };
        if (formData.image) {
            formData.imageName = formData.image.name;
        }
        console.log('Petition Submitted:', formData);
        setPetitionData(initialState);
        e.target.reset();
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
                <h2 style={styles.title}>Submit a Petition/Report an Issue</h2>
                {error && <div style={styles.error}>{error}</div>}
                <div style={styles.inputGroup}>
                    <label htmlFor="title" style={styles.label}>Title *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        maxLength={100}
                        value={petitionData.title}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="Enter a short, clear title"
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="description" style={styles.label}>Description *</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={petitionData.description}
                        onChange={handleChange}
                        required
                        style={styles.textarea}
                        placeholder="Describe the issue in detail, including its impact."
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="location" style={styles.label}>Location/Address</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={petitionData.location}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="e.g., PSIT Kanpur Gate No. 3 or street name"
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="category" style={styles.label}>Category</label>
                    <select
                        id="category"
                        name="category"
                        value={petitionData.category}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Potholes">Potholes</option>
                        <option value="Garbage/Waste">Garbage/Waste</option>
                        <option value="Water Leakage">Water Leakage</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="image" style={styles.label}>Image (optional)</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={styles.fileInput}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    Submit Petition
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f6fa',
        padding: '1rem',
    },
    form: {
        width: '100%',
        maxWidth: 400,
        background: '#fff',
        padding: '2rem 1.5rem',
        borderRadius: 10,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1rem',
        fontWeight: 600,
        fontSize: '1.3rem',
        letterSpacing: 0.5,
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
    },
    label: {
        fontSize: '1rem',
        color: '#222',
        marginBottom: 2,
    },
    input: {
        padding: '0.8rem',
        fontSize: '1rem',
        borderRadius: 5,
        border: '1px solid #ddd',
        background: '#f9f9f9',
        outline: 'none',
    },
    textarea: {
        padding: '0.8rem',
        fontSize: '1rem',
        borderRadius: 5,
        border: '1px solid #ddd',
        background: '#f9f9f9',
        outline: 'none',
        resize: 'vertical',
        minHeight: 100,
        maxHeight: 300,
    },
    fileInput: {
        border: 'none',
        background: 'none',
        padding: 0,
    },
    button: {
        marginTop: 10,
        padding: '1rem',
        borderRadius: 7,
        background: '#009966',
        color: '#fff',
        fontWeight: 700,
        fontSize: '1.15rem',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        transition: 'background 0.2s',
    },
    error: {
        color: '#e74c3c',
        background: '#fbeaea',
        borderRadius: 6,
        padding: '0.6rem',
        marginBottom: '0.5rem',
        textAlign: 'center',
        fontSize: '0.97rem',
    },
};

export default CreatePetition;
