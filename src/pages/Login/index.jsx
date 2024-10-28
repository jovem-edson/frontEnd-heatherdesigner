import './index.scss'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    async function logar() {
        try {
            let body = {
                "email": email,
                "senha": senha
            }

            let resp = await axios.post('http://localhost:3010/login', body);

            localStorage.setItem('TOKEN', resp.data.token);

            navigate('/homeAdmin'); //Ira para tela de Desaiguiner XD

        }
        catch (err) {
            alert(err.response.data.erro)
        }
    }
    return (
        <div className='pagina-login'>
            <div className='login-image'>
                <img src='/assets/images/Login/login.png' alt='Login' />
            </div>
            <div className='form'>
                <button onClick={() => navigate('/home')}>Voltar</button>

                <div>
                    <h1>Login do Administrador</h1>
                    <span>Se você é um administrador, pode fazer login com seu endereço de e-mail e senha.</span>
                </div>
                <div>
                    <label>Endereço de E-mail</label>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Senha</label>
                    <input type='text' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <div>
                    <button onClick={logar}> Login </button>
                </div>
            </div>
        </div>
    )
}