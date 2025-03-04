import React from "react";

import MetadataUpload from "./components/MetadataUpload";
import HowDoesItWork from "./components/HowDoesItWork";
import PayForUse from "./components/PayForUse";
import ItsCustomizable from "./components/ItsCustomizable";

const App: React.FC = () => {
  return (
    <>
      <MetadataUpload />
      <HowDoesItWork />
      <PayForUse />
      <ItsCustomizable />
    </>
  );
};

export default App;
