import './index.scss'

export default function Rodape() {
    return (
        <div className='rodape'>
            <section className='section-rodape'>
                <div className='section-heather'>
                    <h1>
                        Heather Designer
                    </h1>

                    <h5>© 2024 Heather Designer. Todos os direitos reservados.</h5>

                    <div className='section-img'>
                        <a className='fb' href='#'>
                            <img src='/assets/images/Rodape/fb.png' alt='Facebook' />
                        </a>

                        <a className='instagram' href='#'>
                            <img src='/assets/images/Rodape/instagram.png' alt='Instagram' />
                        </a>

                        <a className='linkedin' href='#'>
                            <img src='/assets/images/Rodape/LinkedIn.png' alt='LinkedIn' />
                        </a>
                    </div>
                </div>

                <nav className='rodape-nav'>
                    <ul>
                        <h3>Serviços</h3>
                        <li><a href='#'>Cadastrar</a></li>
                        <li><a href='#'>Logar</a></li>
                    </ul>

                    <ul>
                        <h3>Suporte</h3>
                        <li><a href='#'>Sobre mim</a></li>
                        <li><a href='#'>Ajuda</a></li>
                    </ul>

                    <ul>
                        <h3>Idioma</h3>
                        <li>
                            <img src='/assets/images/Rodape/idioma.png' alt='Idioma' />
                            <a href='#'>Português - Brasil</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}
