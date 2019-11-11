function getLyrics() {
    let text = document.getElementById("lyrics");
    let render = document.getElementById("renderedText");

    // get lyrics and separate by space
    let value = text.value
    
    //count number of lines
    let linecount = value.split("\n")
    var arr = [];
    var newline = [];
    
    for(i=0; i<linecount.length; i++){
      if(linecount[i].split(" ") || linecount[i].split("  "))
        newline[i].push("-")
        arr.push(linecount[i].split(" "))
     }
    console.log(arr);

    render.innerText = arr;
    // console.log(arr);
    
}