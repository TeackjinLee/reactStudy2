import React, { useState } from 'react';
// import Info from './info';
import Counter from './Counter_reduce'

const App = () => {
  return <Counter />
}

// function App() {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}>
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// }

export default App;
