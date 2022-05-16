
function ColumnCards(){
    let cards = []
    for(var i = 0; i < 4; i++){
        cards.push(Card(i))
    }
    return cards
}

function Card(index){
    let card = <div id={index} onDragStart={drag} draggable="true" className="ticket my-2">
                <div className="bg-white py-1 px-3 shadow-sm rounded">
                    Card {index}
                </div>  
            </div>
    return card
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.dataTransfer)
}

export default ColumnCards