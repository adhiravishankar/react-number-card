import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {App} from "./app";

const root = createRoot(document.getElementById('root'));

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
root.render(app);
