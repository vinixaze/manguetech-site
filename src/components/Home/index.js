import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
export default function Home() {
  const cards = [
    {
      title: 'Inovação',
      text: 'Tecnologias de ponta para educação do futuro',
      icon: '⚡',
    },
    {
      title: 'Data Driven',
      text: 'Decisões baseadas em dados e análises inteligentes',
      icon: '💻',
    },
    {
      title: 'Colaboração',
      text: 'Participação ativa de educadores e estudantes',
      icon: '🤝',
    },
  ];
  return (
    <div className="hero-section">
      <Container>
        <Row className="justify-content-center text-center py-5">
          <Col md={8}>
            <h1 className="display-4 fw-bold gradient-text1">MangueTech</h1>
            <p className="lead text-white opacity-75 fs-4">
              Transformando a educação através da tecnologia e inovação
            </p>
            <p className="text-white-50 fs-6">
              Uma startup dedicada a revolucionar o ensino com soluções tecnológicas avançadas, análise de dados e participação ativa dos educadores.
            </p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center pt-5">
          {cards.map((card, idx) => (
            <Col key={idx} md={6} lg={4}>
              <div className="service-card text-center p-4">
                <div className="service-icon mb-3">{card.icon}</div>
                <h5 className="text-white">{card.title}</h5>
                <p className="text-white-50">{card.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}