import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthState";

interface PrivateProps extends RouteProps {
  component: React.FunctionComponent<any>;
}

const PrivateRoute: React.FC<PrivateProps> = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { loading, isAuthenticated } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
