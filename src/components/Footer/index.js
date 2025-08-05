import React from 'react';
import './Footer.css';
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-col">
                        <h1 className="footer-logo">
                            <span className="gradient-text">MangueTech</span>
                        </h1>
                        <p>
                            Transformando a educação através da tecnologia, inovação e colaboração com educadores.
                        </p>
                        <div className="footer-socials">
                            <a href="#">
                                <i className="bi bi-twitter gradient-icon"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-linkedin gradient-icon"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-instagram gradient-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#sobre">Sobre Nós</a></li>
                            <li><a href="#data-driven">Data Driven</a></li>
                            <li><a href="#coparticipacao">Coparticipação</a></li>
                            <li><a href="#plataforma">Plataforma</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contato</h3>
                        <ul className="footer-contact">
                            <li><i className="bi bi-envelope gradient-icon"></i> manguetechedu@gmail.com</li>
                            <li><i className="bi bi-telephone gradient-icon"></i> +55 (81) 9999-9999</li>
                            <li><i className="bi bi-geo-alt gradient-icon"></i> Recife, PE - Brasil</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom footer">
                <div className="footer-bottom-container">
                    <span>© 2025 MangueTech</span>
                    <div className="footer-links">
                        <a href="#privacidade">Privacidade</a>
                        <a href="#termos">Termos de Uso</a>
                        <a href="#cookies">Cookies</a>
                    </div>
                </div>
            </div>
        </>
    );
}