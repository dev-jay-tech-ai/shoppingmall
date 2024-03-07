import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from 'styled-components'

const DetailPage = ({ shoes }) => {
    const { id } = useParams()
    const [alert, setAlert] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => { setAlert(false) }, 2000)
        return () => clearTimeout(timer)
    },[])

    return (
        <div className='container'>
            { alert && <div className='alert alert-warning'>2초 이내 구매시 할인</div> }
            <div className='row'>
                <div className='col-md-6'>
                    <img src={'https://codingapple1.github.io/shop/shoes'+ (Number(id)+1) + '.jpg'} 
                    width='100%'
                    />
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