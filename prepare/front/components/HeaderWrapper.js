import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ShortCut from "./ShortCut";
import Link from "next/link";
import { Typography } from "@material-ui/core";

const Type = {
  Main: "Main",
  Detail: "Detail",
};

const HeaderWrapper = ({ type, title }) => {
  return (
    <Fragment>
      <div className="header_wrapper">
        {(function () {
          if (type === Type.Main) {
            return (
              <div>
                {title ? (
                  <header className="header_no_logo">
                    <Link href="/">
                      <a>
                        <Typography variant="h5">{title}</Typography>
                      </a>
                    </Link>
                  </header>
                ) : (
                  <header className="header_logo" />
                )}

                <ShortCut isMain={true} />
              </div>
            );
          }
          if (type === Type.Detail) {
            return (
              <div>
                <header className="header_detail_logo" />
                <ShortCut isMain={true} />
              </div>
            );
          }
        })()}
      </div>
    </Fragment>
  );
};

HeaderWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default HeaderWrapper;
