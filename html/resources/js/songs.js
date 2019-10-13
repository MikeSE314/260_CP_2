function populate() {
    let song_list = get("song-list")
    song_list.innerHTML = ""
    let songs = JSON.parse(window.localStorage.getItem("songs"))
    songs.forEach(function(song) {
        if (song.art === "zzz") {
            song_list.appendChild(makeBigSongNoPic(song))
        } else {
            song_list.appendChild(makeBigSongWithPic(song))
        }
    })
}

$(document).ready(function() {
    populate()
})
