import React from 'react';
import Card from './Cards';

function Trello({dataTrello}){
    let [cardId, setCardId] = React.useState(7)
    return (
        <div className='flex'>
            {
                dataTrello.map((crntColumnObject) => {
                    return <Column key={crntColumnObject.id} cardId={cardId} setCardId={setCardId} crntColumnObject={crntColumnObject}/>;
                } )
            }
        </div>
    )
}

function Column({crntColumnObject, cardId, setCardId}){
    let [cardsArrayObject, setCardsArray] = React.useState({cardsArray: crntColumnObject.cards})
    
    function addCard(){
        
        setCardId(cardId + 1)
        setCardsArray((oldCardsArrayObject) => {
            let oldCardsArray = oldCardsArrayObject.cardsArray
            let textarea = document.getElementById('textarea'+crntColumnObject.id)
            let newName = textarea.value
            textarea.value = ""
            oldCardsArray.push(
                {
                    name: newName,
                    id: "card" + cardId,
                }
            )
            return {
                cardsArray: oldCardsArray,
            }
        })
    }

    return (
    <div className="horiz-scroll p-5 bg-primary bg-opacity-25">
        <div className="column rounded bg-secondary bg-opacity-25 p-3">
            <b>{crntColumnObject.name}</b>
            <div className='allowDrop' onDrop={drop} onDragOver={allowDrop}>
                {
                    cardsArrayObject.cardsArray.map((crntCardObject) => {
                        return <Card key={"card"+crntCardObject.id} crntCardObject={crntCardObject} />
                    })
                }
            </div>
            <textarea id={'textarea' + crntColumnObject.id} placeholder="Ввести заголовок для этой карточки" className="my-2 form-control"></textarea>
            <button onClick={addCard} className="btn btn-primary btn-sm">
                Добавить карточку
            </button>
        </div>
    </div>
    )
}

function drop(ev){
    var data = ev.dataTransfer.getData("text");
    let card = document.getElementById(data)
    let sibling = ev.target.closest('.ticket')
    if (sibling){
        sibling.before(card);    
    }
    else{
        let parent = ev.target.closest('.allowDrop')
        parent.appendChild(card)
    }
    ev.preventDefault();
}
function allowDrop(ev) {
    ev.preventDefault();
}
export default Trello