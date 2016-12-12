let ajoutetr=function() {
const people = [{firstname:"ayoub", surname:"khous"},
  {firstname:"fodil", surname:"azli"},
  {firstname:"guillaume", surname:"denis"}];
let tbody=document.querySelector('tbody');
for (let i=0; i<people.length; i++){
  let line = document.createElement("tr");
  line.innerHTML = "<td>"+people[i].firstname+"</td><td>"+people[i].surname+"</td>";
  tbody.appendChild(line);
  }
}
let deletetr = function(){
  let text = document.querySelector("input").value;
  let tbody= document.querySelector('tbody');
  let tbody= document.querySelectorAll('tbody tr');
  for (let i=0;i<tbody.length;i++) {
    if
  }
  tbody.removeChild(elem);
}
document.querySelector("button").addEventListener("click",ajoutetr);
document.querySelector(".remove").addEventListener("click",deletetr);
