import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { updateCount } from "../store/cartItemsSlice"

const Cart = () => {
    const state = useSelector((state) => { return state })
    const dispatch = useDispatch()
    const cartItems = state.cartItems
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {cartItems && cartItems.map((item,idx) => {
                    return (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td><button onClick={() => {
                                dispatch(updateCount(item.id)) 
                            }}>+</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart