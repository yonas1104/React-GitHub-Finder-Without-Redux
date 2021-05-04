import "./App.css";
import React, { Component, Fragment } from "react";
import NavBar from "./components/layout/NavBar";
import Spinner from "./components/layout/Spinner";
import UserItem from "./components/users/UserItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Users from "./components/users/Users";
import axios from "axios";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Detail from "./components/users/Detail";
class App extends Component {
  state = {
    singleUser: {},
    repos: [],
    users: [],
    showSeachBar: true,
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const reponse = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.CLIENT_ID} & client_secret=${process.env.CLIENT_SECRET}`
  //   );

  //   this.setState({
  //     users: reponse.data,
  //     loading: false,
  //   });
  // }

  render() {
    const searchUsers = async (text) => {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID} & client_secret=${process.env.CLIENT_SECRET}`
      );
      this.setState({
        users: response.data.items,
        loading: false,
      });
    };

    const clearUsers = () =>
      this.setState({
        users: [],
        loading: false,
      });
    const alert = (msg, type) => {
      console.log("alert");
      this.setState({ alert: { msg, type } });

      setTimeout(() => this.setState({ alert: null }), 1500);
    };
    const onCardClick = (user) => {
      // this.setState({ singleUser: user });
      console.log(user);
    };
    const getRepos = async (name) => {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://api.github.com/users/${name}/repos?client_id=${process.env.CLIENT_ID} & client_secret=${process.env.CLIENT_SECRET}`
      );
      console.log(response.data);
      this.setState({
        repos: response.data,
        loading: false,
      });
    };
    const getUser = async (name) => {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://api.github.com/users/${name}?client_id=${process.env.CLIENT_ID} & client_secret=${process.env.CLIENT_SECRET}`
      );

      this.setState({
        singleUser: response.data,
        showSeachBar: false,
        loading: false,
      });
    };
    const { loading, users } = this.state;

    return (
      <Router>
        <div className="App">
          <NavBar
            users={users}
            alert={alert}
            searchUsers={searchUsers}
            title=" GitHub Finder"
            clearUsers={clearUsers}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Alert alert={this.state.alert} />
                  <div className="container">
                    {loading ? (
                      <Spinner />
                    ) : (
                      <Users onCardClick={onCardClick} userItem={users} />
                    )}
                  </div>
                </Fragment>
              )}
            />
            <Route
              exact
              path="/about"
              render={(props) => (
                <Fragment>
                  <About />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/detail/:name"
              render={(props) => (
                <Fragment>
                  <Detail
                    {...props}
                    getUser={getUser}
                    getRepos={getRepos}
                    repos={this.state.repos}
                    singleUser={this.state.singleUser}
                  />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
