import { useState } from 'react'
import Card from '../components/Card'
import data from '../data'

const Main = () => {
    let [shoes] = useState(data)

    return (
        <>
            <div className='main-bg'></div>
                <div className='container products'>
                <div className='row'>
                {shoes.map((shoe,idx) => {
                    return (
                    <Card key={idx} idx={idx+1} shoe={shoe} />
                    );
                })}
                </div>
            </div>
        </>
    )
}

export default Main