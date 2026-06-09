import { Box, Paper, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { auth } from "../../firebase";
import { guestNavItems } from "../../navigation";
import type { LoginRegisterPageProps } from "./LoginRegisterPage.types";
import "./LoginRegisterPage.styles.css";

type AuthMode = "login" | "register";
type UserRole = "owner" | "mechanic";

const getModeFromSearch = (mode: string | null): AuthMode =>
  mode === "register" ? "register" : "login";

const getAuthErrorMessage = (error: unknown) => {
  if (!(error instanceof FirebaseError)) {
    return "Something went wrong. Please try again.";
  }

  switch (error.code) {
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Email or password is incorrect.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/operation-not-allowed":
      return "This sign-in provider is not enabled for this Firebase project.";
    case "auth/popup-blocked":
      return "The Google sign-in popup was blocked by your browser.";
    case "auth/popup-closed-by-user":
      return "Google sign-in was cancelled.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized for Firebase sign-in.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    default:
      return "Authentication failed. Please try again.";
  }
};

export default function LoginRegisterPage(_props: LoginRegisterPageProps) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<AuthMode>(
    getModeFromSearch(searchParams.get("mode")),
  );
  const [role, setRole] = useState<UserRole>("owner");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isRegister = mode === "register";

  const handleModeChange = (nextMode: AuthMode) => {
    setMode(nextMode);
    setSearchParams({ mode: nextMode });
    setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      if (isRegister) {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        if (name.trim()) {
          await updateProfile(credential.user, {
            displayName: name.trim(),
          });
        }

        navigate("/my-vehicles");
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/my-vehicles");
    } catch (error) {
      setErrorMessage(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate("/my-vehicles");
    } catch (error) {
      setErrorMessage(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell navItems={guestNavItems}>
      <Box
        className="login-register-page"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Paper elevation={0} className="login-register-page__card">
          <Typography component="h1" className="login-register-page__title">
            ServiceLog
          </Typography>
          <div
            className="login-register-page__tabs"
            role="tablist"
            aria-label="Authentication mode">
            <button
              type="button"
              className={
                mode === "login"
                  ? "login-register-page__tab login-register-page__tab--active"
                  : "login-register-page__tab"
              }
              onClick={() => handleModeChange("login")}
              aria-pressed={mode === "login"}>
              Log In
            </button>
            <button
              type="button"
              className={
                mode === "register"
                  ? "login-register-page__tab login-register-page__tab--active"
                  : "login-register-page__tab"
              }
              onClick={() => handleModeChange("register")}
              aria-pressed={mode === "register"}>
              Sign Up
            </button>
          </div>
          <form className="login-register-page__form" onSubmit={handleSubmit}>
            {isRegister ? (
              <div className="login-register-page__group">
                <span className="login-register-page__label">Role</span>
                <div className="login-register-page__role">
                  <button
                    type="button"
                    className={
                      role === "owner"
                        ? "login-register-page__role-button login-register-page__role-button--active"
                        : "login-register-page__role-button"
                    }
                    onClick={() => setRole("owner")}
                    aria-pressed={role === "owner"}>
                    Owner
                  </button>
                  <button
                    type="button"
                    className={
                      role === "mechanic"
                        ? "login-register-page__role-button login-register-page__role-button--active"
                        : "login-register-page__role-button"
                    }
                    onClick={() => setRole("mechanic")}
                    aria-pressed={role === "mechanic"}>
                    Mechanic
                  </button>
                </div>
              </div>
            ) : null}
            <button
              type="button"
              className="login-register-page__google"
              disabled={isSubmitting}
              onClick={handleGoogleSignIn}>
              <FcGoogle className="login-register-page__google-icon" />
              Continue with Google
            </button>
            <div className="login-register-page__divider">
              <span>or use email</span>
            </div>
            {isRegister ? (
              <div className="login-register-page__group">
                <label
                  className="login-register-page__label"
                  htmlFor="auth-name">
                  Name
                </label>
                <input
                  id="auth-name"
                  className="login-register-page__input"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required={isRegister}
                />
              </div>
            ) : null}
            <div className="login-register-page__group">
              <label
                className="login-register-page__label"
                htmlFor="auth-email">
                Email
              </label>
              <input
                id="auth-email"
                className="login-register-page__input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="login-register-page__group">
              <label
                className="login-register-page__label"
                htmlFor="auth-password">
                Password
              </label>
              <input
                id="auth-password"
                className="login-register-page__input"
                type="password"
                placeholder="********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            {errorMessage ? (
              <p className="login-register-page__error">{errorMessage}</p>
            ) : null}
            <button
              type="submit"
              className="login-register-page__submit"
              disabled={isSubmitting}>
              {isSubmitting
                ? "Please wait..."
                : isRegister
                  ? "Sign Up"
                  : "Log In"}
            </button>
          </form>
        </Paper>
      </Box>
    </PageShell>
  );
}
