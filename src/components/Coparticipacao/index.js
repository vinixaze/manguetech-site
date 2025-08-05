import React from 'react';
import './coparticipacao.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChartBar, FaBrain, FaChartLine } from 'react-icons/fa';
const Coparticipacao = () => {
    return (
        <div className="coparticipacao-section">
            <Container className="py-5">
                <div className="text-section text-center mb-5">
                    <h2 className="gradient-text1">Coparticipação Docente</h2>
                    <p className="lead text-light">
                        O professor como protagonista central e co-criador de todo o processo educacional.
                    </p>
                    <h3 className="text-highlight1 mt-5">Professor como Protagonista</h3>
                    <p className="text-light">
                        Na Manguetech, o professor não é apenas um usuário, mas o agente central e co-criador de todo o processo. Um diferencial crucial da nossa plataforma é a inserção do educador como protagonista na obtenção e interpretação dos dados.
                    </p>
                    <p className="text-light">
                        As trilhas de recursos educacionais digitais, por exemplo, são elaboradas e avaliadas em conjunto com o professor, garantindo que as ferramentas e o conteúdo sejam relevantes e alinhados às suas práticas e necessidades específicas.
                    </p>
                    <p className="text-light">
                        Essa abordagem assegura que o contexto pedagógico real seja a base para a personalização do ensino, reforçando o sentimento de pertencimento e valorização do educador. Com a Manguetech, o conhecimento e a experiência do docente são o alicerce da inovação, transformando-o em um verdadeiro protagonista da educação data-driven.
                    </p>
                </div>
                <Row className="d-flex flex-column gap-3 mt-3">
                    <div className="card-custom d-flex align-items-start horizontal-card">
                        <div className="number-circle bg-gradient-1">1</div>
                        <div className="card-text-content ">
                            <h6 className="mb-1">Co-criação Ativa</h6>
                            <p className="mb-0">Professor como protagonista na criação e avaliação de trilhas educacionais</p>
                        </div>
                    </div>
                    <div className="card-custom d-flex align-items-start horizontal-card">
                        <div className="number-circle bg-gradient-2">2</div>
                        <div className="card-text-content">
                            <h6 className="mb-1">Contextualização Pedagógica</h6>
                            <p className="mb-0">Inserção do contexto real da sala de aula na interpretação de dados</p>
                        </div>
                    </div>
                    <div className="card-custom d-flex align-items-start horizontal-card">
                        <div className="number-circle bg-gradient-3">3</div>
                        <div className="card-text-content">
                            <h6 className="mb-1">Valorização da Experiência</h6>
                            <p className="mb-0">Conhecimento docente como alicerce da inovação educacional</p>
                        </div>
                    </div>
                    <div className="card-custom d-flex align-items-start horizontal-card">
                        <div className="number-circle bg-gradient-4">4</div>
                        <div className="card-text-content">
                            <h6 className="mb-1">Pertencimento Ativo</h6>
                            <p className="mb-0">Reforço do sentimento de valorização e protagonismo educacional</p>
                        </div>
                    </div>
                </Row>
                <Row className="gx-4 gy-4 mt-5 pt-4 section-spacing">
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
export default Coparticipacao;