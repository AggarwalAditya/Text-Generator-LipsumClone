import React, { Component } from 'react';
import logo from './logo.svg';
import Output from './components/output'
import './App.css';




class App extends Component {

	constructor(props)
	{
		super(props);

		this.state={
			paras: 4,
			html: true,
			text: ' '
		}
	}

	componentWillMount()
	{
		this.getSampleText();
	}

	getSampleText = () =>
	{
		const hipsterURL="http://hipsterjesus.com/api/";
		fetch(hipsterURL+"?paras="+this.state.paras+"&html="+this.state.html)
		.then(function(res){
			return res.json();
		})
		.then(data=>{
			let stringJSON=JSON.stringify(data);
			console.log(stringJSON);
			this.setState({text:data.text})
			console.log(this.state);
		})
	}

  render() 
  {
    return (
      <div className="App">
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
