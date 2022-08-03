import React from "react";

const LigneSortieAffichage = (props) => {
    return (
        <div className="screen-rendu">
            <input type="texte" readOnly value={props.valeur}></input>
        </div>
    )
}

export default LigneSortieAffichage;