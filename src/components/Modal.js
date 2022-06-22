


function CardInterface({modalCardObject}){
    return (
        <div onClick={hideModal} id='modalScreen' className="allowHide hidden modalScreen">
            <div className='modalBox'>
                <div className="allowHide">x</div>
                {modalCardObject.name}
            </div>
        </div>
        )
}
function hideModal(event){
    console.log(event.target.classList)
    if(event.target.classList[0] == 'allowHide'){
        let modal = document.getElementById('modalScreen')
        let main = document.getElementById('mainScreen')
        modal.classList.add('hidden')
        main.classList.remove('blur-in')
    }
}
export default CardInterface