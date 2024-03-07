import Card from '../components/Card'

const MainPage = ({ shoes }) => {

    return (
        <>
            <div className='main-bg'></div>
                <div className='container products'>
                <div className='row'>
                {shoes.map((shoe,idx) => {
                    return (
                    <Card key={idx} idx={idx} shoe={shoe} />
                    );
                })}
                </div>
            </div>
        </>
    )
}

export default MainPage