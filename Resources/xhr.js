

// === NXBLOX - ROM Loader ===
// Simplified ROM loader using XMLHttpRequest

function loadRom(url, callback) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function () {
		callback(xhr.response);
	};

	xhr.onerror = function () {
		console.error('[XHR] Failed to load ROM:', url);
	};

	xhr.send();
}