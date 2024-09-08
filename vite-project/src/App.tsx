import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    fetch("http://localhost:4000/").then((data) => {
      console.log(data);
    });
  }, []);
  return <div>APP</div>;
};

export default App;
