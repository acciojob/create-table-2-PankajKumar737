function createTable() {
    //Write your code here
	let table = document.getElementById("myTable");
	let rn =prompt(" input number of rows", "rn");
	let cn=prompt(" input number of columns", "cn");
	
	for(var i=rn-1; i>=0; i--){
		for(var j=0; j < cn; j++){
			 var row = table.insertRow(i);
				  var cell${j} = row.insertCell(j);
				  cell1.innerHTML = "`Row-${i} Column-${j}`";
				 
		}
	}
}
