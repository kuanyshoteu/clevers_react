
function ColumnCards(){
    let cards = []
    for(var i = 0; i < 4; i++){
        cards.push(Card(i))
    }
    return cards
}

function Card(index){
    let card = <div class="ticket my-2">
                <div class="bg-white py-1 px-3 shadow-sm rounded">
                    Card {index}
                </div>  
            </div>
    return card
}
export default ColumnCards