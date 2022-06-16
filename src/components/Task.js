import React from "react"


export default function Task(){
    function update(){
        myFunction(function(oldObject){
            let newObject = {
                ...oldObject,
                name: "Dias",
            }
            return newObject
        }) 
    }
    let [myData, myFunction] = React.useState({
        name: "Shyngys",
        age: 15,
        phone: "98796514",
        mail: "admksal@mail",
        isKrutoy: true,
    })
    return(
        <React.Fragment>
            <div className="flex centered">
                <div>
                    <div>{myData.name}</div>
                    <div>{myData.phone}</div>
                    <div>{myData.mail}</div>
                    <button onClick={update}>Update</button>
                </div>
            </div>
        </React.Fragment>
    )
}