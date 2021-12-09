import React from 'react'
import { Provider } from 'react-redux'

import CakeComponents from './components/CakeComponents'
import './App.css'

import store from './redux/store'

const App = () => {
  return (
    <Provider store={ store }>
      <div className='App'>
        <CakeComponents />
      </div>
    </Provider>
  )
}

export default App
