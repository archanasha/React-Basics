import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return (<button onClick={()=>this.clickme('hello')}>Hello</button>)
    }
    
    clickme(param){
        alert(param);
    }
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
 