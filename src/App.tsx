import React, { useState } from "react";

const App = () => {
  const [showHint, setShowHint] = useState(false);

  const handleShowHint = () => {
    setShowHint((prev) => !prev);
  };

  return (
    <>
      <h1>Test SSR Application with dev build and typescript</h1>
      <button onClick={handleShowHint}>Click me</button>
      {showHint && <span>Hint text</span>}
    </>
  );
};

export default App;
