import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { isMobile } from "react-device-detect";
import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import ProductItem from "./ProductItem";
import BigProductItem from "./BigProductItem";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
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

  return (
    <div className={cls.root}>
      {isMobile ? (
        <ImageList className={cls.gridList} cols={1.5}>
          {data.map((obj, i) => (
            <ImageListItem key={i} style={{ height: "500px" }} >
              <ProductItem data={obj} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Grid container justifyContent="center" spacing={5}>
          {data.map((obj, i) => (
            <Grid key={i} item >
              <BigProductItem data={obj} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

Section.propTypes = {
  data: PropTypes.array.isRequired,
};
