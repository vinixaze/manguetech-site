import React from 'react';
import './DataDriven.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChartBar, FaBrain, FaChartLine } from 'react-icons/fa';

const DataDriven = () => {
  return (
    <div className="data-driven-section">
      <Container className="py-5">
        <div className="text-section text-center mb-5">
          <h2 className="gradient-text1">Data-Driven com Visão do Professor</h2>
          <p className="lead text-light">
            Na Manguetech, a personalização do ensino é impulsionada por dados e Inteligência Artificial (IA), com a perspectiva única do professor no centro.
          </p>
          <h3 className="text-highlight1 mt-5">Inteligência Pedagógica Personalizada</h3>
          <p className="text-light">
            O professor insere informações detalhadas sobre seus "projetos" pedagógicos (temas, links, documentos, imagens). Esses dados ricos e contextualizados formam a base de conhecimento para um modelo de IA baseado em RAG (Retrieval Augmented Generation), tornando a IA um "especialista" no contexto do professor.
          </p>
          <p className="text-light">
            A plataforma também permite a inserção dos resultados das atividades dos estudantes, inclusive via reconhecimento óptico de caracteres (OCR). Essa alimentação contínua otimiza o modelo RAG e fornece dados para análises aprofundadas, transformando informações brutas em inteligência pedagógica acionável.
          </p>
          <p className="text-light">
            Assim, a Manguetech integra o input pedagógico do professor diretamente no cerne da inteligência da plataforma, garantindo uma personalização guiada pelo conhecimento e contexto de sala de aula.
          </p>
        </div>
        <Row className="gx-4 gy-4 mb-5">
          <Col md={12}>
            <div className="horizontal-card">
              <div className="icon-wrapper card-purple">
                <FaChartBar color="#fff" size={20} />
              </div>
              <div className="card-text">
                <h6 className="mb-1">Projetos Pedagógicos Ricos</h6>
                <p>Base de conhecimento contextualizada com temas, recursos e documentos do professor</p>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className="horizontal-card">
              <div className="icon-wrapper card-green">
                <FaBrain color="#fff" size={20} />
              </div>
              <div className="card-text">
                <h6 className="mb-1">IA RAG Especializada</h6>
                <p>Inteligência Artificial que se torna especialista no contexto específico do professor</p>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className="horizontal-card">
              <div className="icon-wrapper card-yellow">
                <FaChartLine color="#fff" size={20} />
              </div>
              <div className="card-text">
                <h6 className="mb-1">Análise Contínua via OCR</h6>
                <p>Processamento automático de atividades e otimização baseada em resultados reais</p>
              </div>
            </div>
          </Col>
        </Row>


        <Row className="gx-4 gy-4">
          <Col md={4}>
            <div className="bottom-card">
              <FaChartBar className="icon large" />
              <h5>Contextualização Rica</h5>
              <p>IA especializada no contexto pedagógico único de cada professor.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bottom-card">
              <FaBrain className="icon large" />
              <h5>Personalização Inteligente</h5>
              <p>Experiências de aprendizagem guiadas pela visão e experiência do educador.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bottom-card">
              <FaChartLine className="icon large" />
              <h5>Otimização Contínua</h5>
              <p>Melhoria automática baseada em dados e feedback pedagógico.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DataDriven;
