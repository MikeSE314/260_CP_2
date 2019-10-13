
function bad_values() {
    let bad = false
    console.log(get("song-title").value)
    if (get("song-title").value === "") {
        bad = true
        get("song-title-error").hidden = false
    }
    if (get("song-artist").value === "") {
        bad = true
        get("song-artist-error").hidden = false
    }
    if (get("song-album").value === "") {
        bad = true
        get("song-album-error").hidden = false
    }
    return bad
}

function hide_errors() {
    get("song-title-error").hidden = true
    get("song-artist-error").hidden = true
    get("song-album-error").hidden = true
    get("song-add-success").hidden = true
}

function add_song(song) {
    songs = JSON.parse(window.localStorage.getItem("songs"))
    songs.push(song)
    window.localStorage.setItem("songs", JSON.stringify(songs))
}

function upload() {
    hide_errors()
    if (bad_values()) {
        return
    }
    let song_title = get("song-title").value
    let song_artist = get("song-artist").value
    let song_album = get("song-album").value
    let song_art = "zzz"
    get("song-title").value = ""
    get("song-artist").value = ""
    get("song-album").value = ""
    console.log(song_title)
    console.log(song_artist)
    console.log(song_album)
    let song = new Object()
    song.title = song_title
    song.artist = song_artist
    song.album = song_album
    song.art = song_art
    add_song(song)
    get("song-add-success").hidden = false
}

$(document).ready(function() {
    hide_errors()
    get("song-submit").addEventListener("click", upload)
})
