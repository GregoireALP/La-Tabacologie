import React from "react"
import "./dashboard-context.css"

// SVGs
import UserSVG from "../../assets/svg/user.svg"

export default class DashboardContext extends React.Component {
    render() {
        return(
            <div className="dashboard-context">

                <div className="dashboard-context-header">

                    <p className="title">La Tabacologie - Dashboard</p>

                    <div className="dashboard-context-header-info">
                        <img src={UserSVG} alt="User" className="svg"/>
                    </div>

                </div>

                <div className="dashboard-context-body">
                    {this.props.children}
                </div>

            </div>
        )
    }
}