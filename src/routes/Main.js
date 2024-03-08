import { useContext, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Context from '../Context'

const MainPage = () => {
    const context = useContext(Context)
    const { shoes } = context;
    const [list, setList] = useState(shoes)
    const [count, setCount] = useState(2)
    return (
        <>
            <div className='main-bg'></div>
                <div className='container products'>
                <div className='row'>
                {list && list.map((shoe,idx) => {
                    return (
                    <Card key={idx} idx={idx} shoe={shoe} />
                    );
                })}
                </div>

                {count < 4 &&
                <button onClick={() => { 
                    axios.get('https://codingapple1.github.io/shop/data'+ count +'.json')
                        .then((result) => {
                            setCount(count+1)
                            setList([ ...list, ...result.data])
                        })
                        .catch(() => console.log('error'))
                }}>버튼</button>}
            </div>
        </>
    )
}

export default MainPage