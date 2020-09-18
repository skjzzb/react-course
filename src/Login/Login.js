import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			err: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: '',
			err:''
		});

		//let emailval= /^(?=.*[0-9]);
		let regexp=/^[A-Z]/;
		let em = this.state.email;
		let pw = this.state.password;
		console.log(em)
		console.log(pw)
		let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (reg.test(em) == false) 
        {
            this.setState({ err: "Invalid Uername" });
			console.log("Invalid Email");
		
		}
		else if (pw.length < 6) {
			this.setState({ err: "Password length must be greater than 6" });
			console.log("Password length must be greater than 6");
		
		}
		else if (!regexp.test(pw.charAt(0))) {
			this.setState({ err: "Password length must be caontin first Uppercase letter" });
			console.log("Password length must be caontin first Uppercase letter");
		
		}else if (pw.search(/[!@#$%^&*]/)<0) {
			this.setState({ err: "Password must Contain spacial char" });
			console.log("Password must Contain spacial char");
		
		}else if (pw.search(/[0-9]/)<0) {
			this.setState({ err: "Password must Contain Numreic Digit" });
			console.log("Password must Contain Numreic Digit");
		

		}

		else{

			this.props.onRouteChange(2);
		}
		
	

	}

	valueFiled()
	{
		if(this.state.email!==""&&this.state.password!=="")
		{
			return( <input className="enable" type="submit" value="Login"  />)
		}
		else{
			return( <input className="disabl" type="submit" value="Login" disabled />)
		}
	}

	render() {

		return (
			<div className="container">
				<div className="login">
					<form onSubmit={this.displayLogin}>
						<h2>Login</h2>
						<div className="username">
							<label className="labl">Username</label>
							<input
								type="text"
								placeholder="ex. abc@gmail.com"
								value={this.state.email}
								onChange={this.update}
								name="email"
								required
							/>
						</div>

						<div className="password">
							<label className="labl">Password</label>
							<input
								type="password"
								placeholder="Password.."
								value={this.state.password}
								onChange={this.update}
								name="password"
								required
							/>
						</div>
						<div>
						<small className="err">{this.state.err}</small>
						</div>


						{this.valueFiled()}
					</form>

				</div>
			</div>
		);
	}
}

export default Login;
