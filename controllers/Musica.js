// Este script se ejecutará cuando la página se cargue completamente
window.addEventListener('load', (event) => {
  const audio = document.getElementById('backgroundAudio');
  const volumeButton = document.getElementById('volumeButton');
  

  audio.volume = 1.0; 
 audio.play('/downloads/music.wav')
 

  audio.volume = volumeSlider.value;



});

  /*
personas que hicieron este codigo :  Franco Racca
*/