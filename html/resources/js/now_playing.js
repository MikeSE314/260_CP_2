function changeLyrics(song) {
    let url = "https://api.lyrics.ovh/v1/" + song.artist + "/" + song.title
    fetch(url).then(function(response) {
        console.log(response)
        return response.json()
    }).then(function(json) {
        console.log(json)
        get('lyrics-body').innerHTML = json.lyrics.replace(/\n/g, "<br>")
    }).catch(function(error) {
        get('lyrics-body').innerHTML = "No lyrics found for " + song.title + "."
    })
}

function displayLyrics(song) {
    $('#lyrics-modal').modal()
    get('modal-title').innerHTML = song.title
    get('lyrics-body').innerHTML = "Loading . . ."
    changeLyrics(song)
}

function populate() {
    let song_list = get('song-list')
    console.log('2')
    song_list.innerHTML = ''
    let songs = JSON.parse(window.localStorage.getItem('songs'))
    songs.forEach(function(song) {
        let song_child = null;
        if (song.art === 'zzz') {
            song_child = makeSmallSongNoPic(song)
        } else {
            song_child = makeSmallSongWithPic(song)
        }
        song_child.title = song.title
        song_child.artist = song.artist
        song_child.addEventListener('click', function() {
            displayLyrics(song)
        })
        song_list.appendChild(song_child)
    })
}

$(document).ready(function() {
    populate()
})
