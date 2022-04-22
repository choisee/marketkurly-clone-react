import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function ShortCut({ isMain }) {
  return (
    <>
      {isMain ? (
        <div className="header_shortcut">
          <Link href="/" className="cart_count">
            <object
              className="cart_svg"
              type="image/svg+xml"
              data="https://res.kurly.com/kurly/ico/2021/cart_24_24_white_v3.svg"></object>
            {/*<span className="num_count" id="cart_item_count">
                            <object
                            className="cart_svg"
                            type="image/svg+xml"
                            data="https://res.kurly.com/kurly/ico/2021/cart_24_24_white_v3.svg"></object>
                        </span>*/}
          </Link>
        </div>
      ) : (
        <div className="header_shortcut">
          <Link href="/" className="link_back">
            <object
              className="link_svg"
              type="image/svg+xml"
              data="https://res.kurly.com/mobile/service/common/2006/ico_navi_back.svg?v=1"></object>
          </Link>
          <Link href="/" className="cart_count">
            <span className="num_count" id="cart_item_count">
              <object
                className="cart_svg"
                type="image/svg+xml"
                data="https://res.kurly.com/kurly/ico/2021/cart_24_24_black.svg"></object>
            </span>
          </Link>
        </div>
      )}
    </>
  );
}

ShortCut.propTypes = {
  isMain: PropTypes.bool.isRequired,
};
