import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Main from './components/Main';


import MetaBalls from './components/MetaBalls/MetaBalls';
import Waves from './components/Waves/Waves';

function App() {

    return (
        <div>
            <Header></Header>
            <Main></Main>
        </div>
    )
}

export default App
