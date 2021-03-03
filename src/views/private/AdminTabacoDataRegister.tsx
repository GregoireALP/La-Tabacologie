import React from 'react'
import {firestore, TABACO_DATA_STATS_PATH} from "../../config/firebase"
import FirebaseQuerry from '../../utils/FirebaseQuerry'
import './styles/tabaco-data-register.css'

interface IProps {

}

type FirebaseDataSendModel = {
    brand: string
    tabaco: number
    paper: number
    additifs: number
    tar: number
    nicotine: number
    monoxyde: number
}

interface IState {
    firebaseDataSend: FirebaseDataSendModel
}

export default class AdminTabacoDataRegister extends React.Component<IProps, IState> {

    private FirebaseQuerry: FirebaseQuerry = new FirebaseQuerry()

    constructor(props: IProps) {
        super(props)
        this.state = {
            firebaseDataSend: {
                brand: "",
                additifs: 0,
                tar: 0,
                monoxyde: 0,
                nicotine: 0,
                paper: 0,
                tabaco: 0
            }
        }
    }

    render() {
        return(
            <div className="dashboard-container">
                <form>
                    <h1 style={{color: 'black'}}>Ajouter des Cigarettes à Firebase</h1>
                    <input type="text" placeholder="Marque" onChange={(e) => {this.state.firebaseDataSend.brand = e.target.value}} /><br></br><br></br>
                    <input type="text" placeholder="Tabac" onChange={(e) => {this.state.firebaseDataSend.tabaco = parseFloat(e.target.value)}} /><br></br><br></br>
                    <input type="text" placeholder="Papier" onChange={(e) => {this.state.firebaseDataSend.paper = parseFloat(e.target.value)}} /><br></br><br></br>
                    <input type="text" placeholder="Additifs" onChange={(e) => {this.state.firebaseDataSend.additifs = parseFloat(e.target.value)}} /><br></br><br></br>
                    <input type="text" placeholder="Goudron" onChange={(e) => {this.state.firebaseDataSend.tar = parseFloat(e.target.value)}} /><br></br><br></br>
                    <input type="text" placeholder="Nicotine" onChange={(e) => {this.state.firebaseDataSend.nicotine = parseFloat(e.target.value)}} /><br></br><br></br>
                    <input type="text" placeholder="Monoxyde" onChange={(e) => {this.state.firebaseDataSend.monoxyde = parseFloat(e.target.value)}} /><br></br><br></br>
                    <input type="button" value="Envoyer" onClick={() => {
                        FirebaseQuerry.sendDataToFirebase(TABACO_DATA_STATS_PATH, 
                            {
                                    brand: this.state.firebaseDataSend.brand,
                                    additifs: this.state.firebaseDataSend.additifs,
                                    tar: this.state.firebaseDataSend.tar,
                                    monoxyde: this.state.firebaseDataSend.monoxyde,
                                    nicotine: this.state.firebaseDataSend.nicotine,
                                    paper: this.state.firebaseDataSend.paper,
                                    tabaco: this.state.firebaseDataSend.tabaco
                    }
                    )}}/>
                </form>
            </div>
        )
    }
}