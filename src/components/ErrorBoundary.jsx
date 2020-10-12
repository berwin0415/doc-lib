import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(err) {
    this.setState({ error: err });
  }

  render() {
    if (this.state.hasError) {
      console.log(this.state.error);
      return <div>error page</div>;
    }
    return this.props.children;
  }
}
