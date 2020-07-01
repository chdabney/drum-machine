// using library from https://cdnjs.com/libraries/tone
function sequencer() {
    const kick = new Tone.Player('./sounds/kick-classic.wav').toMaster()
    const snare = new Tone.Player('./sounds/snare-808.wav').toMaster()
    let index = 0


    Tone.Transport.scheduleRepeat(repeat, '8n')
    Tone.Transport.start()

    function repeat() {
        let step = index % 8
        let kickInput = document.querySelector(`.kick input:nth-child(${step + 1})`)
        let snareInput = document.querySelector(`.snare input:nth-child(${step + 1})`)
        if (kickInput.checked) {
            kick.start()
        }
        if (snareInput.checked) {
            snare.start()
        }
        index++
    }
}

sequencer()

