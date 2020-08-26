import React from 'react';
import './examples-css.css';

class ValidationError extends React.Component{

  constructor(props){
    super(props);
    this.state = {hasError: null};
  }

  render(){
    if(this.props.hasError){
        return 'Username or password is not valid';
    }
    return this.props.children;
  }
};

export default ValidationError;
