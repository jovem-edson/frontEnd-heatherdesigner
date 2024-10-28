import './index.scss';
import Cabecalho from '../../../components/cabecalho';

export default function HomeAdmin() {
    return (
        <div className='pagina-home-admin' isAdmin={true}>
            <Cabecalho isAdmin={true} />
        </div>
    )
}