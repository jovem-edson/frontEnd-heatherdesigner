import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import { API_URL } from '../../../api/constantes';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { Toaster, toast } from 'react-hot-toast';

export default function AdicionarPortfolio() {
    const [imagem, setImagem] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataRealizacao, setDataRealizacao] = useState('');
    const [imagemUrl, setImagemUrl] = useState('/assets/images/placeholder.svg');

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId();
        }
    }, []);


    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');
        try {
            let resp = await axios.get(`${API_URL}/portfolio/${id}`, {
                headers: { 'x-access-token': token }
            });

            setTitulo(resp.data.titulo);
            setDescricao(resp.data.descricao);
            setDataRealizacao(resp.data.dataRealizacao.substr(0, 10));

            if (resp.data.imagem) {
                const imagemUrl = `${API_URL}/${resp.data.imagem}`;
                setImagemUrl(imagemUrl);
                console.log('Imagem URL:', imagemUrl); // Verifique o URL gerado
            } else {
                setImagemUrl('/assets/images/placeholder.svg');
            }

            setImagem(resp.data.imagem);

        } catch (error) {
            toast.error('Erro ao buscar projeto: ' + error.message);
        }
    }



    async function uploadImagem(file, projectId) {
        try {
            const formData = new FormData();
            formData.append('imagem', file);

            let token = localStorage.getItem('TOKEN');

            const response = await axios.put(
                `${API_URL}/portfolio/${projectId}/imagem`,
                formData,
                {
                    headers: {
                        'x-access-token': token,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            setImagemUrl(`${API_URL}/storage/capaPorfolio/${response.data.imagem}`); // Atualiza o `imagemUrl` com a nova URL
            toast.success('Imagem atualizada com sucesso!', {
                style: {
                    border: '1px solid #28a745',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: '#28a745',
                    secondary: '#D4EDDA',
                },
            });
        } catch (error) {
            toast.error('Erro ao fazer upload da imagem: ' + error.message);
        }
    }


    async function salvar() {
        try {

            

            if (titulo == "" || descricao == "" || dataRealizacao == "" || imagem == "") {
                if (titulo == "") {
                    toast.error('O campo de título deve ser preenchido.');
                }

                if (dataRealizacao == "") {
                    toast.error('O campo de data de entrega deve ser preenchido.')
                }

                if (descricao == "") {
                    toast.error('O campo de descrição deve ser preenchido.')
                }

                if (imagem == "") {
                  toast.error('Uma foto deve ser adicionada ao projeto.')
                }

                return
            }

            let token = localStorage.getItem('TOKEN');
            let body = {
                'imagem': '',
                'titulo': titulo,
                'descricao': descricao,
                'dataRealizacao': dataRealizacao
            };

            if (id === undefined) {
                let resp = await axios.post(`${API_URL}/portfolio`, body, {
                    headers: { 'x-access-token': token }
                });

                if (imagem instanceof File) {
                    await uploadImagem(imagem, resp.data.novoId);
                }

                toast.success(`Projeto N° ${resp.data.novoId} Adicionado com sucesso!`);
            } else {
                await axios.put(`${API_URL}/portfolio/${id}`, body, {
                    headers: { 'x-access-token': token }
                });

                if (imagem instanceof File) {
                    await uploadImagem(imagem, id);
                }

                toast.success(`Projeto N° ${id} Alterado com sucesso!`);
            }

            navigate('/admin', { state: { refresh: true } });
        } catch (error) {
            toast.error('Erro ao salvar projeto: ' + error.message);
        }
    }

    const inserirImagem = () => {
        document.getElementById('file-input').click();
    };

    const alterarImagem = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagem(file);
            setImagemUrl(URL.createObjectURL(file)); // Exibe pré-visualização
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
                        <h1>{id === undefined ? 'Adicionar Projeto' : 'Editar Projeto'}</h1>
                    </div>
                    <div className='spacer'></div>
                </span>
                <form className='formulario'>
                    <div className='container-formulario'>
                        <div>
                            <label htmlFor='titulo-portfolio'>Título do Projeto*</label>
                            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder='Insira o título do projeto...' />
                        </div>
                        <div>
                            <label htmlFor='data-realizacao'>Data de Realização*</label>
                            <input type="date" value={dataRealizacao} onChange={(e) => setDataRealizacao(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='descricao'>Descrição do Projeto*</label>
                            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Insira a descrição do projeto...' />
                        </div>
                        <button type='button' className='botao-salvar' onClick={salvar}>
                            {id === undefined ? 'Salvar' : 'Alterar'}
                        </button>
                    </div>
                    <div className='container-imagem'>
                        <label htmlFor='imagem'>Imagem do Projeto*</label>
                        <div
                            className={imagemUrl === '/assets/images/placeholder.svg' ? 'placeholder' : 'placeholder overflow'}
                        // onClick={inserirImagem}
                        //style={{ cursor: 'pointer' }}
                        >
                            <img src={imagemUrl} alt='enviar-imagem' />
                        </div>
                        <input
                            type="file"
                            id="file-input"
                            accept="image/*"
                            // style={{ display: 'none' }}
                            onChange={alterarImagem}
                        />
                    </div>
                </form>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
