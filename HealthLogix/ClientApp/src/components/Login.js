import React, { Component } from 'react';

export class Login extends Component {
    displayName = Login.name

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(this.state)
        console.log("submit clicked")
        e.preventDefault();

        var formData = new FormData(e.target);
        formData.append('Username', this.state.username);
        formData.append('Password', this.state.password);
        console.log(formData)

        fetch('api/User/Get?username='+this.state.username + '&password=' + this.state.password, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("success: " + responseJson)
                if (responseJson != -1) {
                    localStorage.setItem("username", this.state.username);
                    localStorage.setItem("password", this.state.password);
                    this.props.history.push("/home");
                } else {
                    this.setState({ errors: "Credentials seem to be wrong. Please try again or first register with us" })
                }
            })
    }

    render() {
        const errors = this.state.errors;

        return (
            //<form onSubmit={this.handleSubmit}>

            //    <div className="container login">
            //        <label ><b>Username</b></label>
            //        <input type="text" placeholder="Enter Username" required
            //            onChange={e => this.setState({ username: e.target.value })}
            //            value={this.state.username}
            //        />

            //        <label ><b>Password</b></label>
            //        <input type="password" placeholder="Enter Password" required
            //            onChange={e => this.setState({ password: e.target.value })}
            //            value={this.state.password}
            //        />

            //        <button type="submit">Login</button>
            //        <span className="err">{errors}</span><br/>
            //        <span className="psw"><a href="#">Register Please</a></span>
            //    </div>
            //</form>


            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="col-lg-12" id="error">
                        <label id="errorlabel"></label>
                    </div>
                    <div className="row" id="UserReg">

                        <div className="">
                            <div className="container">
                                <div className="reg-body">


                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <input value=""
                                                    name="subject"
                                                    type="text"
                                                    className="form-control input-w-60"
                                                    id="username"
                                                    placeholder="Username"
                                                    onChange={e => this.setState({ username: e.target.value })}
                                                    value={this.state.username}
                                                    required />
                                                <span className="help-block" id=""></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <input value=""
                                                    name="subject"
                                                    type="text"
                                                    className="form-control input-w-60"
                                                    id="password"
                                                    placeholder="Password"
                                                    onChange={e => this.setState({ password: e.target.value })}
                                                    value={this.state.password}
                                                    required />
                                                <span className="help-block" id=""></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <button type="submit" className="btn btn-reg" id="regButton">Login</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <span className="err">{errors}</span><br />
                                            <span className="psw"><a href="/register">Register Please</a></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
