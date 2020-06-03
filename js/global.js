//play audio
let buttons = $("button");
for(let button of buttons)
{
    button.on("click", () => {
        let audio = new Audio("../resources/audio/ButtonSFX.wav");
        audio.play();
    })
}