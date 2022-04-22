import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import MyMenuItem from "../components/MyMenuItem";
import { Avatar, Card, CardHeader } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import BottomWrapper from "../components/BottomWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import { dummyMyMenu } from "../data/DummyMyMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    marginTop: "60px",
    margin: theme.spacing(4, 0, 2),
    backgroundColor: "transparent",
  },
}));

const My = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <HeaderWrapper type="Main" title={"내 정보"} />
        <Container>
          <CssBaseline />
          <div>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.title}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <EmojiEmotionsIcon />
                    </Avatar>
                  }
                  title="user.name"
                  subheader="user.등급"
                />
              </Card>
              <div className={classes.demo}>
                <List>
                  {dummyMyMenu.menuList.map((c) => {
                    return <MyMenuItem key={c.id} item={c} />;
                  })}
                </List>
              </div>
            </Grid>
          </div>
        </Container>
        <BottomWrapper type="Main" />
      </div>
    </>
  );
};

export default My;
