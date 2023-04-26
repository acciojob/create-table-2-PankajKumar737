function createTable() {
    //Write your code here
	let table = document.getElementById("myTable");
	let rn =prompt(" input number of rows", "rn");
	let cn=prompt(" input number of columns", "cn");
	
	function createTable()
{
  let rn = window.prompt("Input number of rows", 1);
let cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}
