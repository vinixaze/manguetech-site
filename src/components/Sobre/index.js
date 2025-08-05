import React from 'react';
import './sobre.css';
export default function Sobre() {
  const cards = [
    {
      icon: '⚡',
      title: 'Inovação',
      description: 'Tecnologias de ponta para educação do futuro',
    },
    {
      icon: '📊',
      title: 'Data Driven',
      description: 'Decisões baseadas em dados e análises inteligentes',
    },
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Participação ativa de educadores e estudantes',
    },
    {
      icon: '🚀',
      title: 'Transformação',
      description: 'Impacto real na vida dos alunos e comunidades',
    },
  ];
  return (
    <section className="valores-section text-white text-center">
      <div className="container py-5">
        <h2 className="mb-3 gradient-text1">Nossos Valores</h2>
        <p className="mb-5 opacity-75">O que guia a MangueTech na transformação da educação</p>
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="valor-card p-4 h-100 rounded">
                <div className="icon mb-3">{card.icon}</div>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}