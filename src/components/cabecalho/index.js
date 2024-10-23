import './index.scss'
export default function Cabecalho(){
    return(
        <header className='cabecalho'>
            <div className='cabecalho-container'>
                <h1 className='cabecalho-titulo'>
                    Heather
                </h1>

                <nav className='cabecalho-nav'>
                    <ul className='cabecalho-nav-item'>
                        <a href='#' className='cabecalho-nav-item-link'>
                            Home
                        </a>
                    </ul>

                    <ul className='cabecalho-nav-item'>
                        <a href='#' className='cabecalho-nav-item-link'>
                            Portfólio
                        </a>
                    </ul>

                    <ul className='cabecalho-nav-item'>
                        <a href='#' className='cabecalho-nav-item-link'>
                            Serviços
                        </a>
                    </ul>

                    <ul className='cabecalho-nav-item'>
                        <a href='#' className='cabecalho-nav-item-link'>
                            Sobre
                        </a>
                    </ul>
                </nav>

                    <button className='cabecalho-botao'>
                        <b>Login</b>
                        <img src='/assets/images/Forward.png' alt='seta'/>
                    </button>
            </div>
   
        </header>
    )
}