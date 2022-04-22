import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction, withStyles } from "@material-ui/core";
import { Home, Menu, Search, Person } from "@material-ui/icons";
import shortId from "shortid";
import Router from "next/router";
import { useSelector } from "react-redux";

const iconEnum = {
  HomeIcon: <Home />,
  MenuIcon: <Menu />,
  SearchIcon: <Search />,
  PersonIcon: <Person />,
};

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  unfocused: {
    color: "#333",
    fontSize: "10px",
  },
  focused: {
    color: "#5f0080",
  },
});

const MainNavigationAction = withStyles({
  root: {
    paddingTop: "0 !important",
  },
})(BottomNavigationAction);

const sampleData = {
  footerMenuList: [
    {
      id: shortId.generate(),
      label: "홈",
      icon: "HomeIcon",
      value: "home",
    },
    {
      id: shortId.generate(),
      label: "카테고리",
      icon: "MenuIcon",
      value: "",
      // value: "category", // todo
    },
    {
      id: shortId.generate(),
      label: "검색",
      icon: "SearchIcon",
      value: "",
      // value: "search", // todo
    },
    {
      id: shortId.generate(),
      label: "마이",
      icon: "PersonIcon",
      value: "my",
    },
  ],
};

export default function Bottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const { isLoggedIn } = useSelector((state) => state.user); // redux data

  const onLink = (href) => {
    if (href === "/my" && !isLoggedIn) {
      Router.push("/signin");
    } else {
      Router.push(href);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
      {sampleData.footerMenuList.map((c) => {
        return (
          <MainNavigationAction
            key={c.id}
            className={classes.unfocused}
            value={c.value}
            icon={iconEnum[c.icon]}
            onClick={() => onLink("/" + (c.value === "home" ? "" : c.value))}
          />
        );
      })}
    </BottomNavigation>
  );
}
