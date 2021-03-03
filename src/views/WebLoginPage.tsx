import React from 'react'
import GoogleAuth from '../utils/GoogleAuth'

export default class WebLoginPage extends React.Component {

    private GoogleAuth = new GoogleAuth()

    render() {

        return (
            <div className="web-login-page">
                <input type="button" value="Se Connecter Google" onClick={() => {GoogleAuth.signInWithGoogle()}}/>
                <input type="button" value="Se Deconnecter Google" onClick={() => {GoogleAuth.signOutGoogle()}}/>
            </div>
        )
    }
}