import {config} from './config';
import {getData} from './getData';
import './main.css';

async function start(){
	let data = await getData(config);
	let html =  `
	<h1>SharePoint Template</h1>
	<h2> Data Source via PnPjs</h2>
	<p>SharePoint Site Title: ${data.Title} </p>
	<p>SharePoint Site Description: ${data.Description} </p>
`
	document.body.insertAdjacentHTML('afterbegin', html);
};
	
start();


