import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho({ isAdmin }) {
    const navigate = useNavigate();

    function logOff() {
        localStorage.removeItem('TOKEN');
        navigate('/');
    }

    return (
        <header className='cabecalho'>
            <div className='cabecalho-container'>
                {isAdmin ? (
                <h1 className='cabecalho-titulo' style={{
                    width: 231 + 'px'}}>Heather</h1>
                ) : (
                    <h1 className='cabecalho-titulo'>Heather</h1>

                )}
                <nav className='cabecalho-nav'>
                    {isAdmin ? (
                        <>
                            <a onClick={() => navigate('/admin')} className='cabecalho-nav-item-link'>Home</a>
                            <a onClick={() => navigate('/admin')} className='cabecalho-nav-item-link'>Portfólio</a>
                            <a onClick={() => navigate('/admin')} className='cabecalho-nav-item-link'>Agenda</a>
                            <a onClick={() => navigate('/admin')} className='cabecalho-nav-item-link'>Mensagens</a>
                        </>
                    ) : (
                        <>
                            <a href='#sobre' className='cabecalho-nav-item-link'>Sobre</a>
                            <a href='#portfolio' className='cabecalho-nav-item-link'>Portfólio</a>
                            <a href='#servicos' className='cabecalho-nav-item-link'>Serviços</a>
                            <a href='#contato' className='cabecalho-nav-item-link'>Contato</a>
                        </>
                    )}
                </nav>

                {isAdmin ? (
                    <div className="cabecalho-admin" style={{
    width: 231 + 'px'}}>
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
    );
}
