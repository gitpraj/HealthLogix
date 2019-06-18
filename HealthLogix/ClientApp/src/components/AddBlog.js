import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class AddBlog extends Component {
    displayName = AddBlog.name

    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            desc: "",
            image: "",
            author: "",
            blog: "",
            errors: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        console.log("willmount")
        var username = localStorage.getItem("username");
        console.log("username: " + username)
        if (username == null) {
            this.setState({ auth: false });
            this.props.history.push("/login");
        } else {
            this.setState({ auth: true });
        }
    }

    handleSubmit(e) {
        console.log(this.state)
        console.log("submit clicked")
        e.preventDefault();

        
        

        var formData = new FormData(e.target);
        formData.append('Subject', this.state.subject);
        formData.append('Description', this.state.desc);
        formData.append('Image', this.state.image);
        formData.append('Pseudonym', this.state.author);
        formData.append('BlogEntry', this.state.blog);
        console.log(formData)

        fetch('api/Blog/Create', {
            method: 'POST',
            body: formData,
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("success: " + responseJson)
                if (responseJson != -1) {
                    this.setState({ errors: "Blog added Successfully" })
                } else {
                    this.setState({ errors: "Error adding the blog" })
                }
            })
    }

    validate(subject, desc, image, blogentry) {
        // true means invalid, so our conditions got reversed
        const isEnabled = subject.length > 0 && desc.length > 0 && image.length > 0 && blogentry.length > 0;
        return isEnabled;
    }

    render() {
        const errors = this.state.errors;
        var isEnabled = this.validate(this.state.subject, this.state.desc, this.state.image,
            this.state.blog)
        console.log("isEnabled: " + isEnabled)

        return (
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
                                                id="subject"
                                                placeholder="Subject"
                                                onChange={e => this.setState({ subject: e.target.value })}
                                                value={this.state.subject}
                                                required/>
                                            <span className="help-block" id="newfnameerror"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input value=""
                                                name="desc"
                                                type="text"
                                                className="form-control input-w-60"
                                                id="desc"
                                                placeholder="Description"
                                                onChange={e => this.setState({ desc: e.target.value })}
                                                value={this.state.desc} required/>
                                            <span className="help-block" id="newlnameerror"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input value=""
                                                name="image"
                                                type="text"
                                                className="form-control input-w-60"
                                                id="image"
                                                placeholder="Image"
                                                onChange={e => this.setState({ image: e.target.value })}
                                                value={this.state.image} required/>
                                            <span className="help-block" id="newlnameerror"></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input value=""
                                                name="author"
                                                type="text"
                                                className="form-control input-w-60"
                                                id="author"
                                                placeholder="Author"
                                                onChange={e => this.setState({ author: e.target.value })}
                                                value={this.state.author}/>
                                            <span className="help-block" id="newphoneerror"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <textarea className="form-control input-w-60" id="comments" rows="4" cols="50" placeholder="Blog" onChange={e => this.setState({ blog: e.target.value })}
                                                value={this.state.blog} required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                            <button type="submit" disabled={!isEnabled} className="btn btn-reg" id="regButton">Add Blog</button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                            <span><h3 className="blog_success">{errors}</h3></span>
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
