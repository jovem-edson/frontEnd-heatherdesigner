import './index.scss';
import Cabecalho from '../../../components/cabecalho';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';


export default function verMensagem() {
    return (
        <section className='pagina-ver-mensagem' isAdmin={true}>
            <Cabecalho isAdmin={true} />

            <div className='ver-mensagem'>

                <span className='linha-voltar'>
                    <div className='spacer'>
                        <button onClick={() => navigate('/admin')} className='botao-criar'>
                            <img src='/assets/images/seta-voltar.png' className='botao-voltar' alt='voltar' />
                            <h2> Voltar </h2>
                        </button>
                    </div>
                    <div className='titulo-secao-mensagem'>
                        <h1>{nome}</h1>
                        <p>{email}</p>
                    </div>
                    <div className='spacer'>
                    </div>
                </span>

                <div className='container-mensagem'>
                    <div className='cabecalho-mensagem'>
                        <div className='spacer'>
                        </div>

                        <div className='assunto-mensagem'>
                            <p>Assunto: {assunto}</p>
                        </div>

                        <div className='status-mensagem'>
                            <p className='status-servico'>{status}</p>
                        </div>
                    </div>

                    <div className='conteudo-mensagem'>
                        <h3>Mensagem:</h3>
                        <div className='corpo-mensagem'>
                            <p>{corpo_mensagem}</p>
                        </div>
                    </div>

                    <div className='rodape-mensagem'>
                        <p>{data_mensagem}</p>
                    </div>

                </div>




            </div>
        </section>
    )
}