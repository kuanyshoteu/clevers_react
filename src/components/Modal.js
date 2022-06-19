


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
    if(event.target.classList.includes('allowHide')){
        let modal = document.getElementById('modalScreen')
        let main = document.getElementById('mainScreen')
        modal.classList.add('hidden')
        main.classList.remove('blur-in')
    }
}
export default CardInterface