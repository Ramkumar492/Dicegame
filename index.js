var random1= Math.floor((Math.random()*6))+1;
var random2= Math.floor((Math.random()*6))+1;

var image1= "images/dice"+random1+".png";
var image2= "images/dice"+random2+".png";

document.querySelectorAll("img")[0].setAttribute("src",image1); //for image1
document.querySelectorAll("img")[1].setAttribute("src",image2); //for image2

if(random1>random2)
{
  document.querySelector("h1").textContent=" 🚩Player1 Wins";
}
else if (random1<random2) {

  document.querySelector("h1").textContent="Player2 Wins 🚩";

}
else
{
    document.querySelector("h1").textContent="Draw 🏳";
}
