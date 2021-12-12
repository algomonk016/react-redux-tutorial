import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeComponents(props) {
    return (
        <div>
            <p> Number of cakes {props.numOfCakes} </p>
            <button onClick={props.buyCake}>Buy a Cake</button>
        </div>
    )
}

// when we need to access state in our component then we need to map our state
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponents)
