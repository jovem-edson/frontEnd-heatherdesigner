import './index.scss'

export default function Rodape() {
    return (
        <div className='rodape'>
            <section className='section-rodape'>
                <div className='section-heather'>
                    <h1>
                        Heather Designer
                    </h1>
                    <div className='section-img'>
                        <a className='fb' href='../../pages/Home/index.js' role='button' tabIndex='0'>
                            <img src='/assets/images/Rodape/fb.png' alt='Facebook' />
                        </a>

                        <a className='instagram' href='../../pages/Home/index.js' role='button' tabIndex='0'>
                            <img src='/assets/images/Rodape/Instagram.png' alt='Instagram' />
                        </a>

                        <a className='linkedin' href='../../pages/Home/index.js' role='button' tabIndex='0'>
                            <img src='/assets/images/Rodape/LinkedIn.png' alt='LinkedIn' />
                        </a>
                    </div>
                    <h5>© 2024 Heather Designer. Todos os direitos reservados.</h5>

                </div>

                <nav className='rodape-nav'>
                    <ul>
                        <h3>Serviços</h3>
                        <li><a href='../../pages/Home/index.js' role='button' tabIndex='0'>Cadastrar</a></li>
                        <li><a href='../../pages/Home/index.js' role='button' tabIndex='0'>Logar</a></li>
                    </ul>

                    <ul>
                        <h3>Suporte</h3>
                        <li><a href='../../pages/Home/index.js' role='button' tabIndex='0'>Sobre mim</a></li>
                        <li><a href='../../pages/Home/index.js' role='button' tabIndex='0'>Ajuda</a></li>
                    </ul>

                    <ul>
                        <h3>Idioma</h3>
                        <li>
                            <img src='/assets/images/Rodape/Idioma.png' alt='Idioma' />
                            <a href='.' role='button' tabIndex='0'>Português - Brasil</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}
