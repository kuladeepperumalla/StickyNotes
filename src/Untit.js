
// if state = 4 show bold-text else paragraph

// let state = 4
// old text
// state = 4? "B"
import React, { Component } from  'react';

class Terenary extends Component {


    constructor(props){
            super(props);
            this.state = {
                initialState : 4
            }
    }



    render() {
        return(
            <div>

                {this.state.initialState === 5?
                        <h1>Bold Text</h1> : <p>paragraph</p>
            }
                
                
            </div>
        )
    }

}
export default Terenary;