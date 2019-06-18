import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleLogout() {
        this.setState({ show: false });
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        var username = localStorage.getItem("username");
        if (username == null) {
            this.setState({ auth: false });
            this.props.history.push("/login");
        } else {
            this.setState({ auth: true });
        }

    }

    componentWillMount() {
        var username = localStorage.getItem("username");
        if (username == null) {
            this.setState({ auth: false });
            this.props.history.push("/login");
        } else {
            this.setState({ auth: true });
        }
    }

    render() {
        return (
            <div>
                <Button className="logout_button" onClick={this.handleShow}>
                    You Sure??
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>
                            No
                        </Button>
                        <Button onClick={this.handleLogout}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
        );
    }
}