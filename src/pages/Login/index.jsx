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

            navigate('/admin'); //Ira para tela de Desaiguiner XD

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

            <div className="back-container">
                <img src="/assets/images/arrow_back_ios_24px.png" alt="voltar" className="arrow-icon" />
                <button className="voltar" onClick={() => navigate('/')}>Voltar</button>
            </div>


            <div className="form">
                <div className="form-header">
                    <h1>Login do Administrador</h1>
                    <span>Se você é um administrador, pode fazer login com seu endereço de e-mail e senha.</span>
                </div>
                <div className="input-group">
                    <label>Endereço de E-mail</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Senha</label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div className="button-group">
                    <button onClick={logar}>Login</button>
                </div>
            </div>

        </div>
    )
}