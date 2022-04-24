import React, { useCallback, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemSecondaryAction } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import PropTypes from "prop-types";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reducers/user";

const iconEnum = {
  ArrowForwardIosIcon: <ArrowForwardIosIcon />,
  RemoveShoppingCartIcon: <RemoveShoppingCartIcon />,
};

const MyMenuItem = ({ item }) => {
  const { isLoggedIn, logOutError } = useSelector((state) => state.user); // redux data
  const dispatch = useDispatch();

  useEffect(() => {
    if (logOutError) {
      console.error(logOutError);
      // alert(logOutError);
    }
    if (!isLoggedIn) {
      console.log(isLoggedIn);
      // alert('로그아웃 되었습니다.');
      Router.push("/");
      // Router.replace(item.goto);
    }
  }, [isLoggedIn, logOutError]);

  const onClickItem = useCallback(
    (item) => (e) => {
      e.stopPropagation();

      if (item.type === "logout") {
        dispatch(logOut());
      } else if (item.type === "emptyCart") {
        if (window.confirm("장바구니를 비우시겠습니까?")) {
          console.log("비워유");
          alert("싹 비웠슈!");
        }
      } else {
        Router.push(item.goto);
      }
    },
    []
  );

  return (
    <ListItem onClick={onClickItem(item)}>
      <ListItemText primary={item.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={onClickItem(item)}>
          {iconEnum[item.icon]}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

MyMenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MyMenuItem;
