import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import util from "../common/util";

const Item = ({ data }) => {
	return (
		<>
			<div spacing="16" className="one">
				<div>
					<div className="two">
						<div className="three">
							<div className="four">
								<div className="five">
									<a href={"/productdetail?goodsno=" + data.no} className="six">
										<img
											className="seven"
											src={data.list_image_url}
											alt={data.name}
											loading="lazy"
										/>
										<div className="css-8msfms e14imjkq0"></div>
									</a>
								</div>
							</div>
							<div className="eight">
								<button className="nine">
									<img
										className="ten"
										src="https://res.kurly.com/mobile/service/goods/2010/ico_cart.svg"
										alt="상품 카트에 담기 아이콘"
									/>
								</button>
							</div>
						</div>
						<a className="ten-one" href={"/productdetail?goodsno=" + data.no}>
							<div className="ten-two">{data.short_description}</div>
							<h3 className="ten-three">{data.name}</h3>
							<div className="ten=four">
								<div>
									<div className="ten-five">
										<div className="ten-six">{data.discount_rate}%</div>
										<div className="ten-seven">
											{util.addComma(data.discounted_price)}
											<span>원</span>
										</div>
									</div>
									<div className="ten-eight">{util.addComma(data.original_price)}원</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default function ProductItem({ data }) {
	const [load, setLoad] = React.useState(true);

	React.useEffect(() => {
		setLoad(false);
		return () => {};
	}, []);

	return (
		<>
			{load ? (
				<Skeleton variant="rect" animation="wave" width={228} height={296} />
			) : (
				<Item data={data} />
			)}
		</>
	);
}
