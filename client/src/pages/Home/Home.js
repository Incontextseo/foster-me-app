import React from 'react'
import './Home.css'
import Login from "../../components/Login/Login"
import API from "../../utils/API";


class Home extends React.Component {
  state = {
    fosters: []
  };

  loadFosters = () => {
    API.getFosters()
    .then(res => {
      console.log("res.data from getFosters method: ", res.data)
      this.setState({fosters: res.data})
    })
    .catch(err => console.log(err))
  };

  // Lifecycle method runs loadCurrentFosters
  componentDidMount() {
    this.loadFosters();
  };

  render() {
    return (
      <div>
        <div className="search__header">
            <h1 className="search__title">Welcome Foster Families!</h1>
            <p className="search__des">Change a life. Find an animal to foster!</p>
        </div>
<<<<<<< HEAD
            <Main/>
            <Login 
            />

=======
            <Login 
            />
>>>>>>> 2a36e05a44986093c20e48da8c34220d238bf9f3
      </div>
    );
  };
};

export default Home
