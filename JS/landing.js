const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 149;
const currentFrame = index => (
  `../RES/ImageSequence/LandingPage_${index.toString().padStart(5, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
if(window.innerWidth >= 697){
  canvas.width=window.innerWidth - 200;
  canvas.height=window.innerHeight;
}else{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight/4;
}

img.onload=function(){
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop*5 / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()