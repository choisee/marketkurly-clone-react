import React from "react";

export default function ShortCut({ isMain }) {
	return (
		<>
			{isMain ? (
				<div className="header_shortcut">
					<a href="/" className="cart_count" role="button">
						<span className="num_count" id="cart_item_count"></span>
						<object
							className="cart_svg"
							type="image/svg+xml"
							data="https://res.kurly.com/kurly/ico/2021/cart_24_24_white_v3.svg"></object>
					</a>
				</div>
			) : (
				<div className="header_shortcut">
					<a href="/" className="link_back" role="button">
						<object
							className="link_svg"
							type="image/svg+xml"
							data="https://res.kurly.com/mobile/service/common/2006/ico_navi_back.svg?v=1"></object>
					</a>
					<a href="/" className="cart_count" role="button">
						<span className="num_count" id="cart_item_count"></span>
						<object
							className="cart_svg"
							type="image/svg+xml"
							data="https://res.kurly.com/kurly/ico/2021/cart_24_24_black.svg"></object>
					</a>
				</div>
			)}
		</>
	);
}
