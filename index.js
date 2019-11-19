function getLyrics() {
    let text = document.getElementById("lyrics");
    let render = document.getElementById("renderedText");

    // get lyrics and separate by space
    let value = text.value
    
    //count number of lines
    let linecount = value.split("\n")
    var arr = [];
    var emptyLine = [];
    var newline = [];

    // create an array of arrays with an empty line
    for(let i=0; i<linecount.length; i++){
        len = linecount[i].split(" ").length
        // arr.push(Array.apply(i, {length : len}))
        for(let j=0; j<len; j++){
          arr.push(null)
        }
        arr.push(linecount[i].split(" "))
     }
     console.log(arr);
     
    let numOfRows = arr.length

    let table = "<table>";
      
    for(let j=0; j<arr.length; j++){
      table += "<tr><td>row"+ j;
      
      table += "</td><tr>"
    }
    table += "</table>"


    render.innerText = arr;

    // let box = document.createElement("p")
    // box.id = "textbox1"
    // box.text = "div-text"
    // document.getElementById("container").appendChild(box)


}
