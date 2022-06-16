import logo from './airplane.png';
import './App.css';
import Header from './components/Header';
import Trello from './components/Columns';
import CardInterface from './components/CardInterface';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Task from './components/Task'
import Task2 from './components/Task2'
import data from './components/data'
import dataTrello from './components/dataTrello'

function App() {
    // Task2({data: data, a:5, b:6})
    return (
        <div>
            <Header />
            <Trello dataTrello={dataTrello} />
            <CardInterface />
            
        </div>
    )
}













// 19:05 
function Hundred(){
    var buttons = [] 
    for(var i = 0; i < 100; i++){
        var button = <button className='menuLink'>Privet + {i}</button>
        buttons.push(button)
    }
    return buttons
}



export default App;
