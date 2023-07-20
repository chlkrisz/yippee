/* we do a little trolling */
var ptn=['t','r','o','l','l'];
var cur=0;
var trollMode=0;
var handler=function(e){
    //console.log(e.key);
    if(e.key==ptn[cur] && ptn.length>cur){
        cur++;
    } else {
        cur=0;
    }
    if(cur==ptn.length){
        document.getElementsByClassName("txt")[0].innerHTML="HIHHIHIHIHIHIHIHIHI"
        document.getElementsByClassName("tbhcreature")[0].style.backgroundImage="url(\"./tbhcreature_troll.png\")";
        document.title = 'HIHHIHIHIHIHIHIHIHI';
        trollMode=1;
    }
}
document.addEventListener('keydown', handler, false);
/* we do a little trolling */

var count = 400;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

function YIPPEE(){
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
    
    var audio = new Audio('./yippee.mp3');
    var audio2 = new Audio('./troll.mp3');
    
    if(trollMode==1){
        audio2.play();
    }else{
        audio.play();
    }
}
var tbh=document.getElementById("tbh");
tbh.addEventListener("click", (event)=>{
    YIPPEE();
});

