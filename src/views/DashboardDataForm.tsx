import React from 'react'
import "./styles/dashboard-data-form.css"

import { firestore, USER_TABACO_DATA_PATH } from "../config/firebase"
import FirebaseQuerry from '../utils/FirebaseQuerry'

interface IProps {

}

type FirebaseDataFetchModel = {
    date: string
    value: number
}

type FirebaseDataSendModel = {
    value: string
}

interface IState {
    firebaseDataSend: FirebaseDataSendModel
    firebaseDataFetch: FirebaseDataFetchModel[]
    isLoading: boolean
}

export default class DasboardDataForm extends React.Component<IProps, IState> {

    private FirebaseQuerry = new FirebaseQuerry()

    constructor(props: IProps) {
        super(props)
        this.state = {
            firebaseDataSend: { value: "" },
            firebaseDataFetch: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        let self = this

        /**
         * Prepare Datas
         */
        FirebaseQuerry.fetchDataFromFirebase(USER_TABACO_DATA_PATH, function(doc: any) {
            self.state.firebaseDataFetch.push({
                date: doc.data().date,
                value: doc.data().consumption_day
            })

            self.setState({isLoading: false})
        }, function() {
            // Callback
        })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div>
                    <p>Ok...</p>
                </div>
            )
        }

        return (
            <div className="dashboard-container">
                <form style={{ color: "black" }}>
                    <p>Remplir des données</p>
                    <input type="text" placeholder="Entrer en chiffre le nb de cigarettes" onChange={(e) => { this.setState({ firebaseDataSend: { value: e.target.value } }) }} />
                    <input type="button" value="Envoyer" onClick={() => FirebaseQuerry.sendDataToFirebase(USER_TABACO_DATA_PATH,
                     {
                        consumption_day: this.state.firebaseDataSend.value,
                        date: new Date().toISOString().slice(0, 10),
                        dateDayName: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][new Date().getDay() - 1] || ''

                    })} />
                </form>

                <div className="data-history-container">
                    {this.state.firebaseDataFetch.map(function (data) {
                        return (
                            <div style={{ color: 'black' }}>
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