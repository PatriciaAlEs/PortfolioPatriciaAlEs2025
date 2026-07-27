import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/theme.css";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./hooks/useGlobalReducer.jsx";
import { router } from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
