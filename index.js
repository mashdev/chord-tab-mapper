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
    var newObj = {}

    var html = ''

    for(let i=0; i < linecount.length; i++){ //for each line
          len = linecount[i].trimEnd().split(" ");
          arr.push(emptyLine = len);
       }
    
    for(let i=0; i < arr.length; i++){
      html += '<table class=lyricstbl><tr>'

      for(let l=0; l < arr[i].length; l++){
        html += '<td> <input type=text size='+ arr[i][l].length +' name="" id='+Math.ceil(Math.random() * 10000000)+' onclick="getID(this.id)"> </td>';
      }

      html += '</tr><tr>'

      for(let l=0; l < arr[i].length; l++){
        html += '<td>'+arr[i][l]+'</td>';
      }
      html += '</tr></table>'
    };
    
    let numOfRows = arr.length   
    
    render.innerHTML = html;

}

function getID(id){
  let align = ['left', 'center', 'right'];
  let box = document.getElementById(id)
  box.classList.toggle("leftAlign");

}
