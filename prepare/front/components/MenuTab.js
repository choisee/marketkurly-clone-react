import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const MenuObj = [
  { id: 0, link: "/", title: "추천" },
  { id: 1, link: "/", title: "신상품" },
  { id: 2, link: "/", title: "베스트" },
  { id: 3, link: "/", title: "알뜰쇼핑" },
];

const MainTabs = withStyles({
  root: {
    backgroundColor: "#fff",
    padding: "0 10px",
  },
  indicator: {
    backgroundColor: "#5f0080",
    height: "3px",
    bottom: "1px",
  },
})(Tabs);

const MainTab = withStyles((theme) => ({
  root: {
    color: "#b6b6b6",
    fontWeight: "400",
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function LinkTab(props) {
  return (
    <MainTab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

export default function MenuTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="sticky">
        <MainTabs value={value} onChange={handleChange} variant="fullWidth" centered>
          {MenuObj.map((obj, i) => (
            <LinkTab key={i} label={obj.title} href={obj.link} {...a11yProps(i)} />
          ))}
        </MainTabs>
      </AppBar>
    </>
  );
}
