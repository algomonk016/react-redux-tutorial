import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeComponents = () => {

    const cakes = useSelector(state => state.numOfCakes)
    console.log('cakes', cakes)

    const dispatch = useDispatch()
    
    return (
        <div>
            <p> No of cakes: {cakes} </p>
            <button onClick={ () => dispatch(buyCake()) } > Buy Cake </button>
        </div>
    )
}

export default HooksCakeComponents
