document.addEventListener("DOMContentLoaded", function() {
	const video = document.getElementById("video");
	const animatedBox = document.getElementById("animatedBox");

	video.addEventListener("timeupdate", () => {
		// Comprobando si el video ha alcanzado 3 segundos
		if (video.currentTime >= 3) {
			// Agregamos la clase que activa la animación CSS
			animatedBox.classList.add("active");
		}
	});
});