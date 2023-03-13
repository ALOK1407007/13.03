import React, { Component } from 'react';

class Parent extends Component {
     state={
          subject:"React js",
          skills:["HTML","CSS","JAVASCRIPT"]
     }
     render() {
          return (
               <div>
                    <h1>{this.state.subject}</h1>
                    <ul>
                         {this.state.skills.map((x)=>{
                              return <li>{x}</li>
                         })}
                    </ul>
               </div>
          );
     }
}

export default Parent;
