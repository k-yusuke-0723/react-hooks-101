import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);

  // const threeCheckCount = () => {
  //   if(count % 3 === 0) {
  //     setCount(count / 3);
  //   } else {
  //     return
  //   }
  // }

  const divide3 = () => setCount(previousCount => {
    if(previousCount % 3 === 0) {
      return previousCount / 3
    } else {
      return previousCount
    }
  })
  
  return (
    <>
      <div>
        Count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>×2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App;
