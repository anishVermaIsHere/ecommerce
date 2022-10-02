import React, { Component } from 'react';
import ErrorPage from './ErrorPage';
export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={
            error:{},
            isError:false
        }
    }
    componentDidCatch(error){
        this.setState({
            error:error,
            isError:true
        })
    }
  render() {
    return (
      <div>
        {this.state.isError?
        <ErrorPage code={500}/>
        :
        this.props.children
        }
      </div>
    )
  }
}
