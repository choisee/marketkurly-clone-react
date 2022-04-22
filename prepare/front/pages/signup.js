import React, { useCallback, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useInput from "../hooks/useInput";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP } from "../reducers/user";
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
}));

const SignUp = () => {
  const classes = useStyles();

  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");

  const { signUpLoading, isSignUpDone, signUpError } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const onSubmitSignUp = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      return dispatch({
        type: SIGN_UP,
        data: {
          email,
          name,
          password,
        },
      });
    },
    [password, passwordCheck, term]
  );

  useEffect(() => {
    if (isSignUpDone) {
      Router.replace("/signin");
    }
  }, [isSignUpDone]);

  useEffect(() => {
    if(signUpError){
      alert(signUpError);
    }
  },[signUpError]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password, passwordCheck]
  );

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      {signUpLoading ? <LinearProgress /> : ""}
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography style={{ color: "#333" }} component="h1" variant="h5">
            회원가입
          </Typography>
          <form className={classes.form} onSubmit={onSubmitSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={onChangeEmail}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={onChangeName}
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordCheck"
                  label="비밀번호 확인"
                  type="password"
                  id="passwordCheck"
                  autoComplete="current-password"
                  value={passwordCheck}
                  onChange={onChangePasswordCheck}
                />
                {passwordError && (
                  <div style={{ color: "#5f0080" }}>비밀번호가 일치하지 않습니다.</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" checked={term} onChange={onChangeTerm} />
                  }
                  label="이용약관 동의합니다."
                />
                {termError && <div style={{ color: "#5f0080" }}>약관에 동의하셔야 합니다.</div>}
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" className={classes.submit}>
              가입하기
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
