import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Demo extends React.Component {
  render() {
    return <h1>Hello AWS!</h1>;
  }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
