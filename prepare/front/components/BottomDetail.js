import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction, withStyles } from "@material-ui/core";
import { useRouter } from "next/router";

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

const MainBottomNavigation = withStyles({
  root: {
    height: "68px",
    padding: "8px 12px",
  },
})(BottomNavigation);

const MainBottomNavigationAction = withStyles({
  root: {
    flex: "none",
    maxWidth: "unset",
    minWidth: "unset",
  },
})(BottomNavigationAction);

export default function BottomDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onLink = (href) => {
    router.replace(href);
  };

  return (
    <MainBottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
      <MainBottomNavigationAction
        className="pick_icon_button"
        label="찜하기 버튼"
        onClick={() => onLink("/")}
      />
      <MainBottomNavigationAction
        className="alarm_button"
        label="재입고 알림"
        onClick={() => onLink("/")}
      />
      <MainBottomNavigationAction
        className="base_button"
        showLabel={true}
        label="장바구니 담기"
        onClick={() => onLink("/")}
      />
    </MainBottomNavigation>
  );
}
