import React, { Fragment } from "react";
import BottomDetail from "./BottomDetail";
import Bottom from "./Bottom";
import PropTypes from "prop-types";

const Type = {
  Main: "Main",
  Detail: "Detail",
  // My: 'My',
};

const BottomWrapper = ({ type }) => {
  return (
    <Fragment>
      <div className="bottom_wrapper">
        {(function () {
          if (type === Type.Main) return <Bottom />;
          if (type === Type.Detail) return <BottomDetail />;
          // if (type === Type.My) return (<Bottom/>);
        })()}
      </div>
    </Fragment>
  );
};

BottomWrapper.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BottomWrapper;
