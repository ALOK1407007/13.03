import React, { Component } from 'react';
import Child from './Child';
import Parent from './Parent';
class App extends Component {
     constructor(){
          super()
             this.state={
               username:"alok",password:123
             }
     }

     render() {
          
          return (
               <div>
                   <>
                     {this.state.username}
                     {this.state.password}
                   </> 
                   <Child />
                   <Parent />
               </div>
          );
     }
}

export default App;
