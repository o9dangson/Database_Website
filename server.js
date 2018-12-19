var express = require('express');
var app = express();
var path = require('path');
const sqlite3 = require('sqlite3');
var db;

app.set('static_files', path.join(__dirname, '/'));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));	// Main Page
});

app.get('/home', (req, res) =>{
	db = new sqlite3.Database('static_files/database/flowers.db');
	var sql = "SELECT * FROM FLOWERS";
	var result = {};
	db.all(sql, {}, (err, rows) => {
		if (err) {
		  throw err;
		}
		result = rows;
		if (rows.length > 0){
			console.log("row length = " + rows.length);
			console.log(result);
		}
		res.send(result);
	});
	db.close((err) => {
		if (err) {
		  return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
});

app.get('/refresh/FLOWERS', (req, res) =>{
	db = new sqlite3.Database('static_files/database/flowers.db');
	var sql = "SELECT * FROM FLOWERS";
	var result = {};
	db.all(sql, {}, (err, rows) => {
		if (err) {
		  throw err;
		}
		result = rows;
		if (rows.length > 0){
			console.log("row length = " + rows.length);
			console.log(result);
		}
		res.send(result);
	});
	db.close((err) => {
		if (err) {
		  return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
});

app.get('/refresh/SIGHTINGS', (req, res) =>{
	db = new sqlite3.Database('static_files/database/flowers.db');
	var sql = "SELECT * FROM SIGHTINGS";
	var result = {};
	db.all(sql, {}, (err, rows) => {
		if (err) {
		  throw err;
		}
		result = rows;
		if (rows.length > 0){
			console.log("row length = " + rows.length);
			console.log(result);
		}
		res.send(result);
	});
	db.close((err) => {
		if (err) {
		  return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
});

app.get('/refresh/FEATURES', (req, res) =>{
	db = new sqlite3.Database('static_files/database/flowers.db');
	var sql = "SELECT * FROM FEATURES";
	var result = {};
	db.all(sql, {}, (err, rows) => {
		if (err) {
		  throw err;
		}
		result = rows;
		if (rows.length > 0){
			console.log("row length = " + rows.length);
			console.log(result);
		}
		res.send(result);
	});
	db.close((err) => {
		if (err) {
		  return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
});

app.get('/search/:flowerName', (req, res) =>{
	const nameToLookUp = req.params.flowerName;
	db = new sqlite3.Database('static_files/database/flowers.db');
	var sql = "SELECT * FROM SIGHTINGS WHERE NAME = $name ORDER BY julianday(SIGHTED) DESC LIMIT 10;"
	var result = {};
	db.all(sql, { $name : nameToLookUp }, (err, rows) => {
		if (err) {
		  throw err;
		}
		result = rows;
		if (rows.length > 0){
			console.log("row length = " + rows.length);
			console.log(result);
		}
		res.send(result);
	});
	db.close((err) => {
		if (err) {
		  return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
});

app.get('/add/:flowerName/:personName/:location/:sightedYear/:sightedMonth/:sightedDay', (req, res) =>{
	const fName = req.params.flowerName;
	const pName = req.params.personName;
	const loc = req.params.location;
	const sDateYear = req.params.sightedYear;
	const sDateMonth = req.params.sightedMonth;
	const sDateDay = req.params.sightedDay;
	const sDate = sDateYear + '-' + sDateMonth + '-' + sDateDay;
	var result = [{result:'RESULT'}];	//This isn't needed for the insert.
	console.log("fName, pName, loc, sDate: " + fName + pName + loc + sDateYear + sDateMonth + sDateDay);
	db = new sqlite3.Database('static_files/database/flowers.db');
	var sql = "INSERT INTO SIGHTINGS(NAME, PERSON, LOCATION, SIGHTED) VALUES($flower, $person, $location, $sighted)";
	db.run(sql, 
		{ 
			$flower : fName,
			$person : pName,
			$location: loc,
			$sighted : sDate 
		}, 
		(err, rows) => {
			if (err) {
			  throw err;
			}
			// Output the most recent insert
			console.log('A row has been inserted with rowid ${this.lastID}');
			res.send(result);
	});
	db.close((err) => {
		if (err) {
		  return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
});

app.get('/edit/:oldC/:newG/:newS/:newC', (req, res) =>{
	const oldCommon = req.params.oldC;
	const newGenus = req.params.newG;
	const newSpecies = req.params.newS;
	const newCommon = req.params.newC;
	const result = [{result: 'RESULT'}];	//Placeholder since the returned data isn't needed.
	console.log('oldCommon, newGenus, newSpecies, newCommon :' + oldCommon + ' ' + newGenus + ' ' + newSpecies + ' ' + newCommon);
	
	db = new sqlite3.Database('static_files/database/flowers.db');
	var sql = "UPDATE FLOWERS SET GENUS = $nG, SPECIES = $nS, COMNAME = $nC WHERE COMNAME = $oC";
	//var sqlTest = "UPDATE FLOWERS SET GENUS = 'hello', SPECIES = 'world' WHERE COMNAME = 'California flannelbush'";
	db.run(sql, 
		{ 
			$nG : newGenus,
			$nS : newSpecies,
			$nC : newCommon,
			$oC : oldCommon
		}, 
		(err, rows) => {
			if (err) {
			  throw err;
			}
			// Output the most recent insert
			console.log('A row has been updated with rowid ${this.lastID}');
			res.send(result);
	});
	db.close((err) => {
		if (err) {
		  return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
});

var server = app.listen(3000, (req, res) => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});