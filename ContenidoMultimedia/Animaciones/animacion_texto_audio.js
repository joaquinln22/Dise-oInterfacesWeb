document.addEventListener("DOMContentLoaded", function() {
	const audio = document.getElementById("audio");
	const animatedText = document.getElementById(".text-animado");

	video.addEventListener("timeupdate", () => {
		// Comprobando si el video ha alcanzado 3 segundos
		if (video.currentTime >= 3) {
			// Agregamos la clase que activa la animación CSS
			animatedBox.classList.add("active");
		}
	});
});