import React from "react";

export default function TabProductInfo() {
	return (
		<div className="goods_wrap">
			<div className="goods_item">
				<div className="pic">
					<img src="//img-cf.kurly.com/shop/data/goodsview/20220224/gv40000283445_1.jpg" />
				</div>
			</div>
			<div className="goods_item">
				<div className="context last">
					<div className="pic">
						<img src="//img-cf.kurly.com/shop/data/goodsview/20220224/gv10000283446_2.jpg" />
					</div>
				</div>
			</div>
			<div className="goods_item last">
				<p className="pic">
					<img
						src="//img-cf.kurly.com/shop/data/goodsview/20220224/gv20000283447_2.jpg"
						className="thumbZoom"
						data-zoom="0"
					/>
				</p>
			</div>
		</div>
	);
}
