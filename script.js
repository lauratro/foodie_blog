let text = "Berlin Restaurant Reviews";
    
let output = "";

let i = 0;



function writeText() {
    
    output += text.charAt(i);
  
    i++;
    
    document.getElementById("title").innerHTML = output;
    
    if(i >= text.length) {
        
        clearInterval(s);
    }
}

s = setInterval("writeText()",100);