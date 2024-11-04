import './index.scss'
import PropTypes from 'prop-types'

const Card = ({ imagem, titulo, descricao, data_realizacao, onEdit, onDelete }) => {

    return (
        <div className='card'>
            <div className='card-imagem'>
                <img src={imagem} alt={titulo} />
            </div>

            <div className='card-informacoes'>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <p className='data-realizacao'>Realizado em: {data_realizacao}</p>
            </div>

            <span className='card-botoes'>
                <img onClick={onEdit} src='/assets/images/editar.png' />
                <img onClick={onDelete} src='/assets/images/excluir.png' />
            </span>

            
        </div>


    )
}

Card.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    data_realizacao: PropTypes.string.isRequired,
    onEdit: PropTypes.string.isRequired,
    onDelete: PropTypes.string.isRequired
}

export default Card;