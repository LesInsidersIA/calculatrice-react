import React from "react";
import LigneSortieAffichage from "./LigneSortieAffichage";

const ZoneSortieEcran = (props) => {
    return (
        <div className="ecran-affichage">
            <LigneSortieAffichage valeur = {props.saisiInput}/>
            <LigneSortieAffichage valeur = {props.sortieReponse}/>
        </div>
    )
}

export default ZoneSortieEcran;