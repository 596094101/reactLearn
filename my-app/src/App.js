import React, { Component } from 'react';
import Home from './homePage/home';
import { Provider, Consumer } from './contextFn';
import './index.css';

// const Context = React.createContext();
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;

const store = {
  user: {
    name: 'qwer',
    age: '27'
  }
}

const childHoc = Com => props => {
  return(
    <div className="border">
      <Com {...props} />
    </div>
  )
}

@childHoc
class Child extends Component {
  render() {
    return(
    <div className="border">child:-------{this.props.name}</div>
    )
  }
}
// function Child(props) {
//   console.log(props);
//   return(
//     <div>child:-------{props.user.name}</div>
//   )
// }


export default function App(props) {
  const ChildHoc = childHoc(Child);
  return(
      <div>
        lalalala
        <Provider value={store}>
          <Home />
        </Provider>
        <ChildHoc name="zcg" />
      </div>
    )
}