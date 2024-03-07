import { Link } from 'react-router-dom'

const Card = ({ shoe, idx }) => {
    return (
        <div className='col-md-4'>
            <Link to={`/detail/${idx}`}>
                <img src={'https://codingapple1.github.io/shop/shoes'+ (idx+1) + '.jpg'} />
            </Link>
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
        </div>
    )
}

export default Card