import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function Cabecalho({ isAdmin }) {

    const navigate = useNavigate();

    function logOff() {
        localStorage.removeItem('TOKEN');
        navigate('/home');
    }

    return (
        <header className='cabecalho'>
            <div className='cabecalho-container'>
                <h1 className='cabecalho-titulo'>Heather</h1>

                <nav className='cabecalho-nav'>
                    <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                        Home
                    </a>
                    <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                        Portfólio
                    </a>
                    <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                        Serviços
                    </a>

                    {isAdmin ? (
                        <>
                            <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                                Mensagens
                            </a>
                            <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                                Agenda
                            </a>
                        </>
                    ) : (
                        <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link'>
                            Sobre
                        </a>
                    )}
                </nav>

                {isAdmin ? (
                    <div className="cabecalho-admin">
                        <p className='cabecalho-title-adm'>
                            <span>Olá Heather</span>
                        </p>
                        <span className="logoff-link">
                            Retornar para &nbsp;
                            <a href="#" onClick={logOff} className="logoff-button">
                                visão do cliente
                            </a>
                        </span>
                    </div>
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
