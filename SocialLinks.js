import React from 'react';
// Assume 'react-icons/fa' is installed.
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const iconStyle = {
    fontSize: '1.7rem',
    color: '#196547',
    transition: 'color 0.2s',
};

const linkStyle = {
    margin: '0 0.65rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f4f8fa',
    borderRadius: '50%',
    width: 40,
    height: 40,
    textDecoration: 'none',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    transition: 'background 0.18s',
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.15rem',
    marginTop: '0.5rem',
};

const SocialLinks = () => {
    return (
        <div style={containerStyle}>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={linkStyle}
            >
                <FaFacebook style={iconStyle} />
            </a>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                style={linkStyle}
            >
                <FaTwitter style={iconStyle} />
            </a>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={linkStyle}
            >
                <FaInstagram style={iconStyle} />
            </a>
        </div>
    );
};

export default SocialLinks;
