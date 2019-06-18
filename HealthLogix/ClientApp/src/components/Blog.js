import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Blog extends Component {
    displayName = Blog.name

    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };
    }

    render() {
        const subject = this.props.blogSummary.subject;
        const imgSrc = this.props.blogSummary.image; // not working
        const desc = this.props.blogSummary.description;
        const id = this.props.blogSummary.id;
        const blogentry = this.props.blogSummary.blogEntry;
        const author = this.props.blogSummary.pseudonym;
        const date = this.props.blogSummary.dateInserted;
        console.log(blogentry)

        return (
            <div>
                <div id={id} className="card">
                    <h2>{subject}</h2>
                    <h3>{desc}</h3>
                    <h4>{date}</h4>
                    <div className="fakeimg">Image</div>
                    <br/>
                    <p><div dangerouslySetInnerHTML={{ __html: '' + blogentry }} /></p>
                </div>
            </div>
        );
    }
}
