//function to start the time start here
//give the clock element id "clock"
function Showtime() {
  var date = new Date();
  var h = date.getHours(); //0 - 23
  var m = date.getMinutes();//0 - 59
  var s = date.getSeconds();//0 - 59

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  var time = h + ":" + m + ":" + s;
  document.getElementById('clock').innerText = time;
  document.getElementById('clock').textContent = time;
setTimeout(Showtime, 1000);

}
Showtime();
//function stops here


//function to find current date start here
//give date element id "date"
var date = new Date();
document.getElementById('date').innerHTML = date.toDateString();
//stops here



//news scroll function start here
//give news element the class news
var news = {
  init: function(){
    news.Tags = document.querySelectorAll('.news');
    for(var i = 0; i < news.Tags.length; i++){
    }
    news.Tags = document.querySelectorAll('.news div');
    for(var i = 0; i < news.Tags.length; i++){
      news.Tags[i].style.position = 'relative';
      news.Tags[i].style.right = '-'+news.Tags[i].parentElement.offsetWidth+'px';
    }
    news.loop();
  },
  loop: function(){
    for(var i = 0; i < news.Tags.length; i++){
      var x = parseFloat(news.Tags[i].style.right);
      x ++;
      var W = news.Tags[i].parentElement.offsetWidth;
      var w = news.Tags[i].offsetWidth;
      if((x/3500) * W  > w) x = -W;
      news.Tags[i].style.right = x + 'px';
    }
    requestAnimationFrame(this.loop.bind(this));
  }
};
window.addEventListener('load',news.init);
//news scroll function stop here
  var vcClass = "h1fiw080318";
  var team = "";
if (vcClass.substr(0,1) === "a") {
  team = "efteruddannelser";
}else if (vcClass.substr(0,3) === "iiw") {
  team = "brobyg";
}else if (vcClass.indexOf("we")>0) {
  team = "Webudvikler";
}else if (vcClass.indexOf("mg")>0) {
  team = "Mediegrafiker";
}else if (vcClass.indexOf("dm")>0) {
  team = "Digitalmedia";
}else if (vcClass.indexOf("gr")>0) {
  team = "Grafisktekniker";
}else if (vcClass.indexOf("fiw")>0) {
  team = "gf1";
}else {
 team = vcClass;
}
console.log(team);
