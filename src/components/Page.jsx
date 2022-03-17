import React from 'react'
import Chart from './Chart';

function Page() {
    var audioCtx;
    function startAudio() {
        //create the context for the web audio
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        //create, tune, start and connect each oscillator sinea, sineb and sinec
        var sinea = audioCtx.createOscillator();
        sinea.frequency.value = 440;
        sinea.type = "sine";
        sinea.start();
        sinea.connect(audioCtx.destination);
        var sineb = audioCtx.createOscillator();
        sineb.frequency.value = 523.25;
        sineb.type = "sine";
        sineb.start();
        sineb.connect(audioCtx.destination);
        var sinec = audioCtx.createOscillator();
        sinec.frequency.value = 698.46;
        sinec.type = "sine";
        sinec.start();
        sinec.connect(audioCtx.destination);
    }
    function stopAudio() {
        if (audioCtx) {
            audioCtx.close();
        }
    }
    return (
        <div>
            Page Component
            <Chart />
            <button onClick={() => startAudio()}>Start audio</button>
            <button onClick={() => stopAudio()}>Stop audio</button>
        </div>
    )
}

export default Page
