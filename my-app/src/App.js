import React, { Component, useState } from 'react';
// import Home from './homePage/home';
// import Layout from './layout/layout';
// import { Provider, Consumer } from './contextFn';
import FruitList from './firtList';
import AddFruit from './addFruit';
import './index.css';

// const Context = React.createContext();
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;

// const store = {
//   user: {
//     name: 'qwer',
//     age: '27'
//   }
// }

// const childHoc = Com => props => {
//   return(
//     <div className="border">
//       <Com {...props} />
//     </div>
//   )
// }

// @childHoc
// class Child extends Component {
//   render() {
//     return(
//     <div className="border">child:-------{this.props.name}</div>
//     )
//   }
// }
// function Child(props) {
//   console.log(props);
//   return(
//     <div>child:-------{props.user.name}</div>
//   )
// }


export default function App(props) {
  // const ChildHoc = childHoc(Child);
  // const fruitArr = ['香蕉', '苹果']
  const [fruits, setFriuits] = useState(['香蕉', '苹果']);
  // const [count, setCount] = useState(0)
  return(
      <div>
        {/* <Provider value={store}>
          <Home />
        </Provider>
        <Child name="zcg" /> */}
        {/* <Layout>
          <div>lalalalal</div>
        </Layout> */}
        <FruitList fruits={fruits} />
        {/* <button>添加</button> */}
        <AddFruit setFriuits={setFriuits} fruits={fruits} />
      </div>
    )
}