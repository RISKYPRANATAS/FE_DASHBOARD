import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { store } from "./app/store.mjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";

axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </Router>
);
