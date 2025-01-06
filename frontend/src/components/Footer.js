import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    &copy; 2025 Portfolio Tracker. All Rights Reserved.
                </p>
                <div className="social-links">
                    <a
                        href="https://github.com/sowmyachitturi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaGithub size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chitturi-sowmya-5a257224b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaLinkedin size={16} />
                    </a>
                    <a
                        href="mailto:sowmyachitturi340@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaEnvelope size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
