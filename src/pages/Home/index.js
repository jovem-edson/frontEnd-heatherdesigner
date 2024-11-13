import './index.scss'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';


import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import Carrossel from '../../components/Carrossel'
import { API_URL } from '../../api/constantes';
import { Toaster, toast } from 'react-hot-toast';



export default function Home() {
    const location = useLocation();

    const [nomeMensagem, setNomeMensagem] = useState('');
    const [emailMensagem, setEmailMensagem] = useState('');
    const [assuntoMensagem, setAssuntoMensagem] = useState('');
    const [corpoMensagem, setCorpoMensagem] = useState('');


     //LÓGICA PARA O PORTFÓLIO
     const [listaPortfolio, setListaPortfolio] = useState([{
        "id_portfolio": 1,
        "imagem": "/assets/images/projetos-notaveis-2.png",
        "titulo": "Getulio Vargas",
        "descricao": "TEXT",
        "data_realizacao": "2024-03-04"
    },
    {
        "id_portfolio": 2,
        "imagem": "/assets/images/projetos-notaveis-2.png",
        "titulo": "Getulio Vargas",
        "descricao": "TEXT",
        "data_realizacao": "2024-03-04"
    },
    {
        "id_portfolio": 3,
        "imagem": "/assets/images/projetos-notaveis-2.png",
        "titulo": "Getulio Vargas",
        "descricao": "TEXT",
        "data_realizacao": "2024-03-04"
    },
    {
        "id_portfolio": 3,
        "imagem": "/assets/images/projetos-notaveis-2.png",
        "titulo": "Getulio Vargas",
        "descricao": "TEXT",
        "data_realizacao": "2024-03-04"
    },
    {
        "id_portfolio": 3,
        "imagem": "/assets/images/projetos-notaveis-2.png",
        "titulo": "Getulio Vargas",
        "descricao": "TEXT",
        "data_realizacao": "2024-03-04"
    }
]);

    const [atualizarListaPortfolio, setAtualizarListaPortfolio] = useState(false); // Estado para controlar atualização

    useEffect(() => {
        buscarPortfolio();
    }, []); // Dependendo de atualizarLista

    useEffect(() => {
        // Verifica se o estado de atualização foi passado
        if (location.state && location.state.refresh) {
            setAtualizarListaPortfolio(true); // Atualiza a lista
        }
    }, [location.state]);

    async function buscarPortfolio() {
        let resp = await axios.get(`${API_URL}/portfolio`);
        const portfoliosComImagem = resp.data.map(projeto => ({
            ...projeto,
            imagem: projeto.imagem ? `${API_URL}/${projeto.imagem}` : '/assets/images/placeholder.svg'
        }));
        setListaPortfolio(portfoliosComImagem);
        setAtualizarListaPortfolio(false); // Reseta a flag de atualização
    }
 
    async function enviarMensagem() {
        try {

            

            if (nomeMensagem == "" || emailMensagem == "" || corpoMensagem == "") {
                if (nomeMensagem == "") {
                    toast.error('O campo de nome deve ser preenchido na mensagem.');
                }

                if (emailMensagem == "") {
                    toast.error('O campo de e-mail deve ser preenchido na mensagem.')
                }

              

                if (corpoMensagem == "") {
                  toast.error('Sua mensagem está vazia.')
                }

                return
            }

            let token = localStorage.getItem('TOKEN');
            let body = {
                'nome': nomeMensagem,
                'email': emailMensagem,
                'assunto': assuntoMensagem,
                'corpoMensagem': corpoMensagem
            };

                let resp = await axios.post(`${API_URL}/mensagem`, body, {
                    headers: { 'x-access-token': token }
                });

            

                toast.success(`Mensagem Enviada! Entraremos em contato via e-mail.`, {
                    style: {
                        border: '1px solid #28a745', // Cor verde para borda
                        padding: '16px',
                        color: 'black', // Cor verde para o texto
                    },
                    iconTheme: {
                        primary: '#28a745', // Cor verde para o ícone
                        secondary: '#D4EDDA', // Cor de fundo suave em verde claro
                    },
                });

        } catch (error) {
            toast.error('Erro ao salvar projeto: ' + error.message);
        }
    }




      
    return (
        <div id='sobre' className='pagina-home'>
            <Cabecalho isAdmin={false} />


            <section className='primeira-secao'>
                <div className='primeira-secao-container'>
                    <h2 className='subtitulo'>
                        SOBRE MIM
                    </h2>

                    <p className='sobre-mim'>
                        Olá! Eu sou Heather, uma designer apaixonada por criar experiências visuais que conectam pessoas e ideias. Ao longo dos últimos 6 anos, tenho trabalhado com uma variedade de projetos, desde identidade visual e design editorial até interfaces digitais. Meu objetivo é sempre encontrar o equilíbrio entre funcionalidade e estética, criando soluções criativas que comunicam histórias de forma clara e impactante.
                    </p>

                    <div className='primeira-secao-botoes'>
                        <button className='botao'>
                            Fale Comigo
                            <img src='/assets/images/Forward2.png' alt='seta' />
                        </button>

                        <button className='botao secundario'>
                            Meus Serviços
                        </button>
                    </div>
                </div>

                <div>
                    <img src='/assets/images/sobre-mim-fotos.png' className='sobre-mim-fotos' alt='Heather' />
                </div>
            </section>

            <section className='segunda-secao'>
                <div className='segunda-secao-container'>
                    <div>
                        <h1 className='titulo'>
                            Minha Formação
                        </h1>
                        <p className='informacao'>
                            Um pouco sobre minha jornada acadêmica
                        </p>
                    </div>

                    <div className='formacoes'>
                        <div className='formacoes-item'>
                            <img src='/assets/images/senaco.svg' alt='senac' />

                            <p className='formacoes-item-texto'>
                                Bacharelado em Design
                                <br />
                                <b>Senac São Paulo</b>
                            </p>

                            <img src='/assets/images/circulo.svg' alt='circulo' />

                            <p className='formacoes-item-texto'>
                                <b>2016</b>
                            </p>

                        </div>

                        <div className='formacoes-item'>
                            <img src='/assets/images/unesparo.svg' alt='unespar' />

                            <p className='formacoes-item-texto'>
                                Pós Graduação em Artes Visuais
                                <br />
                                <b>Universidade Estadual do Paraná</b>
                            </p>

                            <img src='/assets/images/circulo.svg' alt='circulo' />

                            <p className='formacoes-item-texto'>
                                <b>2020</b>
                            </p>

                        </div>

                        <div className='formacoes-item'>
                            <img src='/assets/images/unespo.svg' alt='unesp' />

                            <p className='formacoes-item-texto'>
                                Doutorado em Artes
                                <br />
                                <b>Universidade Estadual Paulista</b>
                            </p>

                            <img src='/assets/images/circulo.svg' alt='circulo' />

                            <p className='formacoes-item-texto'>
                                <b>2024</b>
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            <section id='portfolio' className='terceira-secao-experiencias'>
                <div className='titulo-sub'>
                    <h1> Minhas experiências </h1>
                    <p className='informacao'>
                        Ao longo da minha carreira como designer, tive a oportunidade de trabalhar em locais diversos e inspiradores. Cada experiência contribuiu significativamente para o meu crescimento profissional e pessoal, permitindo-me explorar diferentes culturas e abordagens ao design.
                    </p>
                </div>


                <div className='carrossel'>
                    <div className='carrossel-cartao'>
                        <img className='carrossel-cartao-imagem' src='/assets/images/carrossel-experiencias-1.png' alt='experiencia' />
                        <p className='carrossel-cartao-descricao'> No Equador, colaborei em um projeto de revitalização urbana, onde explorei a fusão de tradições locais com design contemporâneo, criando espaços que refletiam a identidade cultural da comunidade. </p>
                    </div>

                    <div className='carrossel-cartao'>
                        <img className='carrosel-cartao-imagem' src='/assets/images/carrossel-experiencias-2.png' alt='experiencia' />
                        <p className='carrossel-cartao-descricao'> Em China, trabalhei em um ambiente rústico, em aldeias fora da cidade, onde pude desenvolver projetos que respeitavam e integravam a cultura local. A imersão em comunidades tradicionais me ensinou a valorizar o design sustentável e a harmonização com a natureza. </p>
                    </div>

                    <div className='carrossel-cartao'>
                        <img className='carrosel-cartao-imagem' src='/assets/images/carrossel-experiencias-3.png' alt='experiencia' />
                        <p className='carrossel-cartao-descricao'> Na Itália, mergulhei na rica herança do design, contribuindo para uma marca de moda renomada. A experiência de trabalhar ao lado de mestres artesãos me inspirou a valorizar a estética e a funcionalidade, elevando cada projeto a uma forma de arte. </p>
                    </div>



                </div>
            </section>


            <section id='servicos' className='quarta-secao-projetos-notaveis'>
                <h1> Projetos Notáveis </h1>
                <Carrossel slides={listaPortfolio}/>
                {/* <div className='grid-projetos'>
                    <div className='grid-projetos-cartao'>
                        <img src='/assets/images/projetos-notaveis-1.png' alt='projeto' />
                    </div>

                    <div className='grid-projetos-cartao'>
                        <img src='/assets/images/projetos-notaveis-2.png' alt='projeto' />
                    </div>

                    <div className='grid-projetos-cartao'>
                        <img src='/assets/images/projetos-notaveis-3.png' alt='projeto' />
                    </div>

                    <div className='grid-projetos-cartao'>
                        <img src='/assets/images/projetos-notaveis-4.png' alt='projeto' />
                    </div>
                </div>
                <p> Ver mais...</p> */}
            </section>


            <section className='quinta-secao-depoimentos'>
                <div className='titulo-subtitulo'>
                    <h1> Depoimentos </h1>
                    <p className='subtitulo'>Feedback de clientes com quem trabalhei</p>
                </div>
                <div className='baloes-depoimentos'>
                    <div class="talk-bubble tri-right round btm-left-in">
                        <div class="talktext">
                            <img className='baloes-depoimentos-balao-foto' src='assets/images/depoimentos-1.png' alt='depoimento' />
                            <hr width="1" size="168" />
                            <div className='baloes-depoimentos-balao-texto'>
                                <h2 className='baloes-depoimentos-balao-texto-nome'> Jorge Vercillo </h2>
                                <p className='baloes-depoimentos-balao-texto-depoimento'>
                                    “Trabalhar com a Heather foi uma experiência incrível! Sua criatividade e
                                    atenção aos detalhes transformaram nossas ideias em realidade de forma
                                    impressionante. Além disso, sua comunicação clara e profissional tornou
                                    todo o processo muito fluido e agradável.”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="talk-bubble tri-right round btm-left-in">
                        <div class="talktext">
                            <img className='baloes-depoimentos-balao-foto' src='assets/images/depoimentos-2.png' alt='depoimento' />
                            <hr width="1" size="109" />
                            <div className='baloes-depoimentos-balao-texto'>
                                <h2 className='baloes-depoimentos-balao-texto-nome'> Wando Lima </h2>
                                <p className='baloes-depoimentos-balao-texto-depoimento'>
                                    “A colaboração com a Heather foi maravilhosa! Sua visão criativa e dedicação tornaram o projeto muito mais especial.”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="talk-bubble tri-right round btm-left-in">
                        <div class="talktext">
                            <img className='baloes-depoimentos-balao-foto' src='assets/images/depoimentos-3.png' alt='depoimento' />
                            <hr width="1" size="109" />
                            <div className='baloes-depoimentos-balao-texto'>
                                <h2 className='baloes-depoimentos-balao-texto-nome'> Djavan Souza </h2>
                                <p className='baloes-depoimentos-balao-texto-depoimento'>
                                    “Trabalhar com a Heather foi um prazer! Ela trouxe uma energia contagiante e soluções inovadoras que superaram nossas expectativas.”
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section className='sexta-secao-ferramentas'>
                <div className='titulo-subtitulo'>
                    <h1> Ferramentas </h1>
                    <p className='subtitulo'> Ferramentas que possuo domínio </p>
                </div>
                <div className='grid-ferramentas'>
                    <div className='grid-ferramentas-ferramenta'>
                        <img src='assets/images/ferramentas-illustrator.png' alt='Adobe Illustrator' />
                        <h2> Adobe Illustrator </h2>
                        <p> Design Gráfico </p>
                    </div>

                    <div className='grid-ferramentas-ferramenta'>
                        <img src='assets/images/ferramentas-aero.png' alt='Adobe Aero' />
                        <h2> Adobe Aero </h2>
                        <p> Simulações em Realidade Aumentada </p>
                    </div>

                    <div className='grid-ferramentas-ferramenta'>
                        <img src='assets/images/ferramentas-photoshop.png' alt='Adobe Photoshop' />
                        <h2> Adobe Photoshop </h2>
                        <p> Edição de Imagens </p>
                    </div>

                    <div className='grid-ferramentas-ferramenta'>
                        <img src='assets/images/ferramentas-blender.png' alt='Blender' />
                        <h2> Blender </h2>
                        <p> Modelagem 3D </p>
                    </div>

                    <div className='grid-ferramentas-ferramenta'>
                        <img src='assets/images/ferramentas-canva.png' alt='Canva' />
                        <h2> Canva </h2>
                        <p> Design Gráfico </p>
                    </div>

                    <div className='grid-ferramentas-ferramenta'>
                        <img src='assets/images/ferramentas-figma.png' alt='Figma' />
                        <h2> Figma </h2>
                        <p> Design de Protótipos </p>
                    </div>
                </div>
            </section>

            <section id='contato' className='setima-secao-contato'>
                <div className='secao-contato-1'>
                    <h1>
                        Em que posso ajudar?
                    </h1>
                    <p>Sinta-se a vontade para tirar dúvidas, discutir projetos e dar um feedback geral.</p>
                </div>
                <div className='secao-contato-2'>
                    <h1>Contato</h1>
                    <form 
                    className='formulario'
                    onSubmit={e => {
                        e.preventDefault(); // Impede o envio padrão para que você possa controlar a lógica de salvar
                        enviarMensagem(); // Chama a função de salvar
                    }}
                    >
                        <label for='nome-mensagem'>Nome*
                            <input type="text" value={nomeMensagem} onChange={e => setNomeMensagem(e.target.value)} id="nomeMensagem" name="nome-mensagem" placeholder="Informe seu nome..." />

                        </label>

                        <label for='email-mensagem'>E-mail*
                            <input type="email" value={emailMensagem} onChange={e => setEmailMensagem(e.target.value)} id="emailMensagem" name="email-mensagem" placeholder="email@email.com" />

                        </label>
                        <label for="assunto-mensagem">Assunto*
                            <select id="assuntoMensagem" value={assuntoMensagem} onChange={e => setAssuntoMensagem(e.target.value)} name="assunto-mensagem">
                                <option>Photoshop</option>
                                <option>Design Gráfico</option>
                                <option>UX/UI Design</option>
                                <option>Design de Aplicativos</option>
                                <option>Design de Produto</option>
                                <option> Outros </option>
                            </select>
                        </label>
                        <label for='corpo-mensagem'>Mensagem*
                            <textarea value={corpoMensagem} onChange={e => setCorpoMensagem(e.target.value)} id="corpoMensagem" name="corpo-mensagem" placeholder="Explique-em mais detalhes o que deseja">
                                </textarea>

                        </label>

                        <input type='submit' className='botao-enviar-mensagem'/> 
                  </form>
                </div>


            </section>

            <footer className='rodape'>
                <Rodape />
            </footer>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
        </div>
    )
}