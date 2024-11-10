import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import { API_URL } from '../../../api/constantes';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { Toaster, toast } from 'react-hot-toast';

/*
id_portfolio INT PRIMARY KEY AUTO_INCREMENT,
    imagem VARCHAR(255),
    titulo VARCHAR(255),
    descricao TEXT,
    data_realizacao DATE
);
*/

export default function AdicionarPortfolio() {
    const [imagem, setImagem] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataRealizacao, setDataRealizacao] = useState('');
    const [imagemUrl, setImagemUrl] = useState('/assets/images/placeholder.svg')

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id != undefined) {
            buscarPorId();
        }
    }, [])


    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get(`${API_URL}/portfolio/${id}`, {
            headers: { 'x-access-token': token }
        });

        setImagem(resp.data.imagem);
        setTitulo(resp.data.titulo);
        setDescricao(resp.data.descricao);
        setDataRealizacao(resp.data.dataRealizacao.substr(0, 10));
    }


    // async function salvar() {

    //     let body = {
    //         'imagem': imagemUrl,
    //         'titulo': titulo,
    //         'descricao': descricao,
    //         'dataRealizacao': dataRealizacao
    //     }

    //     console.log(body)


    //     let token = localStorage.getItem('TOKEN');

    //     if (id == undefined) {
    //         let resp = await axios.post(`${API_URL}/portfolio`, body, { headers: { 'x-access-token': token } });
    //         // alert(`Registro de ID ${resp.data.novoId} adicionado`);
    //         navigate('/admin', { state: { refresh: true } });

    //     }
    //     else {
    //         let resp = await axios.put(`${API_URL}/portfolio/` + id, body, { headers: { 'x-access-token': token } });
    //         // alert(`Registro de ID ${id} alterado`);
    //         navigate('/admin', { state: { refresh: true } });

    //     }


    // } 
    async function salvar() {

        let body = {
            'imagem': imagemUrl,
            'titulo': titulo,
            'descricao': descricao,
            'dataRealizacao': dataRealizacao
        }

        console.log(body)


        let token = localStorage.getItem('TOKEN');

        if (id == undefined) {
            let resp = await axios.post(`${API_URL}/portfolio`, body, { headers: { 'x-access-token': token } });
           // toast.success(`Registro de ID ${resp.data.novoId} adicionado`);
            toast.success(`Projeto N° ${resp.data.novoId} Adicionado com sucesso!`, {
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
            
    
            navigate('/admin', { state: { refresh: true } });

        }
        else {
            let resp = await axios.put(`${API_URL}/portfolio/${id}`, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${id} alterado`);
            toast.success(`Projeto N° ${id} Alterado com sucesso!!`, {
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
            navigate('/admin', { state: { refresh: true } });

        }


    }

    const inserirImagem = () => {
        document.getElementById('file-input').click();
    };

    const alterarImagem = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagem(file);
            setImagemUrl(URL.createObjectURL(file));
        }
    };



    return (
        <div className='pagina-adicionar-portfolio' isAdmin={true}>
            <Cabecalho isAdmin={true} />

            <div className='criar-portfolio'>

                <span className='linha-voltar'>
                    <div className='spacer'>
                        <button onClick={() => navigate('/admin')} className='botao-criar'>
                            <img src='/assets/images/seta-voltar.png' className='botao-voltar' alt='voltar' />
                            <h2> Voltar </h2>
                        </button>
                    </div>
                    <div className='titulo-secao-portfolio'>
                    <h1>{id == undefined ? 'Adicionar Projeto' : 'Editar Projeto'}</h1>
                    </div>
                    <div className='spacer'>
                    </div>
                </span>



                <form className='formulario'>
                    <div class='container-formulario'>

                        <div>
                            <label for='titulo-portfolio'>Título do Projeto</label>
                                <input type="text" value={titulo} onChange={(e) => {
                                    setTitulo(e.target.value)
                                }} placeholder='Insira o título do projeto...' />
                        </div>

                        <div>
                            <label for='data-realizacao'>Data de Realização</label>

                                <input type="date" value={dataRealizacao} onChange={(e) => setDataRealizacao(e.target.value)} />
                        </div>

                        <div>
                            <label for='descricao'>Descrição do Projeto</label>
                                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Insira a descrição do projeto...' />
                        </div>

                        <Link to="/admin">

                            <button className='botao-salvar' onClick={salvar}> {id == undefined ? 'Salvar' : 'Alterar'} </button>

                        </Link>

                    </div>

                    

                    <div className='container-imagem'>
                    <label htmlFor='imagem'>Imagem do Projeto</label>
                    <div  className={imagemUrl == '/assets/images/placeholder.svg' ? 'placeholder': 'placeholder overflow'} onClick={inserirImagem} style={{ cursor: 'pointer' }}>
                        <img  src={imagemUrl} alt='enviar-imagem' />
                    </div>
                    <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        style={{ display: 'none' }} // Esconde o input de arquivo
                        onChange={alterarImagem} // Chama a função ao mudar
                    />
                </div>
                </form>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}