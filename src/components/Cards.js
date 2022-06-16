
export default function Card({crntCardObject}){
    return (
    <div id={crntCardObject.id} onDragStart={drag} draggable="true" className="ticket my-2">
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