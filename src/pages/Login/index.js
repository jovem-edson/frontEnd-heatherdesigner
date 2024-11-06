import './teste.scss'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { API_URL } from '../../api/constantes';

export default function Logar(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();
  
    const handleSubmit = event => {
      event.preventDefault();
  
      console.log('form submitted ✅');
    };


    async function logar() {
        try {
            let body = {
                "email": email,
                "senha": senha
            }

            let resp = await axios.post(`${API_URL}/login`, body);

            localStorage.setItem('TOKEN', resp.data.token);

            navigate('/admin'); //Ira para tela de Desaiguiner XD

        }
        catch (err) {
            alert(err.response.data.erro)
        }
    }

    return(
        <div className='secaoLogin'>
            <div className='secaoLogin-container'>
                <div className='container-foto'>
                </div>

                <div className='container-formulario'>
                    <div className='formulario-voltar'>
                        <button className='voltar' onClick={() => navigate('/')}>
                        <img src="/assets/images/seta-voltar.png" alt="voltar"/>
                                        Voltar
                        </button>
                    </div>

                    <div className='formulario-caixa'>
                        <div className='formulario'>
                            <form onSubmit={handleSubmit}>
                                <div className='titulo-formulario'>
                                    <h2>Login do Administrador</h2>
                                    <p>Se você é um administrador, pode fazer login com seu endereço de e-mail e senha.</p>
                                    <hr/>
                                </div>

                                

                                <div>
                                    <label>Endereço de Email
                                    <input type="text" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    } }/>
                                    </label>
                                </div>

                                <div>
                                    <label>Senha
                                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                    </label>

                                    <div className='alterarSenha'>
                                    <p>Esqueceu a senha? <a>Recuperar a senha</a></p>
                                </div>
                                </div>

                                

                                <div>
                                    <button onClick={logar} type='submit'>Login</button>
                                    
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}