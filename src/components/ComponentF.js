import React from "react";
import { UserContext, AnotherContext } from "../App";

// one context value
// function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return <div>UserContext value: {user}</div>;
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

// multiple context values
function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <AnotherContext.Consumer>
              {(anotherValue) => {
                return (
                  <div>
                    UserContext value: {user}; AnotherContext value: {anotherValue}
                  </div>
                );
              }}
            </AnotherContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
