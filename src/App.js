import React, { Component } from 'react';
import logo from './logo.svg';
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

	getSampleText()
	{
		const hipsterURL="http://hipsterjesus.com/api/";
		fetch(hipsterURL+"?paras="+this.state.paras+"&html="+this.state.html)
		.then(function(res){
			return res.json();
		})
		.then(function(data){
			let stringJSON=JSON.stringify(data);
			console.log(stringJSON);
		})
	}

  render() 
  {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
