import { useParams } from "react-router-dom"

const DetailPage = ({ shoes }) => {

    const { id } = useParams()

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={'https://codingapple1.github.io/shop/shoes'+ (Number(id)+1) + '.jpg'} />
                </div>
                <div className='col-md-6 mt-4'>
                    <h4 className='pt-5'>{shoes[id].title}</h4>
                    <p>{shoes[id].content}</p>
                    <p>{shoes[id].price}</p>

                    <button className='btn btn-danger'>주문하기</button>
                </div>
            </div>
            
        </div>
    )
}

export default DetailPage