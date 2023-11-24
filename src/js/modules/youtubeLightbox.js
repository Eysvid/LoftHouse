function youtubeLightbox() {
// Селектор для ссылок, на которых нужно вызывать youtubeLightbox
const linksBtnsSelector = 'a[data-youtubeLightbox]';
const tag = document.createElement('script');
const firstScriptTag = document.getElementsByTagName('script')[0];

tag.src = 'https://www.youtube.com/iframe_api';
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Обработчик события клика на ссылках
document.querySelectorAll(linksBtnsSelector).forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const videoId = this.getAttribute('data-youtubeLightbox');
        const href = this.href;
        openYoutubeLightbox(videoId, href);
    });
});

// Функция для открытия лайтбокса и вставки видео
function openYoutubeLightbox(videoId, href) {
    const youtubelightbox = document.getElementById('youtubelightbox');
    const youtubelightboxPlayer = document.getElementById('youtubelightboxPlayer');

    if (youtubelightbox && youtubelightboxPlayer) {
        youtubelightbox.style.display = 'block';

        // Очистить содержимое плеера, если оно уже есть
        while (youtubelightboxPlayer.firstChild) {
            youtubelightboxPlayer.removeChild(youtubelightboxPlayer.firstChild);
        }

        // Создать и вставить iframe для видео
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', href);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');
        youtubelightboxPlayer.appendChild(iframe);
    }
}

function closeLightbox() {
    const lightbox = document.querySelector('.youtubelightbox');
    lightbox.style.display = 'none';

    // Остановить видео
    const iframe = lightbox.querySelector('iframe');
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
}

document.querySelector('.youtubelightbox').addEventListener('click', function (event) {
    if (event.target === this) {
        closeLightbox();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') { 
            closeLightbox();
    }
});

}

export default youtubeLightbox;