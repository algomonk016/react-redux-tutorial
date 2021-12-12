import React from 'react'
import { Provider } from 'react-redux'

import './App.css'

import store from './redux/store'
import HooksCakeComponents from './components/HooksCakeComponents'
import CakeComponents from './components/CakeComponents'

const App = () => {
  return (
    <Provider store={ store }>
      <div className='App'>
        {/* <CakeComponents /> */}
        <HooksCakeComponents />
      </div>
    </Provider>
  )
}

export default App
