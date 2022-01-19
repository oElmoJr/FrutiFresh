import * as React from "react";

import theme from "../../themes/theme";
import Header from "../../components/Header/header";

function App() {
  return (
    <div
      style={{
        background: theme.palette.background.default,
        height: "100vh",
      }}
    >
      <Header />
    </div>
  );
}
export default App;
