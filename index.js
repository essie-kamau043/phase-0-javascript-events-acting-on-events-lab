// Your code here
dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight(){
    const leftNumbers = parseInt(dodger.style.left.replace('px', ''),10);
    const newLeft = leftNumbers + 10;
    if (newLeft <=360){
        dodger.style.left = newLeft + 'px';
    }
  }

  document.addEventListener('keydown',function(e){
    if (event.key === 'ArrowRight'){
        moveDodgerRight();
    }
  });



