import React from 'react'
import './Home.css'
import Login from '../../components/Login';
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
        {this.state.fosters.map(foster => (
          <div className="container" key={foster.value.fosterID}>
            <Login 
              fosterID={foster.value.fosterID}
              fosterName={foster.value.fosterName}
              buttonText="Login"
            />

          </div>

        ))}
      </div>

    );
  };
};

// console.log ("This is the Homepage")
// function Home() {
//   return (
//     <div>
//         Hello World! - Welcome to Foster Me!
//         <Login />
//     </div>
//   );
// }

export default Home
