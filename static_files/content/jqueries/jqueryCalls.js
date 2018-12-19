$(document).ready(() =>{
    $('#homeLink').click(() =>{
        // Open and close sections of html
        $('#homeSection').addClass('home').removeClass('hidden');
        $('#searchSection').addClass('hidden').removeClass('home');
        $('#addSection').addClass('hidden').removeClass('home');
        $('#editSection').addClass('hidden').removeClass('home');
        $('#removeSection').addClass('hidden').removeClass('home');
        $('#aboutSection').addClass('hidden').removeClass('home');
        console.log("Clicking the home a href.");
        // Make ajax call
        const requestURL = 'home/';
        console.log("Making ajax request to " + requestURL);
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType : 'json', // this URL returns data in JSON format
            success: (data) => {
              console.log('You received some data!', data);
              if (data != null) {
                $('.SearchResult').html('Successfully fetched data at URL: ' + requestURL);
                var element = angular.element($('#myDiv'));
                var controller = element.controller();
                var scope = element.scope();
                scope.ListOfObjects = data;
                scope.$apply(function(){
                    scope.update(data);
                });
              } else {
                $('.SearchResult').html('Error: could not find data at URL: ' + requestURL);
                console.log('Search returned empty');
              }
            },
            failure: (data) => {
                console.log("Ajax request didn't go through");
            }
          });
    });
    $('#searchLink').click(() =>{
        $('#homeSection').addClass('hidden').removeClass('home');
        $('#searchSection').addClass('home').removeClass('hidden');
        $('#addSection').addClass('hidden').removeClass('home');
        $('#editSection').addClass('hidden').removeClass('home');
        $('#removeSection').addClass('hidden').removeClass('home');
        $('#aboutSection').addClass('hidden').removeClass('home');
        console.log("Clicking the search a href.");
        // Make ajax call
        const requestURL = 'home/';
        console.log("Making ajax request to " + requestURL);
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType : 'json', // this URL returns data in JSON format
            success: (data) => {
              console.log('You received some data!', data);
              if (data != null) {
                $('.SearchResult').html('Successfully fetched data at URL: ' + requestURL);
                var element = angular.element($('#searchDiv'));
                var controller = element.controller();
                var scope = element.scope();
                scope.ListOfObjects = data;
                scope.$apply(function(){
                    scope.update(data);
                });
              } else {
                $('.SearchResult').html('Error: could not find data at URL: ' + requestURL);
                console.log('Search returned empty');
              }
            },
            failure: (data) => {
                console.log("Ajax request didn't go through");
            }
          });
    });
    $('#addLink').click(() =>{
        $('#homeSection').addClass('hidden').removeClass('home');
        $('#searchSection').addClass('hidden').removeClass('home');
        $('#addSection').addClass('home').removeClass('hidden');
        $('#editSection').addClass('hidden').removeClass('home');
        $('#removeSection').addClass('hidden').removeClass('home');
        $('#aboutSection').addClass('hidden').removeClass('home');
        console.log("Clicking the add a href.");
    });
    $('#editLink').click(() =>{
        $('#homeLink').trigger('click');    //This is just in case user doesn't open up the flower table.
        $('#homeSection').addClass('hidden').removeClass('home');
        $('#searchSection').addClass('hidden').removeClass('home');
        $('#addSection').addClass('hidden').removeClass('home');
        $('#editSection').addClass('home').removeClass('hidden');
        $('#removeSection').addClass('hidden').removeClass('home');
        $('#aboutSection').addClass('hidden').removeClass('home');
        console.log('Clicking the edit a href.');
    });
    $('#removeLink').click(() =>{
        $('#homeSection').addClass('hidden').removeClass('home');
        $('#searchSection').addClass('hidden').removeClass('home');
        $('#addSection').addClass('hidden').removeClass('home');
        $('#editSection').addClass('hidden').removeClass('home');
        $('#removeSection').addClass('home').removeClass('hidden');
        $('#aboutSection').addClass('hidden').removeClass('home');
        console.log('Clicking the remove a href.');
    });
    $('#aboutLink').click(() =>{
        $('#homeSection').addClass('hidden').removeClass('home');
        $('#searchSection').addClass('hidden').removeClass('home');
        $('#addSection').addClass('hidden').removeClass('home');
        $('#editSection').addClass('hidden').removeClass('home');
        $('#removeSection').addClass('hidden').removeClass('home');
        $('#aboutSection').addClass('home').removeClass('hidden');
        console.log('Clicking the about a href.');
    });
    $('#button').click(() =>{
        console.log("I'm clicking the button");
        // Make ajax call
        const requestURL = 'refresh/' +  $('#myTableSelect option:selected').text();
        console.log("Making ajax request to " + requestURL);
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType : 'json', // this URL returns data in JSON format
            success: (data) => {
              console.log('You received some data!', data);
              if (data != null) {
                $('.SearchResult').html('Successfully fetched data at URL: ' + requestURL);
                var element = angular.element($('#myDiv'));
                var controller = element.controller();
                var scope = element.scope();
                scope.ListOfObjects = data;
                scope.$apply(function(){
                    scope.update(data);
                });
              } else {
                $('.SearchResult').html('Error: could not find data at URL: ' + requestURL);
                console.log('Search returned empty');
              }
            },
            failure: (data) => {
                console.log("Ajax request didn't go through");
            }
          });
    });
    $('#searchButton').click(() => {
        // Make ajax call
        console.log("I'm clicking the searchButton");
        const requestURL = 'search/' + $('#mySearchSelect option:selected').text();
        console.log("Making ajax request to " + requestURL);
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType : 'json', // this URL returns data in JSON format
            success: (data) => {
              console.log('You received some data!', data);
              if (data != null) {
                $('#SearchResult').html('Successfully fetched data at URL: ' + requestURL);
                var element = angular.element($('#searchDiv'));
                var controller = element.controller();
                var scope = element.scope();
                scope.SearchResultObjects = data;
                scope.$apply(function(){
                    scope.update2(data);
                });
              } else {
                $('#SearchResult').html('Error: could not find user at URL: ' + requestURL);
                console.log('Search returned empty');
              }
            },
            failure: (data) => {
                console.log("Ajax request didn't go through");
            }
          });
    });
    $('#addButton').click(() =>{
        console.log("I'm clicking the add button!");
        var fName = $('input[name=flowerName]').val();
        var pName = $('input[name=personName]').val();
        var location = $('input[name=location]').val();
        var sDateYear = $('input[name=sightedDateYear]').val();
        var sDateMonth = $('input[name=sightedDateMonth]').val();
        var sDateDay = $('input[name=sightedDateDay]').val();
        if(fName == "")
        fName = "NULL";
        if(pName == "")
        pName = "NULL";
        if(location == "")
        location = "NULL";
        if(sDateYear == "" || sDateYear.length != 4)
        sDateYear = "0000";
        if(sDateMonth == "" || sDateMonth.length != 2)
        sDateMonth = "00";
        if(sDateDay == "" || sDateDay.length != 2)
        sDateDay = "00";
        const requestURL = "add/" + fName + '/' + pName  + '/' + location + '/' + sDateYear + '/' + sDateMonth + '/' + sDateDay;
        console.log('Making ajax request to ' + requestURL);
        //Make ajax call
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType : 'json', // this URL returns data in JSON format
            success: (data) => {
              console.log('You received some data!', data);
              if (data != null) {
                $('#AddResult').html('Successfully fetched data at URL: ' + requestURL);
                
              } else {
                $('#AddResult').html('Error: could not find user at URL: ' + requestURL);
                console.log('Search returned empty');
              }
            },
            failure: (data) => {
                console.log("Ajax request didn't go through");
            }
          });
    });
    $('#editButton').click(() =>{
        console.log("I'm clicking the editButton!");
        var Eelement = angular.element($('#editDiv'));
        var Econtroller = Eelement.controller();
        var Escope = Eelement.scope();
        var oldCommon = Escope.rowInfo.COMNAME;
        var newGenus = $('#newG').val();
        var newSpecies = $('#newS').val();
        var newCommon = $('#newC').val();
        if(newGenus == "") {
            console.log("EMPTY GENUS FIELD!");
            newGenus = "NULL";
        }
        if(newSpecies == "") {
            console.log("EMPTY SPECIES FIELD!");
            newSpecies = "NULL";
        }
        if(newCommon == "") {
            console.log("EMPTY COMMON FIELD!");
            newCommon = "NULL";
        }
        const requestURL = "edit/" + oldCommon + '/' + newGenus + '/' + newSpecies + '/' + newCommon;
        console.log('Making ajax request to: ' + requestURL);
        //Make ajax call
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType : 'json', // this URL returns data in JSON format
            success: (data) => {
              console.log('You received some data!', data);
              if (data != null) {
                $('#EditResult').html('Successfully fetched data at URL: ' + requestURL);
                $('#editLink').trigger('click');
              } else {
                $('#EditResult').html('Error: could not find data at URL: ' + requestURL);
                console.log('Search returned empty');
              }
            },
            failure: (data) => {
                console.log("Ajax request didn't go through");
            }
          });
    });
    $(document).ajaxError(() => {
        //Submit error
        console.log("submit error...");
    });
});