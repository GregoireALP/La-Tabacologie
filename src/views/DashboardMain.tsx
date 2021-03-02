import React from 'react'
import DashboardChart from '../components/charts/DashboardChart'
import "./styles/dashboard-main.css"

import {firestore, USER_TABACO_DATA_PATH} from "../config/firebase"

interface IProps {

}

type FirebaseData = {
    label: string[],
    dataCharts: number[]
}

interface IState {
    isLoading: boolean
    dataFromFirebase: FirebaseData
}

export default class DashboardMain extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            isLoading: true,
            dataFromFirebase: {
                label: ["none"],
                dataCharts: [0]
            }
        }
    }

    componentDidMount() {
        const self = this

        /**
         * All instruction in the callback function
         */
        this.prepareMainCharts(function() {
            self.setState({isLoading: false})
        })
    }

    private async prepareMainCharts(next: Function) {
        const self = this

        let dataArray: number[] = []
        let labelArray: string[] = []

        firestore.collection(USER_TABACO_DATA_PATH).get()
        .then(function(data) {
            data.docs.map(function(doc) {
                dataArray.push(parseInt(doc.data().consumption_day))
                labelArray.push(doc.data().dateDayName)
            })

            self.setState({dataFromFirebase: {
                label: labelArray,
                dataCharts: dataArray
            }})  

            next()
        })
    }

    render() {

        if(this.state.isLoading) {
            return <p>Ok....</p>
        }

        return(
            <div className="dashboard-container">
                <DashboardChart 
                title="Ta mere" 
                labelName="Cigarettes"
                label={this.state.dataFromFirebase.label}
                data={this.state.dataFromFirebase.dataCharts} 
                bgColor="#d93b189f"
                height={200} 
                width={700}
                />
            </div>
        )
    }
}