import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "resources/css/market.css";
import "resources/css/common.css";
import "resources/css/productdetail.css";
import "overlayscrollbars/css/OverlayScrollbars.css";

ReactDOM.render(<App />, document.getElementById("root"));
