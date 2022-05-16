import logo from './airplane.png';
import './App.css';
import Header from './components/Header';
import Trello from './components/Columns';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div>
            <Header />
            <Trello />
        </div>
    )
}

function Hundred(){
    var buttons = [] 
    for(var i = 0; i < 100; i++){
        var button = <button className='menuLink'>Privet + {i}</button>
        buttons.push(button)
    }
    return buttons
}



export default App;
