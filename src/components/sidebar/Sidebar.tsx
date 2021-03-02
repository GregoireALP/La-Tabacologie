import React from "react"
import { NavLink } from "react-router-dom"
import routes from "../../routes"
import './sidebar.css'

export default class Siderbar extends React.Component {

    render() {
        return(
            <div className="sidebar">

                <div className="sidebar-header">

                    <p className="sidebar-title">Menu</p>

                </div>

                <div className="sidebar-body">

                    {routes.map(function(data) {
                        return(<NavLink to={data.route}><p className="nav-element">{data.name}</p></NavLink>)
                    })}

                </div>

            </div>
        )
    }
}