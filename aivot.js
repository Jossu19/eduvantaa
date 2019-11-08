function laatikkoFunktio(bn){
    //alert("Nyt vaihdetaan laatikko"+ bn + ":n sisältöä!");
    

    if (bn == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>WE BOWLING!</h1>" + 
        "<p>Ja BLAAH BLLAAH BLAAAH BLAAAAH...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (bn == 2){
        document.getElementById("laatikko2").innerHTML = "<table><tr><td></td></tr></table>"
    }
    else if( bn == 3){
        document.getElementById("laatikko3").innerHTML =  '<img src="smiley1.png"><br></img> <img src="smiley2.png"><br></img> <img src="star.jpg"></img>'
    }
  
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }

 