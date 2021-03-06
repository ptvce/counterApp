import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
       // const {onDelete, onInCreament , onReset, counters} = this.props;

        return ( <div>
            <button 
              onClick={this.props.onReset} 
              className="btn-primary btn-sm m-2">
                  Reset</button>
            {this.props.counters.map(counter => (
                <Counter 
                  key={counter.id} 
                  onDelete={this.props.onDelete} 
                  onIcreament={this.props.onIcreament} 
                  onDecrement={this.props.onDecrement}
                  counter={counter}
                  />
            ))}
        </div> 
        );
    }
}
 
export default Counters;