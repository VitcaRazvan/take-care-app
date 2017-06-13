/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Clickkk Count: {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps)(App);