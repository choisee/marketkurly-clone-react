import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { isMobile } from "react-device-detect";
import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import ProductItem from "./ProductItem";
import BigProductItem from "./BigProductItem";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
	},
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)",
		padding: "10px",
	},
}));

export const Section = ({ data }) => {
	const cls = useStyles();
	const usehistory = useHistory();

	const setObject = (obj) => {
		usehistory.push("/");
	};

	return (
		<div className={cls.root}>
			{isMobile ? (
				<ImageList className={cls.gridList} cols={1.5}>
					{data.map((obj, i) => (
						<ImageListItem key={i} style={{ height: "500px" }} onClick={() => setObject(obj)}>
							<ProductItem data={obj} />
						</ImageListItem>
					))}
				</ImageList>
			) : (
				<Grid container justify="center" spacing={5}>
					{data.map((obj, i) => (
						<Grid key={i} item onClick={() => setObject(obj)}>
							<BigProductItem data={obj} />
						</Grid>
					))}
				</Grid>
			)}
		</div>
	);
};
