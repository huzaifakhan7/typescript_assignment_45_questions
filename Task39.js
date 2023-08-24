"use strict";
function makeAlbum(artist, title, tracks) {
    const album = {
        artist,
        title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Artist 1", "Album Title 1");
const album2 = makeAlbum("Artist 2", "Album Title 2", 12);
const album3 = makeAlbum("Artist 3", "Album Title 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
