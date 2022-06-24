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
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";


export const ModalContext = React.createContext(null)
function App() {
    let [counter, setCounter] = useState(0)
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
    // let num = 0
    // const expensiveCalculation = (num) => {
    //     console.log("Calculating...");
    //     for (let i = 0; i < 1000000000; i++) {
    //       num += 1;
    //     }
    //     return num;
    //   };
    //   expensiveCalculation(num)
    return (
        <ModalContext.Provider value={setModalCardObject}>
            <BrowserRouter>
            <div id='mainScreen'>
                <section className="flex header mb-50">
                    <div className="logo">My Site</div>
                    <div className="menu">
                        <a className="menuLink" href="/trello">Trello Copy</a>
                        <a className="menuLink" href='/task'>Instagram Copy</a>
                    </div>
                </section>
                <Routes>
                    <Route path="/trello" element={<Trello dataTrello={dataTrello} />}></Route>
                    <Route path="/task" element={<Task />}></Route>
                </Routes>
                
                Это главная страница                
            </div>
            </BrowserRouter>
            <CardInterface modalCardObject={modalCardObject} />
        </ModalContext.Provider>
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
