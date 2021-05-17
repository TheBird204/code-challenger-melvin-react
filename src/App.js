//import logo from './logo.svg';
import React from "react";
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      responses: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  getResponse = () => {
    fetch('http://localhost:3000/iecho?text='+this.state.value)
        .then(response => response.json())
        .then(json => this.setState({
          responses: [...this.state.responses, <p>Texto: '{json.text}', {json.palindrome ? 'es' : 'no es'} un palindome</p>]
        }));
  };

  render() {
    return (
        <div className="row">
            <div className="d-flex align-items-center justify-content-center bg-danger">
                <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Insert Text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mb-2" onClick={this.getResponse}>Send</button>
                </div>
            </div>

            <div className="card">
                <div className="card-header">Resultados</div>
                <div className="card-body">
                    {
                        this.state.responses.reverse().map(function (element) {
                            return (
                                element
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
}

export default App;
