import ColumnCards from './Cards';


let data = [[]]
function Trello(){
    let table = []
    for (var i = 0; i <= 5; i++){
        let column = Column(i)
        table.push(column)
    }
    return <div className='flex'>{table}</div>
}

function Column(index){
    let column = <div class="horiz-scroll p-5 bg-primary bg-opacity-25">
        <div class="column rounded bg-secondary bg-opacity-25 p-3">
            <b>Пн 02</b>
            <div className='allowDrop' onDrop={drop} onDragOver={allowDrop}>
                {ColumnCards(index)}
            </div>
            <textarea placeholder="Ввести заголовок для этой карточки" class="my-2 form-control"></textarea>
            <button class="btn btn-primary btn-sm">
                Добавить карточку
            </button>
        </div>
    </div>
    return column
}
function drop(ev){
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));    
    ev.preventDefault();
}
function allowDrop(ev) {
    ev.preventDefault();
}
export default Trello