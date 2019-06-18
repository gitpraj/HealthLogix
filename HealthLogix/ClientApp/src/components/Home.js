import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Blog } from './Blog';

export class Home extends Component {
  displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };
    }

    componentWillMount() {
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

    render() {
        const { data } = this.state

       return (
          <div>
                       <div className="row">
                           <div className="leftcolumn">
                                   {
                                       data.map(blg =>
                                           <Blog key={blg.id} blogSummary={blg} />)
                                    }
                           </div>
                           <div className="rightcolumn">
                               <div className="card">
                                   <h2>About Me</h2>
                                   <div className="fakeimg">Image</div>
                                   <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                               </div>
                               <div className="card">
                                   <h3>Popular Post</h3>
                                   <div className="fakeimg">Image</div><br/>
                                    <div className="fakeimg">Image</div><br/>
                                    <div className="fakeimg">Image</div>
                                        
                                    <div className="card">
                                        <h3>Follow Me</h3>
                                        <p>Some text..</p>
                                    </div>
                                    
                               </div>
                           </div> 
                       </div>
          </div>
    );
  }
}
