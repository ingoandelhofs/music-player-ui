
const songs = document.getElementsByClassName('song');

for (let i = 0; i < songs.length; i++) {
    let song = songs[i];

    song.addEventListener('click', event => {
        let songName = song.getElementsByClassName('info')[0].getElementsByTagName('h3')[0].textContent;
        let artistName = song.getElementsByClassName('info')[0].getElementsByTagName('p')[0].textContent;
        let src = song.getElementsByClassName('cover')[0].getElementsByTagName('img')[0].getAttribute('src');

        document.getElementById('song-name').innerHTML = '';
        document.getElementById('song-artist').innerHTML = '';

        document.getElementById('song-name').innerHTML = songName;
        document.getElementById('song-artist').innerHTML = artistName;
        document.getElementById('song-cover').setAttribute('src', src);
    });
}