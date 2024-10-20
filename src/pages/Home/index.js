import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function Home() {
    return(
        <div className='pagina-home'>
            <Cabecalho/>
            <section className='primeira-secao'>
                <div className='primeira-secao-container'>
                    <h2 className='subtitulo'>
                        SOBRE MIM
                    </h2>

                    <p className='sobre-mim'>
                    Olá! Eu sou Heather, uma designer apaixonada por criar experiências visuais que conectam pessoas e ideias. Ao longo dos últimos 6 anos, tenho trabalhado com uma variedade de projetos, desde identidade visual e design editorial até interfaces digitais. Meu objetivo é sempre encontrar o equilíbrio entre funcionalidade e estética, criando soluções criativas que comunicam histórias de forma clara e impactante.
                    </p>

                    <div className='primeira-secao-botoes'>
                        <button className='botao'>
                            Fale Comigo
                            <img src='/assets/images/Forward2.png' alt='seta'/>
                        </button>

                        <button className='botao secundario'>
                            Meus Serviços
                        </button>
                    </div>
                </div>
                    
                <div>
                <img src='/assets/images/sobre-mim-fotos.png' className='sobre-mim-fotos' alt='Heather'/>
                </div>
            </section>

            <section className='segunda-secao'>
                <div className='segunda-secao-container'>
                    <div>
                        <h1 className='titulo'>
                         Minha Formação
                        </h1>
                        <p className='informacao'>
                        Um pouco sobre minha jornada acadêmica
                        </p>
                    </div>

                    <div className='formacoes'>
                        <div className='formacoes-item'>
                            <img src='/assets/images/senaco.svg' alt='senac'/>

                            <p className='formacoes-item-texto'>
                            Bacharelado em Design
                            <br/>
                            <b>Senac São Paulo</b>
                            </p>

                            <img src='/assets/images/circulo.svg'/>

                            <p className='formacoes-item-texto'>
                                <b>2016</b>
                            </p>

                        </div>

                        <div className='formacoes-item'>
                            <img src='/assets/images/unesparo.svg' alt='senac'/>

                            <p className='formacoes-item-texto'>
                            Pós Graduação em Artes Visuais
                            <br/>
                            <b>Universidade Estadual do Paraná</b>
                            </p>

                            <img src='/assets/images/circulo.svg'/>

                            <p className='formacoes-item-texto'>
                                <b>2020</b>
                            </p>

                        </div>

                        <div className='formacoes-item'>
                            <img src='/assets/images/unespo.svg' alt='senac'/>

                            <p className='formacoes-item-texto'>
                            Doutorado em Artes
                            <br/>
                            <b>Universidade Estadual Paulista</b>
                            </p>

                            <img src='/assets/images/circulo.svg'/>

                            <p className='formacoes-item-texto'>
                                <b>2024</b>
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}