import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function Home() {
    return (
        <div className='pagina-home'>
            <Cabecalho />
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
                            <img src='/assets/images/Forward2.png' alt='seta' />
                        </button>

                        <button className='botao secundario'>
                            Meus Serviços
                        </button>
                    </div>
                </div>

                <div>
                    <img src='/assets/images/sobre-mim-fotos.png' className='sobre-mim-fotos' alt='Heather' />
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
                            <img src='/assets/images/senaco.svg' alt='senac' />

                            <p className='formacoes-item-texto'>
                                Bacharelado em Design
                                <br />
                                <b>Senac São Paulo</b>
                            </p>

                            <img src='/assets/images/circulo.svg' />

                            <p className='formacoes-item-texto'>
                                <b>2016</b>
                            </p>

                        </div>

                        <div className='formacoes-item'>
                            <img src='/assets/images/unesparo.svg' alt='senac' />

                            <p className='formacoes-item-texto'>
                                Pós Graduação em Artes Visuais
                                <br />
                                <b>Universidade Estadual do Paraná</b>
                            </p>

                            <img src='/assets/images/circulo.svg' />

                            <p className='formacoes-item-texto'>
                                <b>2020</b>
                            </p>

                        </div>

                        <div className='formacoes-item'>
                            <img src='/assets/images/unespo.svg' alt='senac' />

                            <p className='formacoes-item-texto'>
                                Doutorado em Artes
                                <br />
                                <b>Universidade Estadual Paulista</b>
                            </p>

                            <img src='/assets/images/circulo.svg' />

                            <p className='formacoes-item-texto'>
                                <b>2024</b>
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            <section className='terceira-secao-experiencias'>
                <div className='titulo-sub'>
                    <h1> Minhas experiências </h1>
                    <p className='informacao'>
                        Ao longo da minha carreira como designer, tive a oportunidade de trabalhar em locais diversos e inspiradores. Cada experiência contribuiu significativamente para o meu crescimento profissional e pessoal, permitindo-me explorar diferentes culturas e abordagens ao design.
                    </p>
                </div>

                <div className='carrossel'>
                    <div className='carrossel-cartao'>
                        <img className='carrossel-cartao-imagem' src='/assets/images/carrossel-experiencias-1.png' />
                        <p className='carrossel-cartao-descricao'> No Equador, colaborei em um projeto de revitalização urbana, onde explorei a fusão de tradições locais com design contemporâneo, criando espaços que refletiam a identidade cultural da comunidade. </p>
                    </div>

                    <div className='carrossel-cartao'>
                        <img className='carrosel-cartao-imagem' src='/assets/images/carrossel-experiencias-2.png' />
                        <p className='carrossel-cartao-descricao'> Em China, trabalhei em um ambiente rústico, em aldeias fora da cidade, onde pude desenvolver projetos que respeitavam e integravam a cultura local. A imersão em comunidades tradicionais me ensinou a valorizar o design sustentável e a harmonização com a natureza. </p>
                    </div>

                    <div className='carrossel-cartao'>
                        <img className='carrosel-cartao-imagem' src='/assets/images/carrossel-experiencias-3.png' />
                        <p className='carrossel-cartao-descricao'> Na Itália, mergulhei na rica herança do design, contribuindo para uma marca de moda renomada. A experiência de trabalhar ao lado de mestres artesãos me inspirou a valorizar a estética e a funcionalidade, elevando cada projeto a uma forma de arte. </p>
                    </div>



                </div>
            </section>


            <section className='quarta-secao-projetos-notaveis'>
                <h1> Projetos Notáveis </h1>
            </section>

            <section className='quinta-secao-ferramentas'>
                <h1> Ferramentas </h1>

            </section>

            <section className='sexta-secao-depoimentos'>
                <h1> Depoimentos </h1>
            </section>

            <section className='setima-secao-contato'>
                <h1>
                    Contato
                </h1>
            </section>

            <footer className='rodape'>

            </footer>
        </div>
    )
}