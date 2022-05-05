import React from "react";
import { UserContext } from "../App";

// one context value
function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div>UserContext value: {user}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
