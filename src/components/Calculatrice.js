import React from "react";
import TitreCalculatrice from "./TitreCalculatrice";
import ZoneSortieEcran from "./ZoneSortieEcran";
import UnBoutton from "./UnBoutton";

class Calculatrice extends React.Component{
    
    constructor(props){
        super(props);

        this.state = ({
            saisiInput : '',
            sortieReponse : '',
        })
        
        this.gestionClique = this.gestionClique.bind(this);
    }

    gestionClique(event){

        // recuperation de la valeur du button
        const valeur = event.target.value;

        switch(valeur){
            /**
             * Si ce n'est pas le signe égale, utilise eval module
             * pour évaluer le calcule.
             */
            case '=':
                if (this.state.saisiInput !==''){
                    var reponse = '';

                    try{
                        reponse = eval(this.state.saisiInput)
                    }
                    catch(err){
                        this.setState({sortieReponse: "Math Error"});
                    }

                    if(reponse===undefined)
                        this.setState({sortieReponse: "Math Error"})
                    else 
                        this.setState({sortieReponse: reponse, saisiInput: ''})
                    break;
                }

            case 'Clear': {
                this.setState ({sortieReponse : '', saisiInput: ''});
                break;
            }

            case 'Delete': {
                var str = this.state.saisiInput;
                str = str.substring(0, str.length-1);
                this.setState({saisiInput : str})
                break;
            }

            default : {
                this.setState ({saisiInput : this.state.saisiInput += valeur})
                break;
            }
        }
    }

    render() {
        return (
            <div className="frame">
                <TitreCalculatrice value="Ma Calculatrice"/>
                <div className="mainCalc">
                    <ZoneSortieEcran saisiInput = {this.state.saisiInput} sortieReponse = {this.state.sortieReponse}/>
                    <div className="ligne-boutton">
                        <UnBoutton gestionClique = {this.gestionClique} label={'Clear'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'Delete'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'.'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'/'}/>
                    </div>

                    <div className="ligne-boutton">
                        <UnBoutton gestionClique = {this.gestionClique} label={'7'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'8'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'9'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'*'}/>
                    </div>

                    <div className="ligne-boutton">
                        <UnBoutton gestionClique = {this.gestionClique} label={'4'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'5'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'6'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'-'}/>
                    </div>

                    <div className="ligne-boutton">
                        <UnBoutton gestionClique = {this.gestionClique} label={'1'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'2'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'3'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'+'}/>
                    </div>

                    <div className="ligne-boutton">
                        <UnBoutton gestionClique = {this.gestionClique} label={'0'}/>
                        <UnBoutton gestionClique = {this.gestionClique} label={'='}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculatrice;