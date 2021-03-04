import React from 'react'
import DashboardChart from '../components/charts/DashboardChart'
import "./styles/dashboard-main.css"

import {firestore, USER_TABACO_DATA_PATH} from "../config/firebase"
import FirebaseQuerry from '../utils/FirebaseQuerry'

interface IProps {

}

type FirebaseDataFetchModel = {
    label: string[],
    dataCharts: number[]
}

interface IState {
    isLoading: boolean
    firebaseDataFetch: FirebaseDataFetchModel
}

export default class DashboardMain extends React.Component<IProps, IState> {

    private FirebaseQuerry = new FirebaseQuerry()

    constructor(props: IProps) {
        super(props)
        this.state = {
            isLoading: true,
            firebaseDataFetch: {
                label: ["none"],
                dataCharts: [0]
            }
        }
    }

    componentDidMount() {
        const self = this

        /**
         * Clean State before fill it
         */
        this.state.firebaseDataFetch.dataCharts = []
        this.state.firebaseDataFetch.label = []

        FirebaseQuerry.fetchDataFromFirebase(USER_TABACO_DATA_PATH, function(doc: any) {

            self.state.firebaseDataFetch.dataCharts.push(parseInt(doc.data().consumption_day))
            self.state.firebaseDataFetch.label.push(doc.data().dateDayName)
        }, function() {
            self.setState({isLoading: false})
        })

    }


    render() {

        if(this.state.isLoading) {
            return <p>Ok....</p>
        }

        return(
            <div className="dashboard-container">
                <DashboardChart 
                title="Cigarettes" 
                labelName="Salope"
                label={this.state.firebaseDataFetch.label}
                data={this.state.firebaseDataFetch.dataCharts} 
                bgColor="#c203fc"
                height={300} 
                width={500}
                />
            </div>
        )
    }
}