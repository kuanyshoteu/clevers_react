import React from "react"

export default function Task2({data, b}){   
    let a = [0, 1, 2, 3]
    return (
        <React.Fragment>
            <div>
            {
                a.map(function(crntNum2){
                    <div key={crntNum2}>{crntNum2}</div>
                })
            }
            </div>
            <div>{
                  data.map((crntUser) => {
                    return (
                    <React.Fragment key={crntUser.name}>
                        <div>{crntUser.name}</div>
                        <div>{crntUser.mail}</div>
                    </React.Fragment>
                    )
                  })
            }
            </div>
        </React.Fragment>
    )
}