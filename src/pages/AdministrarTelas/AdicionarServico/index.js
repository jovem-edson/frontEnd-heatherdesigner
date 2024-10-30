import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import { useNavigate } from 'react-router-dom';


export default function AdicionarServico() {
    const navigate = useNavigate();

    return (
        <div className='pagina-adicionar-servico' isAdmin={true}>
            <Cabecalho isAdmin={true} />

            <div className='criar-servico'>

                <span className='linha'>
            <button onClick={() => navigate('/admin')} className='botao-criar'>
        Voltar
        </button>
        </span>

            <h1> Adicionar Serviço na Agenda </h1>

<form>
            <span className='linha'>
                <div className='campo-input'>
                    <label className='legenda-input' for='titulo-servico'>
                        Título do Serviço
                    </label>
                    <input type="text" id="servico" name="titulo-servico" placeholder="Insira o título do projeto..." />
                </div>

                <div className='campo-input'>
                    <label className='legenda-input' for='data-entrega'>
                        Data de Entrega
                    </label>
                    <input type="date" id="data-entrega" name="data-entrega" placeholder="Insira a Data de Entrega" />
                </div>

            </span>

            <span className='linha'>
                <div className='campo-input'>
                    <label className='legenda-input' for='nome-cliente'>
                        Nome do Cliente
                    </label>
                    <input type="text" id="nome" name="nome-cliente" placeholder="Insira o título do projeto..." />
                </div>

                <div className='campo-input'>
                    <label className='legenda-input' for="status">Status:</label>
                    <select id="status" name="status">
                        <option value="nao_iniciado">Não Iniciado</option>
                        <option value="em_andamento">Em Andamento</option>
                        <option value="concluido">Concluído</option>
                    </select></div>

                    <div className='campo-input'>
                    <label className='legenda-input' for="tag"> Tag da Tarefa:</label>
                    <select id="status" name="tag">
                        <option value="design_grafico">Design Gráfico</option>
                        <option value="design_digital">Design Digital</option>
                    </select></div>

            </span>

            <input type='submit' className='botao-salvar'/>
            </form>
        </div>
        </div>
    )
}