import React from "react"
import {Component} from "react"


export default class Login extends Component {
	constructor (props) {
 super(props)

	}
	render () {
		const {administration, loginUsername, loginPassword, loginUserNameHandleChange,
			loginPasswordHandleChange, Entrance}=this.props
		return (
			<div>
				{administration ?  <div> Добро пожаловать, администратор. </div> :
				<div>
					Логин:    <input type="text"  value={loginUsername} onChange={loginUserNameHandleChange} placeholder="Вася"/>
					Пароль:   <input type="text"  value={loginPassword} onChange={loginPasswordHandleChange} placeholder="Пароль"/>
					<button onClick={Entrance}> Войти </button>
			 </div>
				}
			</div>
		)
	}
}
