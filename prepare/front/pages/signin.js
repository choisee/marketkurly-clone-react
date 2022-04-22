import React, { useCallback, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useInput from "../hooks/useInput";
import Router from "next/router";
import { logIn } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "48px",
    backgroundColor: "#5f0080",
    color: "#ffffff",
  },
  signupBtn: {
    height: "48px",
    backgroundColor: "#333",
    color: "#ffffff",
  },
}));

const SignIn = () => {
  const classes = useStyles();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const { logInLoading, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      // 로그인 후 첫화면으로 이동
      Router.replace("/");
    }
  }, [isLoggedIn]);

  const onSubmitSignIn = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(logIn({ email: email, password: password }));
    },
    [password],
  );

  const onClickSignup = useCallback(() => {
    Router.push("/signup");
  }, []);

  return (
    <>
      {logInLoading ? <LinearProgress /> : ""}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography style={{ color: "#333" }} component="h1" variant="h5">
            로그인
          </Typography>
          <form className={classes.form} onSubmit={onSubmitSignIn}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    autoFocus
                    value={email}
                    onChange={onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={onChangePassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}>
              로그인
            </Button>
          </form>
          <Button
            type="button"
            fullWidth
            variant="contained"
            className={classes.signupBtn}
            onClick={onClickSignup}>
            회원가입
          </Button>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
