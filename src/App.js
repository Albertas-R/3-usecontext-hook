// 1. Create a context - export const UserContext = React.createContext()

// 2. Provide a contex value - <UserContext.Provider value={ context value }>

// 3. Consume the contex value - in ComponentF <UserContext.Consumer>{ hold of the value passed by the context (value in Provider) }</UserContext.Consumer>

import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

// one context value
// export const UserContext = React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <UserContext.Provider value={'Albertas'}>
//         <ComponentC />
//       </UserContext.Provider>
//     </div>
//   );
// }

// multiple context values
export const UserContext = React.createContext();
export const AnotherContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Albertas"}>
        <AnotherContext.Provider value={"Rinkevičius"}>
          <ComponentC />
        </AnotherContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
