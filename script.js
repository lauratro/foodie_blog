let text = "Berlin Restaurant Reviews";

let output = "";

let i = 0;

function writeText() {
  output += text.charAt(i);

  i++;

  document.getElementById("title").innerHTML = output;

  if (i >= text.length) {
    clearInterval(s);
  }
}

s = setInterval("writeText()", 100);

//Registration Form with url Api
function results() {
  let params = new URL(document.location).searchParams;
  let name = params.get("name");
  document.getElementById("data").innerHTML = name;
}
results();
// LocalStorage method
/*function results() {
  let name = document.getElementById("name").value;
  localStorage.setItem("name1", name);
}

document.getElementById("data").innerHTML = localStorage.getItem("name1");*/
