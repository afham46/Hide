function show(type) {
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.style.display = (type === 'all' || img.classList.contains(type)) ? 'block' : 'none';
    });
}