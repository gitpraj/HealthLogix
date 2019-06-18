import React, { Component } from 'react';

export class Register extends Component {
    displayName = Register.name

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

        fetch('api/User/Set', {
            method: 'POST',
            body: formData,
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("success: " + responseJson)
                if (responseJson != -1) {
                    this.props.history.push("/login");
                } else {
                    this.setState({ errors: "Error registering this account" })
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
            //         />

            //        <label ><b>Password</b></label>
            //        <input type="password" placeholder="Enter Password" required
            //            onChange={e => this.setState({ password: e.target.value })}
            //            value={this.state.password}
            //        />

            //        <button type="submit">Register</button>
            //        <span className="err"><a>{errors}</a></span>
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
                                            <button type="submit" className="btn btn-reg" id="regButton">Register</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <span className="err">{errors}</span><br />
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
