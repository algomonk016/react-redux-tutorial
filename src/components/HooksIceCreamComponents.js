import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

const HooksIceCreamComponents = () => {
    const iceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <p> No of ice-creams {iceCreams} </p>
            <button onClick={() => dispatch(buyIceCream())}>buy icecream</button>
        </div>
    )
}

export default HooksIceCreamComponents
