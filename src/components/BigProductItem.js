import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import util from "../common/util";

const Item = ({ data }) => {
	return (
		<>
			<div data-index="0" className="big-one" tabIndex="-1" aria-hidden="false">
				<div>
					<div className="big-two" tabIndex="-1">
						<div>
							<div>
								<div className="big-four">
									<a href={"/productdetail?goodsno=" + data.no} className="big-three">
										<img
											className="big-five"
											src={data.list_image_url}
											alt={data.name}
											loading="lazy"
										/>
									</a>
									<div className="big-six">
										<button className="big-seven">
											<img
												src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"
												alt="상품 카트에 담기 아이콘"
											/>
										</button>
									</div>
								</div>
								<div className="big-eight">
									<p className="big-nine">{data.short_description}</p>
									<h3>
										<a href={"/productdetail?goodsno=" + data.no} className="big-ten">
											{data.name}
										</a>
									</h3>
									<div>
										<div className="big-ten-one">
											<div className="big-ten-two">{data.discount_rate}%</div>
											<div className="big-ten-three">
												{util.addComma(data.discounted_price)}
												<span>원</span>
											</div>
										</div>
										<div className="big-ten-four">{util.addComma(data.original_price)}원</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default function BigProductItem({ data }) {
	const [load, setLoad] = React.useState(true);

	React.useEffect(() => {
		setLoad(false);
		return () => {};
	}, []);

	return (
		<>
			{load ? (
				<Skeleton variant="rect" animation="wave" width={249} height={320} />
			) : (
				<Item data={data} />
			)}
		</>
	);
}
