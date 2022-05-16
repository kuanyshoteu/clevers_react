
function ColumnCards(columnIndex){
    let cards = []
    for(var i = 0; i < 4; i++){
        cards.push(Card(columnIndex*4 + i))
    }
    return cards
}

function Card(index){
    let id = 'card' + index
    let card = <div id={id} onDragStart={drag} draggable="true" className="ticket my-2">
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