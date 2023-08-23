import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const withLoading = (WrappedComponent) => {
  class WithLoading extends React.Component {
    state = {
      isLoading: true,
      name:"Rinkal"
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false , name:"Test"});
      }, 5000);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          loading={this.state.isLoading}
          name={this.state.name}
        />
      );
    }
  }

  return WithLoading;
};

const MyComponent = ({ loading,name }) => (
  <div>
    {loading ? <p>Loading...</p> : <p>Hello, world!</p>}
    <p>{name}</p>
    
  </div>
);

const MyComponentWithLoading = withLoading(MyComponent);

ReactDOM.render(
  <MyComponentWithLoading />,
  document.getElementById("root")
);
