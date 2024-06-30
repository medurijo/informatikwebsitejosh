function openLightbox(lightboxNumber) {
    document.getElementById('lightbox' + lightboxNumber).style.display = 'block'; 
}

function closeLightbox(lightboxNumber) {
    document.getElementById('lightbox' + lightboxNumber).style.display = 'none'; 
}

function currentSlide(n, lightboxNumber) {
    showSlide(n, lightboxNumber); 
}

function showSlide(n, lightboxNumber) {
    var slides = document.querySelectorAll('#lightbox' + lightboxNumber + ' .lightbox-slide'); 
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; 
    }
    slides[n - 1].style.display = 'block'; 
}
