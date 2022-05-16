import ColumnCards from './Cards';


let data = [[]]
function Trello(){
    let table = []
    for (var i = 0; i <= 5; i++){
        let column = <Column />
        table.push(column)
    }
    return <div className='flex'>{table}</div>
}

function Column(){
    let column = <div class="horiz-scroll p-5 bg-primary bg-opacity-25">
        <div class="column rounded bg-secondary bg-opacity-25 p-3">
        <b>Пн 02</b>
        <div>
            <ColumnCards />
        </div>
        <textarea placeholder="Ввести заголовок для этой карточки" class="my-2 form-control"></textarea>
        <button class="btn btn-primary btn-sm">
            Добавить карточку
        </button>
        </div>
    </div>
    return column
}
export default Trello