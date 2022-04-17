import React from "react";

export default function TabProductReview({ data }) {
	return (
		<>
			{data.children.length ? (
				<section className="review_wrap">
					<div id="goodsReview" className="goods_board">
						<ul className="list">
							{data.children.map((obj, i) => (
								<li key={i} className={i === data.children.length - 1 ? "last" : ""}>
									<div className="tit_review">
										<div className="subject"> {obj.content} </div>
										<div className="writer grade_comm">
											<span
												className={obj.userType === 5 ? "ico_grade grade5" : "ico_grade grade3"}>
												{obj.userTypeName}
											</span>
											<span className="name">{obj.userId}</span>
											<span className="info">
												<span className="time">{obj.createDate}</span>
											</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>
			) : (
				<section className="review_wrap">
					<div className="noreview t_grey">작성된 리뷰가 없습니다.</div>
				</section>
			)}
		</>
	);
}
