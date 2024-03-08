import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Tap from '../components/Tap'
import styled from 'styled-components'
import Context from '../Context'

const DetailPage = () => {
    const context = useContext(Context)
    const { shoes } = context
    const { id } = useParams()
    const [popup, setPopup] = useState(true)
    const [num, setNum] = useState(true)
    const [fade, setFade] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => { setPopup(false) }, 2000)
        return () => clearTimeout(timer)
    },[])

    useEffect(() => {
        if(isNaN(num)) alert('숫자만 입력 가능')
    },[num])

    useEffect(() => {
        setFade('end')
        return () => { setFade('') }
    },[])

    return (
        <div className='container'>
            { popup && <div className={ 'alert alert-warning start ' + fade}>2초 이내 구매시 할인</div> }
            <input type='text' onChange={(e) => setNum(e.target.value)} />
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
            <Tap />
        </div>
    )
}

export default DetailPage