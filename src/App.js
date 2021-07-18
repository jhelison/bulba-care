import React from 'react'
import "./App.css"

import Header from './components/template/Header';
import Main from './screens/Main';
import Footer from './components/template/Footer';
import Subscribed from './screens/Subscribed';

function App() {
    return (
        <div className="App">
            {/* <Header />
            <Main />
            <Footer /> */}
            <Subscribed/>
        </div>
    )
}

export default App;
