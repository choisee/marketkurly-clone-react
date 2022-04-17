import React from "react";
import { isMobile } from "react-device-detect";
import MenuTab from "../components/MenuTab";
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import ShortCut from "../components/ShortCut";
import SectionWrapper from "../components/SectionWrapper";
import Bottom from "../components/Bottom";
import { dummySectionProduct_01, dummySectionProduct_02 } from "../data/DummySectionProducts";
import { bannerImg, webBannerImg } from "../data/DummyBanners";

function getLists() {
	return [
		{
			prdId: 0,
			bannerImg,
			webBannerImg,
			section: [dummySectionProduct_01, dummySectionProduct_02],
		},
	];
}

export default function Product() {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState(getLists()[0]);

	React.useEffect(() => {
		setLoading(false);
		return () => {};
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<div className="header_wrapper">
						<header className="header_logo">
							<ShortCut isMain={true} />
						</header>
					</div>
					<MenuTab />
					<Banner data={data} />
					{isMobile ? (
						<>
							<SectionWrapper data={data.section} />
						</>
					) : (
						<>
							<div className="section_list_wrapper">
								<SectionWrapper data={data.section} />
							</div>
						</>
					)}

					<div className="bottom_wrapper">
						<Bottom />
					</div>
				</div>
			)}
		</>
	);
}
