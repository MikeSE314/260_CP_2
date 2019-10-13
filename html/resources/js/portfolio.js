function get(e) {
    return document.getElementById(e)
}

function makeSmallSongNoPic(song) {
    let row = document.createElement("div")
    let div = document.createElement("div")
    let ico = document.createElement("span")
    let title = document.createElement("span")
    let artist = document.createElement("span")
    row.appendChild(div)
    div.appendChild(ico)
    div.appendChild(title)
    div.appendChild(artist)
    //
    row.classList.add("row")
    row.classList.add("top-buffer")
    //
    div.classList.add("col-md-8")
    div.classList.add("col-xs-10")
    div.classList.add("col-md-offset-2")
    div.classList.add("col-xs-offset-1")
    div.classList.add("song")
    //
    ico.classList.add("glyphicon")
    ico.classList.add("glyphicon-music")
    ico.classList.add("small-song-icon")
    //
    title.classList.add("h5")
    title.classList.add("song-title")
    title.innerHTML = song.title
    //
    artist.classList.add("h5")
    artist.classList.add("song-artist")
    artist.innerHTML = song.artist
    //
    return row
}

function makeSmallSongWithPic(song) {
    let row = document.createElement("div")
    let div = document.createElement("div")
    let ico = document.createElement("span")
    let img = document.createElement("img")
    let title = document.createElement("span")
    let artist = document.createElement("span")
    row.appendChild(div)
    div.appendChild(ico)
    ico.appendChild(img)
    div.appendChild(title)
    div.appendChild(artist)
    //
    row.classList.add("row")
    row.classList.add("top-buffer")
    //
    div.classList.add("col-md-8")
    div.classList.add("col-xs-10")
    div.classList.add("col-md-offset-2")
    div.classList.add("col-xs-offset-1")
    div.classList.add("song")
    //
    ico.classList.add("small-song-icon")
    //
    img.classList.add("small-song-pic")
    img.src = song.art
    //
    title.classList.add("h5")
    title.classList.add("song-title")
    title.innerHTML = song.title
    //
    artist.classList.add("h5")
    artist.classList.add("song-artist")
    artist.innerHTML = song.artist
    //
    return row
}

function makeBigSongNoPic(song) {
    let row = document.createElement("div")
    let ico = document.createElement("div")
    let title = document.createElement("p")
    let artist = document.createElement("p")
    row.appendChild(ico)
    row.appendChild(title)
    row.appendChild(artist)
    //
    row.classList.add("col-sm-2")
    row.classList.add("col-xs-4")
    row.classList.add("playlist-art")
    row.classList.add("playlist-art-small")
    //
    ico.classList.add("glyphicon")
    ico.classList.add("glyphicon-music")
    ico.classList.add("big-song-pic")
    //
    title.classList.add("h5")
    title.classList.add("song-title")
    title.classList.add("song-title-big")
    title.innerHTML = song.title
    //
    artist.classList.add("h5")
    artist.classList.add("song-artist")
    artist.classList.add("song-artist-big")
    artist.innerHTML = song.artist
    //
    return row
}

function makeBigSongWithPic(song) {
    let row = document.createElement("div")
    // let ico = document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement("p")
    let artist = document.createElement("p")
    // row.appendChild(ico)
    // ico.appendChild(img)
    row.appendChild(img)
    row.appendChild(title)
    row.appendChild(artist)
    //
    row.classList.add("col-sm-2")
    row.classList.add("col-xs-4")
    row.classList.add("playlist-art")
    row.classList.add("playlist-art-small")
    //
    // ico.classList.add("big-song-icon")
    //
    img.classList.add("big-song-pic")
    img.src = song.art
    //
    title.classList.add("h5")
    title.classList.add("song-title")
    title.classList.add("song-title-big")
    title.innerHTML = song.title
    //
    artist.classList.add("h5")
    artist.classList.add("song-artist")
    artist.classList.add("song-artist-big")
    artist.innerHTML = song.artist
    //
    return row
}

function setUpSongs() {
    if (window.localStorage.getItem("songs") === null) {
        let url = "./resources/base_songs.json"
        fetch(url).then(function(response) {
            return response.json()
        }).then(function(json) {
            window.localStorage.setItem("songs", JSON.stringify(json))
            console.log(JSON.parse(window.localStorage.getItem("songs")))
        })
    }
}

$(document).ready(function() {
    setUpSongs()
})
