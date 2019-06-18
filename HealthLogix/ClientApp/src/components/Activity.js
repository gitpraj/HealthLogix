import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Blog } from './Blog';


function BarGroup(props) {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 10

    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5

    return <g className="bar-group">
        <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
        <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
        <text className="value-label" x={width - 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
}

export class Activity extends Component {
    displayName = Activity.name

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Jan', value: 0 },
                { name: 'Feb', value: 0 },
                { name: 'Mar', value: 0 },
                { name: 'Apr', value: 0 },
                { name: 'May', value: 0 },
                { name: 'Jun', value: 0 },
                { name: 'Jul', value: 0 },
                { name: 'Aug', value: 0 },
                { name: 'Sep', value: 0 },
                { name: 'Oct', value: 0 },
                { name: 'Nov', value: 0 },
                { name: 'Dec', value: 0 }
            ],
            loading: true,
            graph: []
        };
        this.createJSONForGraph = this.createJSONForGraph.bind(this);
        this.addToGraphData = this.addToGraphData.bind(this);
    }

    componentWillMount() {
        var username = localStorage.getItem("username");
        if (username == null) {
            this.props.history.push("/login");
        } else {
            fetch('api/Blog/Index', {
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson != null) {
                        this.setState({ graph: responseJson })
                        this.createJSONForGraph(this.state.graph)
                    } else {
                        this.setState({ errors: "Credentials seem to be wrong. Please try again or first register with us" })
                    }
                })
        }
    }

    addToGraphData(month) {
        const { data } = this.state;
        var temp = data;
        switch (month) {
            case 1:
                temp[month - 1].value = temp[month-1].value + 1;
                break;
            case 2:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 3:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 4:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 5:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 6:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 7:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 8:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 9:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 10:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 11:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
            case 12:
                temp[month - 1].value = temp[month - 1].value + 1;
                break;
        }

        this.setState({data: temp})
    }
    
    createJSONForGraph(data) {
        //console.log("data: " + JSON.stringify(data))
        for (var i = 0; i < data.length; i++) {
            var dt = new Date(data[i].dateInserted)
            var month = dt.getMonth() + 1;
            this.addToGraphData(month)
        }
    }

    render() {
        let barHeight = 20;
        let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
            <BarGroup d={d} barHeight={barHeight} />
        </g>)

        return <svg width="800" height="500" >
            <g className="container" transform="translate(100,60)">
                {barGroups}
            </g>
        </svg>
    }
}
