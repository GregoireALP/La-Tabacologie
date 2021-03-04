import React from 'react'
import "./index.css"
import WebLoginPage from './views/WebLoginPage'
import WebRegisterPage from './views/WebRegisterPage'

export default class LaTabacologieWeb extends React.Component {
    render() {
        return(
            <div className="la-tabacologie_web">
                <WebRegisterPage />
            </div>
        )
    }
}