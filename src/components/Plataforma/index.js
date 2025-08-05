import { FaBookOpen, FaBrain, FaChartBar, FaComments, FaGlobe, FaCogs, FaUserShield } from 'react-icons/fa';
import './Plataforma.css';

const Plataforma = () => {
    return (
        <section className="plataforma-section">
            <h2 className="plataforma-title">Nossa Plataforma</h2>
            <p className="plataforma-description">
                Explore os principais recursos da MangueTech para transformar a educação básica com tecnologia de ponta.
            </p>

            <div className="plataforma-grid">
                <div className="plataforma-card">
                    <FaBookOpen className="plataforma-icon" />
                    <h3>Projetos Pedagógicos</h3>
                    <p>
                        Crie e gerencie projetos com textos, links e mídias para formar uma base de conhecimento para a IA.
                    </p>
                </div>
                <div className="plataforma-card">
                    <FaBrain className="plataforma-icon" />
                    <h3>Trilhas com IA e RAG</h3>
                    <p>
                        Personalize trilhas de aprendizagem com IA, recomendando conteúdos alinhados ao estilo do aluno.
                    </p>
                </div>
                <div className="plataforma-card">
                    <FaChartBar className="plataforma-icon" />
                    <h3>Insights Pedagógicos</h3>
                    <p>
                        Analise dados de desempenho e transforme-os em dashboards intuitivos e sugestões acionáveis.
                    </p>
                </div>
                <div className="plataforma-card">
                    <FaComments className="plataforma-icon" />
                    <h3>Suporte com IA</h3>
                    <p>
                        Um chat interativo com IA que oferece ajuda pedagógica personalizada para educadores e estudantes.
                    </p>
                </div>
            </div>

            <div className="plataforma-extra-cards">
                <div className="extra-card">
                    <FaGlobe className="plataforma-icon" />
                    <h3>Integração com Plataformas</h3>
                    <p>
                        Conecte-se com sistemas educacionais existentes e amplie a interoperabilidade da sua escola.
                    </p>
                </div>
                <div className="extra-card">
                    <FaCogs className="plataforma-icon" />
                    <h3>Automação Inteligente</h3>
                    <p>
                        Automatize tarefas repetitivas, ganhando tempo e aumentando a produtividade pedagógica.
                    </p>
                </div>
                <div className="extra-card">
                    <FaUserShield className="plataforma-icon" />
                    <h3>Segurança de Dados</h3>
                    <p>
                        Seus dados protegidos com criptografia de ponta e conformidade com LGPD e outras normas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Plataforma;
