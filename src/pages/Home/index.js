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

                </div>
            </section>
        </div>
    )
}