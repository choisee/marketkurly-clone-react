import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "../resources/css/market.css";
import "../resources/css/common.css";
import "../resources/css/productdetail.css";
import "overlayscrollbars/css/OverlayScrollbars.css";

import wrapper from "../store/configureStore";

const CloneMarket = ({ Component }) => {
  return (
    <>
      <Head>
        <title>CloneMarket</title>
      </Head>
      <Component />
    </>
  );
};

CloneMarket.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(CloneMarket);
