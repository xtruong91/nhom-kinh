import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Redirect } from 'react-router-dom';
import theme from '../../commons/styles/theme';
import AdminLayoutRoute from '../../components/AdminLayoutRoute';
import DefaultLayoutRoute from '../../components/DefaultLayoutRoute';
import GlobalLoading from '../../components/GlobalLoading';
import { ADMIN_ROUTES, ROUTES } from '../../constants';
import configureStore, { history } from '../../redux/configureStore';
import styles from './styles';
import NotFound from '../NotFound';

const store = configureStore();

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((item, index) => {
      return (
        <AdminLayoutRoute
          component={item.component}
          exact={item.exact}
          key={index}
          path={item.path}
        />
      );
    });
    return xhtml;
  }

  renderDefaultRoutes() {
    let xhtml = null;
    xhtml = ROUTES.map((item, index) => {
      return (
        <DefaultLayoutRoute
          component={item.component}
          exact={item.exact}
          key={index}
          path={item.path}
        />
      );
    });
    return xhtml;
  }

  renderRoutes() {
    let xhtml = null;
    xhtml = (
      <BrowserRouter>
        <Switch>
          {this.renderAdminRoutes()}
          {this.renderDefaultRoutes()}
          {/* <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" /> */}
        </Switch>
      </BrowserRouter>
    );
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <GlobalLoading />
            <ToastContainer />
            <CssBaseline />
            {this.renderRoutes()}
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {};

export default withStyles(styles)(App);
