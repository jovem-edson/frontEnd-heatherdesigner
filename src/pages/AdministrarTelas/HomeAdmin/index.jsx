import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function HomeAdmin() {
    return (
        <div className='pagina-home-admin' isAdmin={true}>
            <Cabecalho isAdmin={true} />
            <div>CORPOOOO</div>
            <Rodape />
        </div>
    )
} 