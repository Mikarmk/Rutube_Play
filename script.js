function embedVideo() {
    const url = document.getElementById('videoUrl').value;
    const videoId = extractVideoID(url);
    if (videoId) {
        const iframe = `<iframe src="https://rutube.ru/play/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        document.getElementById('videoContainer').innerHTML = iframe;
    } else {
        alert('Пожалуйста, введите корректный ссылку');
    }
}

function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:rutube\.ru\/(?:video\/|play\/embed\/|.*[?&]v=))([a-zA-Z0-9_-]+)/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
}
