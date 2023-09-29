window.addEventListener("load", ()=>{

    const sounds = document.querySelectorAll(".sound");
    const pads= document.querySelectorAll('.pads div');
    const visuals = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#co60d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    // sound

    pads.forEach((pad,index) =>{

        pad.addEventListener('click',function(){

            sounds[index].currentTime =0;
            sounds[index].play();
        });
    });


});