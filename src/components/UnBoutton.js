
import React from "react";

const UnBoutton = (props) => {
    return (
        <input
            type="button"
            onClick={props.gestionClique}
            value={props.label}>
        </input>
    )
}

export default UnBoutton