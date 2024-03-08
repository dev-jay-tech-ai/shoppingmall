import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"

const Tap = () => {
    const [tap, setTap] = useState(0)
    return (
        <>
        <Nav variant='tabs' defaultActiveKey='link0'>
            <Nav.Item>
                <Nav.Link onClick={() => setTap(0)} eventKey='link0'>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => setTap(1)} eventKey='link1'>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => setTap(2)} eventKey='link2'>버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <TapContent tap={tap} />
        </>
    )
}

const TapContent = ({tap}) => {
    const [fade, setFade] = useState('')
    useEffect(() => { 
        const timer = setTimeout(() => { setFade('end') }, 100)
        return () => {
            clearTimeout(timer)
            setFade('') 
        }
    },[tap])
    return <div className={'start ' + fade }> {['내용 0', '내용 1', '내용 2'][tap]}</div>
}

export default Tap