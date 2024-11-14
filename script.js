var currentSongIndex =  0;
var songs = [
    { name: "TU KYA JAANE", artist: "Yashika Sikka", audio: "Tu Kya Jaane.mp3", image: "chamkila.jpg" },
    { name: "AKHIYAAN GULAAB", artist: "Mitraz", audio: "Akhiyaan Gulaab.mp3", image: "akhiyaan.jpg" },
    { name: "VE HAANIYAAN", artist: "Danny", audio: "haniya.mp3", image: "haaniya.jpg" },
    { name: "HEER AASMANI", artist: "Shekhar", audio: "Heer Aasmani.mp3", image: "heer.jpg" },
    { name: "IN ANKHON KI MASTI", artist: "Asha Bhosle", audio: "ankhon.mp3", image: "ankhon.png" },
    { name: "HUMNE TUMKO DEKHA", artist: "Shailendra Singh", audio: "humne.mp3", image: "hamne.jpg" },
    { name: "LAG JA GALE", artist: "Lata Mangeshkar", audio: "lag.mp3", image: "lag.jpg" },
    { name: "AJEEB DASTAN HAI YEH", artist: "Lata Mangeshkar", audio: "ajib.mp3", image: "ajeeb.jpg" },
    { name: "MAIN AGAR KAHOON", artist: "Sonu Nigam", audio: "main.mp3", image: "main.jpg" },
    { name: "BAIRI PIYA", artist: "Shreya Ghoshal", audio: "bairi.mp3", image: "bairi.jpg" },
    { name: "TUM HI HO", artist: "Arijit Singh", audio: "tum.mp3", image: "tum.jpg" },
    { name: "DHOOM MACHALE", artist: "Sunidhi Chauhan", audio: "dhoom.mp3", image: "dhoom.jpg" },
    { name: "PEHLE BHI MAIN", artist: "Vishal Mishra", audio: "pehle.mp3", image: "pehle.jpg" },
    { name: "OH MAAHI", artist: "Arijit Singh", audio: "omaahi.mp3", image: "omaahi.jpg" },
    { name: "HUSN", artist: "Anuv Jain", audio: "husn.mp3", image: "husn.jpg" },
     { name: "LUTT PUTT GAYA", artist: "Arijit Singh", audio: "lutt.mp3", image: "lutt.jpg" },
     { name: "DO GALLAN", artist: "Neha Kakkar", audio: "do.mp3", image: "do.jpg" },
     { name: "JEENA JEENA", artist: "Jyoti Rajpurohit", audio: "jyoti.m4a", image: "jeena.jpg" },
     { name: "KITHE CHALIYE TU", artist: "Jubin Nautiyal", audio: "kithe.mp3", image: "kithe.jpg" },
     { name: "TUJH MEIN RAB DIKHTA HAI", artist: "Jai Kdn", audio: "tujh.mp3", image: "tujh.jpg" },
     { name: "AAJ SAJEYA", artist: "Alaya", audio: "aaj.mp3", image: "aaj.jpg" },
     { name: "RADHA", artist: "Shreya Ghoshal", audio: "radha.mp3", image: "radha.jpg" },
     { name: "LONDON THUMAKDA", artist: "Neha Kakkar", audio: "london.mp3", image: "london.jpg" },
     { name: "DILLIWALI GIRLFRIEND", artist: "Sunidhi Chauhan", audio: "dilli.mp3", image: "dilli.jpg" }
];

function updatePlayer(index)
 {
    var song = songs[index];
    document.getElementById('songName').innerText = song.name;
    document.getElementById('artistName').innerText = song.artist;
    var audio = document.getElementById('audioPlayer');
    audio.src = song.audio;
    audio.play();
    document.getElementById('player').style.display = 'block';
    document.getElementById('image').style.backgroundImage = 'url(' + song.image + ')'; 
    currentSongIndex = index;
 
 }
 for (let i = 1; i <= songs.length; i++) {
    const linkId = 'song-link-' + i;
    const index = i - 1;
    const link = document.getElementById(linkId);
    if (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            updatePlayer(index);
        });
    } 
}
function downloadSong() {
    var audio = document.getElementById('audioPlayer');
    var source = audio.src;
    var link = document.createElement('a');
    link.href = source;
    link.download = source.substr(source.lastIndexOf('/') + 1);
    link.click();
}
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer(currentSongIndex);
}
document.getElementById('audioPlayer').addEventListener('ended', function() {
    playNext();
});
function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer(currentSongIndex);
}


