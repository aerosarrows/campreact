import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponents';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null 
        };
    }

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

    render () {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div className="col-d-5 m-1" key={campsite.id}>
                    <Card onClick = {() =>this.onCampsiteSelect(campsite)} >
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
            
        })

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div> 
                <CampsiteInfo campsite={this.state.selectedCampsite} />
            </div>
        )
    }
}


class ExampleParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 333
        }
    }
    render () {
        return <ExampleChildComponent number={this.state.number} />;
    }
}


class ExampleChildComponent extends Component {
    render () {
        return <div>{this.props.number}</div>
    }
}
export default Directory;