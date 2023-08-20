
document.addEventListener("mousemove", parallax);


const textPath = document.querySelector("#textPath");

const a = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

      
function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.client * moving_value) / 250;
        var y = (e.clienty * moving_value) / 250;
    
        move.style.transform = "translate(" + x + "px) translate(" + y + "px)";
    });
}

document.addEventListener("scroll", event => {
  let percent = (a[st]||b[st]) / ((a[sh]||b[sh]) - a.clientHeight) * 100;
  textPath.setAttribute("startOffset", (-percent * 5) + 500)
});