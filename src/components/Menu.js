import React, {Component} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        meals: state.mealsReducer,
        happy: state.happinessReducer.happy
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
                <button type="button" onClick={() => this.changeHappiness()}>Click Me</button>
                <ul>
                    {this.props.meals.map((meal, i) => <li key={i}>{meal}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    changeHappiness() {
        this.props.dispatch({type: 'SAD'});
        this.props.dispatch({type: 'ADD', value: 'Ciccia fresca'});
    }
}

export default (connect(mapStateToProps)(Menu));