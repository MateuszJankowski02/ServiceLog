import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { navItems } from "../../navigation";
import type { LoginRegisterPageProps } from "./LoginRegisterPage.types";
import "./LoginRegisterPage.styles.css";

type AuthMode = "login" | "register";
type UserRole = "owner" | "mechanic";

export default function LoginRegisterPage(_props: LoginRegisterPageProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  const [role, setRole] = useState<UserRole>("owner");
  const isRegister = mode === "register";

  return (
    <PageShell navItems={navItems}>
      <Stack
        className="login-register-page"
        alignItems="center"
        justifyContent="center">
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
              onClick={() => setMode("login")}
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
              onClick={() => setMode("register")}
              aria-pressed={mode === "register"}>
              Sign Up
            </button>
          </div>
          <div className="login-register-page__form">
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
              />
            </div>
            <button type="button" className="login-register-page__submit">
              {isRegister ? "Sign Up" : "Log In"}
            </button>
          </div>
        </Paper>
      </Stack>
    </PageShell>
  );
}
