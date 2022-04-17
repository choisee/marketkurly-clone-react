import React from "react";
import { AppBar, Tab, Tabs, withStyles } from "@material-ui/core";

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const DetailTabs = withStyles((theme) => ({
	root: {
		display: "flex",
		padding: "0 16px",
		backgroundColor: "#fff",
		borderBottom: "1px solid #ddd",
	},
}))((props) => <Tabs {...props} />);

const DetailLinkTab = withStyles({
	selected: {
		fontWeight: "600",
		borderBottom: "3px solid #5f0080",
		color: "#5f0080",
	},
	wrapper: {
		display: "block",
		position: "relative",
		top: "1px",
		height: "43px",
		fontSize: "16px",
		lineHeight: "43px",
		color: "#666",
		textAlign: "center",
		whiteSpace: "nowrap",
	},
})(LinkTab);

function a11yProps(index) {
	return {
		id: `nav-tab-${index}`,
		"aria-controls": `nav-tabpanel-${index}`,
	};
}

export default function DetailMenu({ value, data, handleTabChange }) {
	const onChangeTab = (event, newValue) => {
		handleTabChange(newValue); // todo
	};

	return (
		<AppBar position="sticky">
			<DetailTabs
				variant="fullWidth"
				value={value}
				onChange={onChangeTab}
				aria-label="nav tabs example">
				<DetailLinkTab label="상품설명" href="/product" {...a11yProps(0)} />
				<DetailLinkTab
					label={"후기 " + data.review.children.length}
					href="/basket"
					{...a11yProps(1)}
				/>
				<DetailLinkTab label="문의" href="/basket" {...a11yProps(2)} />
			</DetailTabs>
		</AppBar>
	);
}
