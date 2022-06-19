import logo from './airplane.png';
import './App.css';
import Header from './components/Header';
import Trello from './components/Columns';
import CardInterface from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Task from './components/Task'
import Task2 from './components/Task2'
import data from './components/data'
import dataTrello from './components/dataTrello'

function App() {
    let [counter, setCounter] = React.useState(0)
    let [randomuser, setRandomUser] = React.useState({})
    let [modalCardObject, setModalCardObject] = React.useState({name:"YO"})
    // React.useEffect(deistvia, [])
    // let getAPI = async() => {
    //     fetch(
    //         "https://randomuser.me/api/",
    //         {
    //             method: 'GET',
    //         }
    //         ).then(result => {
    //             console.log(result)
    //             setRandomUser(result)
    //         }), [randomuser]
    //     }
    // React.useEffect(()=>{getAPI()})
    return (
        <React.Fragment>
            <div id='mainScreen'>
                <Header />
                <Trello setModalCardObject={setModalCardObject} dataTrello={dataTrello} />
            </div>
            <CardInterface modalCardObject={modalCardObject} />
        </React.Fragment>
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
