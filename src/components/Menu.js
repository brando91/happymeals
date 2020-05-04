import React, {Component} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        meals: state.meals,
        happy: state.happy
    }
};

class Menu extends Component {
    
    constructor(props) {
        super(props);
    }    
    
    render() {
        let title = this.props.happy ? "Happy menu" : "Sad menu";
        
        return (
            <React.Fragment>
                <h1>{title}</h1>
                <ul>
                    {this.props.meals.map((meal, i) => <li key={i}>{meal}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}

export default (connect(mapStateToProps)(Menu));