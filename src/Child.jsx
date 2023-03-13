import React, { Component } from 'react';

class Child extends Component {
     state={
          username:"alok"
     }
     render() {
          return (
               <div>
                    {this.state.username}
               </div>
          );
     }
}

export default Child;
