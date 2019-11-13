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
    for(i=0; i<linecount.length; i++){
        len = linecount[i].split(" ").length
        arr.push(Array.apply(null, {length : len}))
        arr.push(linecount[i].split(" "))
     }

    console.log(arr);
    render.innerText = arr;

    // let box = document.createElement("p")
    // box.id = "textbox1"
    // box.text = "div-text"
    // document.getElementById("container").appendChild(box)


}
