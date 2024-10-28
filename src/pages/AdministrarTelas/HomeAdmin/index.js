import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import ProjetosNotaveis from '../../../components/ProjetosNotaveis';

export default function HomeAdmin() {
    return (
        <div className='pagina-home-admin' isAdmin={true}>
            <Cabecalho isAdmin={true} />
        <ProjetosNotaveis/>
        </div>
    )
}