import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Blog } from './Blog';

export class Blogs extends Component {
    displayName = Blogs.name

    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };
    }

    componentWillMount() {
        console.log("willmount")
        var username = localStorage.getItem("username");
        console.log("username: " + username)
        if (username == null) {
            this.props.history.push("/login");
        } else {
            fetch('api/Blog/Index', {
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("success: " + JSON.stringify(responseJson))
                    if (responseJson != null) {
                        this.setState({ data: responseJson })
                    } else {
                        this.setState({ errors: "Credentials seem to be wrong. Please try again or first register with us" })
                    }
                })
        }
    }

    render() {
        const { data } = this.state

        return (
            <div>
                <div className="row">
                    <div className="leftcolumn">
                        {
                            data.map(blg =>
                                <Blog key={blg.id} blogSummary={blg}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}
