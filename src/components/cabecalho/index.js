import './index.scss'
import { useNavigate } from 'react-router-dom'

{/* Props para mudar a navegação conforme o contexto (usuário ou admin) */ }
export default function Cabecalho({ isAdmin }) {

    const navigate = useNavigate();
    function logOff() {
        localStorage.removeItem('TOKEN');
        navigate('/home');
    }

    return (
        <header className='cabecalho'>
            <div className='cabecalho-container'>
                <h1 className='cabecalho-titulo'>
                    Heather
                </h1>

                <nav className='cabecalho-nav'>
                    <ul className='cabecalho-nav-item'>
                        <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                            Home
                        </a>
                    </ul>

                    <ul className='cabecalho-nav-item'>
                        <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                            Portfólio
                        </a>
                    </ul>

                    <ul className='cabecalho-nav-item'>
                        <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                            Serviços
                        </a>
                    </ul>

                    {/* Condição para a navegacao Mensagem ou Sobre */}
                    {isAdmin ? (
                        <ul className='cabecalho-nav-item'>
                            <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                                Mensagens
                            </a>
                        </ul>
                    ) : (
                        <ul className='cabecalho-nav-item'>
                            <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                                Sobre
                            </a>
                        </ul>
                    )}
                </nav>

                {/* Condição para o botão de Login */}
                {isAdmin ? (
                    <div>
                        <button onClick={() => navigate('/admin')} className='cabecalho-botao'>
                            <span>Olá Heather</span>
                        </button><br></br>
                        <span>
                            Retornar para
                            <a href="#" onClick={logOff} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                                visão do cliente
                            </a>
                        </span>                    </div>

                ) : (
                    <button onClick={() => navigate('/login')} className='cabecalho-botao'>
                        <b>Login</b>
                        <img src='/assets/images/Forward.png' alt='seta' />
                    </button>
                )}
            </div>

        </header>
    )
}