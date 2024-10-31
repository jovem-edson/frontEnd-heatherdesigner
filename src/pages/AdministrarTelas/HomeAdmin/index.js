import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import AgendaDeServicos from '../../../components/AgendaDeServicos';

export default function HomeAdmin() {
    return (
        <div className='pagina-home-admin' isAdmin={true}>
            <Cabecalho isAdmin={true} />
        <AgendaDeServicos/>
        </div>
    )
}