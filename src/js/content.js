// menampilkan konten Laza For U
document.addEventListener('DOMContentLoaded', () => {
    fetch('./pages/lazaforu.html')
        .then(response => response.text())
        .then(data => {
            // Extract the body content from the loaded HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const content = doc.body.innerHTML;
            
            // Inject the content into the container
            document.getElementById('content-container').innerHTML = content;
        })
        .catch(error => console.error('Error loading content:', error));
});
