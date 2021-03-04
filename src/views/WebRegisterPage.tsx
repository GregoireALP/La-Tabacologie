import React from 'react'
import EmailAuth from '../utils/EmailAuth'

type UserData = {
    firstName: string
    lastName: string
    birthday: Date
    phone?: string
    email: string
    password: string
    password2: string
}

interface IProps {

}

interface IState {
    firebaseDataSend: UserData
}

export default class WebRegisterPage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            firebaseDataSend: {
                firstName: "",
                lastName: "",
                birthday: new Date(),
                phone: "",
                email: "",
                password: "",
                password2: ""
            }
        }
    }

    private EmailAuth = new EmailAuth()

    render() {
        return(
            <div className="web-register-page">

                <form>
                    <h1>Register</h1>
                    <input type="text" placeholder="Prénom" onChange={(e) => {this.state.firebaseDataSend.firstName = e.target.value}}/> <br></br><br></br>
                    <input type="text" placeholder="Nom" onChange={(e) => {this.state.firebaseDataSend.lastName = e.target.value}}/> <br></br><br></br>
                    <input type="datepicker" placeholder="Anniversaire" onChange={(e) => {this.state.firebaseDataSend.birthday = new Date(e.target.value)}}/> <br></br><br></br>
                    <input type="text" placeholder="Téléphone" onChange={(e) => {this.state.firebaseDataSend.phone = e.target.value}}/> <br></br><br></br>
                    <input type="text" placeholder="Email" onChange={(e) => {this.state.firebaseDataSend.email = e.target.value}}/> <br></br><br></br>
                    <input type="password" placeholder="Mot de Passe" onChange={(e) => {this.state.firebaseDataSend.password = e.target.value}}/> <br></br><br></br>
                    <input type="password" placeholder="Confirmation Mot de Passe" onChange={(e) => {this.state.firebaseDataSend.password2 = e.target.value}}/> <br></br><br></br>
                    <input type="button" value="Envoyer" onClick={() => {EmailAuth.registerWithEmailAndPassword(
                        this.state.firebaseDataSend.firstName,
                        this.state.firebaseDataSend.lastName,
                        this.state.firebaseDataSend.birthday,
                        this.state.firebaseDataSend.phone,
                        this.state.firebaseDataSend.email,
                        this.state.firebaseDataSend.password,
                        this.state.firebaseDataSend.password2,
                    )}}/>
                </form>
            </div>
        )
    }
}