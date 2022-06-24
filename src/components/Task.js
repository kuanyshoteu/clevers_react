import React from "react"
import { Fragment } from "react"

export default function Task(){
    const inputContent = React.useRef()
    function showWhatsInside(){
        console.log(inputContent.current.value)
    }
    return(
        <Fragment>
            <input onChange={showWhatsInside} ref={inputContent}></input>

        </Fragment>
    )
}