var to = 'Vân Anh !';
var gift_url = 'https://www.facebook.com/vanhcutez';
var gift_image_url = 'https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/393786571_729653102355573_5352269975938263656_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=WAiKd59gGa0AX_x6Jvr&_nc_ht=scontent.fhan20-1.fna&oh=03_AdSMt_S-mGxgU4S4lQGC91tbC0pDfrauuoYCoLKQdQHjKw&oe=65595B37';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

