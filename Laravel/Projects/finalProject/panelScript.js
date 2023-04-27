
    var fileInput = document.getElementById('song_cover');
    fileInput.addEventListener('change', function() {
    var file = this.files[0];
    if (!file || file.type !== 'audio/mpeg') {
    alert('Please select an MP3 file.');
    this.value = '';
}
});