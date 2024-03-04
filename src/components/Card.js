const Card = ({ shoe, idx }) => {
    return (
        <div className='col-md-4'>
            <img src={'https://codingapple1.github.io/shop/shoes'+ (idx) + '.jpg'} />
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
        </div>
    )
}

export default Card