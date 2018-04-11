import React, { Component } from 'react';
import logo from './logo.svg';
import Output from './components/output';
import Select from './components/select';
import Text from './components/text';
import './App.css';




class App extends Component {

	constructor(props)
	{
		super(props);

		this.state={
			paras: 4,
			html: 'true',
			text: ' '
		}
	}

	componentWillMount()
	{
		this.getSampleText();
	}

	getSampleText = () =>
	{
		const hipsterURL='http://hipsterjesus.com/api/';
		fetch(hipsterURL+'?paras='+this.state.paras+'&html='+this.state.html)
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

	showHtml = (x) =>
	{
		this.setState({
			html: x
		},this.getSampleText)
	}

	changeParas = (x) =>
	{
		this.setState({
			paras: x
		},this.getSampleText)	
	}

  render() 
  {
    return (
      <div className="App container">
      	<h1>React JS Sample text Generator</h1>
      	<hr />
      	<form className="form-inline">
      		<div className="form-group">
      			<label>Inclue html:</label>
      			<Select value={this.state.html} onChange={this.showHtml} />

      			<label>Number of paragraphs:</label>
      			<Text value={this.state.paras}  onChange={this.changeParas} />
      			
      		</div>
      	</form>
        <Output value={this.state.text} />

      </div>
    );
  }
}

export default App;
