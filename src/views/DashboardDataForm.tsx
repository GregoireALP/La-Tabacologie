import React from 'react'
import "./styles/dashboard-data-form.css"

import { firestore, USER_TABACO_DATA_PATH } from "../config/firebase"

interface IProps {

}

type DataHistoryType = {
    date: string
    value: number
}

interface IState {
    data: string
    isLoading: boolean
    historyData: DataHistoryType[]
}

export default class DasboardDataForm extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            data: "",
            isLoading: true,
            historyData: []
        }
    }

    componentDidMount() {        
        const self = this

        this.prepareDataHistory(function() {
            self.setState({isLoading: false})
        })

    }

    private prepareDataHistory(next: Function) {
        const self = this

        firestore.collection(USER_TABACO_DATA_PATH).get()
        .then(function(data) {
            data.docs.map(function(doc) {
                self.state.historyData.push({
                    date: doc.data().date,
                    value: doc.data().consumption_day
                })
            })

            next()
        })
    }
 
    private sendDataFirebase() {
        firestore.collection(USER_TABACO_DATA_PATH).add({
            consumption_day: this.state.data,
            date: new Date().toISOString().slice(0, 10),
            dateDayName: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][new Date().getDay() - 1] || ''
        })
            .then(function (data) {
            })
            .catch(function (err) {
                if (err) console.log(err)
            })
    }

    render() {

        if(this.state.isLoading) {
            return(
                <div>
                    <p>Ok...</p>
                </div>
            )
        }

        return (
            <div className="dashboard-container">
                <form style={{ color: "black" }}>
                    <p>Remplir des données</p>
                    <input type="text" placeholder="Entrer en chiffre le nb de cigarettes" onChange={(e) => { this.setState({ data: e.target.value }) }} />
                    <input type="button" value="Envoyer" onClick={() => this.sendDataFirebase()} />
                </form>

                <div className="data-history-container">
                    {this.state.historyData.map(function(data) {
                        return(
                            <div style={{color: 'black'}}>
                                <p>{data.date}</p>
                                <p>{data.value}</p>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}