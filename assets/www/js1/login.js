var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	alert(username);
	alert(password);
	var db = window.openDatabase("Arun_db", "", "Arun_db", 1024*1000);
	
	db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS "Tables"(Name TEXT, Password TEXT)', []);
             
               tx.executeSql('SELECT * from Tables Where Password = "'+password+'" and Name = "'+username+'"', [], function(tx, results){ 
                console.log('rows :' + results.rows.length);
                if (results.rows.length == 0){ 
                
                   
				 alert("Not Authorized Person Need to sign In");
				  window.location.href = "newregis.html";
                }
				else{
					alert("Success");
					window.location.href = "index.html";
					
				}
                
              });                   
            });
            
            
	/*if ( username == "Formget" && password == "formget#123"){
		alert ("Login successfully");
		window.location = "success.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("You have left "+attempt+" attempt;");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}*/
	
}