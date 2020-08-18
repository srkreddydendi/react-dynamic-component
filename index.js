import React, { Component } from 'react';
import { render } from 'react-dom';
import Savings from './Savings';
import './styles/style.scss';
import A from './shared';

class App extends Component {
  render() {
    let items = [{title:'hello'}, {title:'world'}];
     let C = null; 
     switch (this.props.id) {
      case 1:
        C = A; //it is component reference, C must be from upper letter
        break;
      case 2:
        C = B; //it is component reference
        break;  
      default:
      	C = A;
        
    }

    return (
      <div>
      {items.map((item, index)=>{
    
        return <span key={index} ><C title={item.title} /></span>;
    
    })}
    </div>
    );
  }
}

render(<App />, document.getElementById('root'));
