function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}









var facts = ["The vast majority of people with mental health problems are no more likely to be violent than anyone else. Most people with mental illness are not violent and only 3%–5% of violent acts can be attributed to individuals living with a serious mental illness. In fact, people with severe mental illnesses are over 10 times more likely to be victims of violent crime than the general population. You probably know someone with a mental health problem and don't even realize it, because many people with mental health problems are highly active and productive members of our communities.", "Even very young children may show early warning signs of mental health concerns. These mental health problems are often clinically diagnosable, and can be a product of the interaction of biological, psychological, and social factors.", "AMental health problems have nothing to do with being lazy or weak and many people need help to get better.", "Half of all mental health disorders show first signs before a person turns 14 years old, and three-quarters of mental health disorders begin before age 24."]
var randomFact = randomlist(facts);

function generateFacts() { var randomFact = randomlist(facts); document.getElementById('here').innerHTML = randomFact; }


function randomlist(list) {
  var x = Math.floor(Math.random() * list.length);
  return list[x];
}


