import React from "react";
import {ModalContext} from '../App'

export default function Card({crntCardObject}){
    const setModalCardObject = React.useContext(ModalContext);
    console.log(setModalCardObject)
    function showModal(){
        setModalCardObject(crntCardObject)
        let modal = document.getElementById('modalScreen')
        let main = document.getElementById('mainScreen')
        modal.classList.remove('hidden')
        main.classList.add('blur-in')
    
    }    
    return (
    <div onClick={showModal} id={crntCardObject.id} onDragStart={drag} draggable="true" className="ticket my-2">
        <div className="bg-white py-1 px-3 shadow-sm rounded">
            {crntCardObject.name}
        </div>  
    </div>
    )
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.dataTransfer)
}

