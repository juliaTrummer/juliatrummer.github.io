
document.addEventListener("mousemove", parallax);
      
function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.client * moving_value) / 250;
        var y = (e.clienty * moving_value) / 250;
    
        move.style.transform = "translate(" + x + "px) translate(" + y + "px)";
    });
}

const textPath = document.querySelector("#text-path");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  textPath.setAttribute("startOffset", (-percent * 40) + 500)
});