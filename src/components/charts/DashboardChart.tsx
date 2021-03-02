import React from 'react'
import './dashboard-chart.css'
import { Line } from 'react-chartjs-2'

interface IProps {
    width: number
    height: number
    title: string
    data: any[]
    label: string[]
    labelName: string
    bgColor: string
}

interface IState {

}

export default class DashboardChart extends React.Component<IProps, IState> {

    private data: any;
    private options: any;

    constructor(props: IProps) {
        super(props)

        this.data = {
            labels: this.props.label,
            datasets: [{
               label: this.props.labelName,
               backgroundColor: this.props.bgColor,
               data: this.props.data,
            }]
        }

        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            title:{
              display:true,
              text: this.props.title,
              fontColor: "#F2E8E4",
              fontSize:20
            },
            legend:{
              display:true,
              position:'right',
              labels: {
                  fontColor: "#F2E8E4"
              }
            },
            scales: {
                xAxes: [{
                   stacked: true,
                   ticks: {
                       fontColor: "#F2E8E4"
                   }
                }],
                yAxes: [{
                   stacked: true,
                   gridLines: {
                      display: true,
                      color: "rgba(255,99,132,0.2)"
                   },
                   ticks: {
                    fontColor: "#F2E8E4"
                    }
                }]
             }
          }
    }


    render() {
        return (
            <div className="chart" style={{ width: this.props.width, height: this.props.height }}>
                <Line
                    data={this.data}
                    options={this.options}
                />
            </div>
        )
    }
}