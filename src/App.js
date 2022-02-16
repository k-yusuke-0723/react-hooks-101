import React, { useState } from 'react';

const App = props => {

  const [state, setState] = useState(props);
  const { name, price} = state;

  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      {/* 「...state」でオブジェクトを展開して、「price:」で上書きするプロパティを指定 */}
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>RESET</button>
      <br/>
      {/* 「...state」でオブジェクトを展開して、「name:」で上書きするプロパティを指定 */}
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
