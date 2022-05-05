// using useContext Hook

// 1. import useContext from React
// 2. import necessary context
// 3. call useContext() function passing in the context as it's arguments

import React, { useContext } from "react";
import ComponentF from "./ComponentF";

import { UserContext, AnotherContext } from "../App";

// one context value
// function ComponentE() {
//   return (
//     <div>
//       <ComponentF />
//     </div>
//   );
// }

// multiple context values using useContext Hook
function ComponentE() {
  const user = useContext(UserContext);
  const anotherContext = useContext(AnotherContext);

  return (
    <div>
      {user} {anotherContext}
    </div>
  );
}

export default ComponentE;
