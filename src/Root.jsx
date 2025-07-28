import { useEffect } from "react";
import App from "./App";
import { applyStoredTheme } from "./utils/theme";

function Root() {
  useEffect(() => {
    applyStoredTheme();
  }, []);

  return <App />;
}

export default Root;
