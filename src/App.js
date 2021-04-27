import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    // when while api is fetching or getting the data we want to update loading state
    this.setState({loading: true});
    const res = await axios.get("https://api.github.com/users");
    // after data is done fetching we need stop loading 
    this.setState({loading: false, users: res.data});
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
