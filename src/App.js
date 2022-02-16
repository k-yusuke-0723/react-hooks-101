import React, { useState, useEffect } from 'react';

const App = props => {

  const [state, setState] = useState(props);
  const { name, price} = state;

  // useEffectはレンダリングの後に実行されている
  useEffect(() => {
    console.log('コンポーネントがレンダリングされたときや、コンポーネントの値が更新された場合に実行されている');
  });

  // 第二引数に空の配列を渡すことで、最初にレンダリングされた時のみ実行されている
  useEffect(() => {
    console.log('最初のレンダリング時のみ実行される');
  }, []);

  // 特定のパラメーターが描画された時や変更された場合のみ実行される
  useEffect(() => {
    console.log('名前が描画or更新された場合のみ実行される');
  }, [name]);

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
