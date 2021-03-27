import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return (
        <div>
            <h1>Self help group management</h1>
        <button onClick={()=>this.clickme('hello')}>Hello</button>
        </div>
        )
    }
    clickme(param){
        alert(param);
    }
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
 