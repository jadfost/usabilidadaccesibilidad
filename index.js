		var isPlaying = false;
        var player = videojs("my-video");
        var transcription = $("#transcription-container");
        var transcriptionButton = $("#transcription-button");
		const archivoButton = document.getElementById('transcription-button');
  
		

        // Hide the transcription and the button on page load
        transcription.hide();
        transcriptionButton.text("Mostrar transcripción");

        // Show/hide the transcription when the button is clicked
        transcriptionButton.click(function () {
        if (transcription.is(":visible")) {
            transcription.hide();
            transcriptionButton.text("Mostrar transcripción");
        } else {
            transcription.show();
            transcriptionButton.text("Ocultar transcripción");
        }
        });

        // Obtener el botón y el audio
		const playPauseButton = document.querySelector('#play-pause-audio-button');
		const audioExplanation = document.querySelector('#audio-explanation');

		// Agregar un evento de clic al botón
		playPauseButton.addEventListener('click', function() {
		// Si el audio está reproduciendo, pausarlo y cambiar el icono del botón a play
		if (audioExplanation.paused) {
			audioExplanation.play();
			playPauseButton.classList.add('playing');
		} else {
			// Si el audio está pausado, reproducirlo y cambiar el icono del botón a pausa
			audioExplanation.pause();
			playPauseButton.classList.remove('playing');
		}
		});

		// Agregar un controlador de eventos para el clic
		archivoButton.addEventListener('click', function() {
			// Abrir la página con el archivo
			window.location.href = 'Documentos/transcripcion.pdf';
		  });
