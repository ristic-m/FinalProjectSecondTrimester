const serverName = 'http://localhost:8082/'
axios.get(serverName + 'api/songs', {
    params: {
        id: 1,
    }
}).then(function(response){
    // console.log(response.data)
})
const homeSongs = async () => {
    try {
        const response = await axios.get(serverName + "api/songs", {
            params: {
                id: 1,
            }
        })

        const songs = response.data

        const songTitle = songs.map(({song}) => song)
        const songImage = songs.map(({img}) => img)
        const artistId = songs.map(({artist_id}) => artist_id)
        const songSrc = songs.map(({src}) => src)

        const songContainer = document.querySelector('.songContainer')


        var lightbox = document.querySelector('.lightbox')

        songs.forEach(function(songComponent,index){
            const songComponents = document.createElement("div")
            songComponents.dataset.artists = artistId[index]
            console.log(songComponent)
            songComponents.classList.add('songComponent')

            const titleSong = document.createElement('h5')
            const songCover = document.createElement('img')
            const audioSong = document.createElement('audio')
            const srcSong = document.createElement('source')
            const artistName = document.createElement('p')

            songCover.setAttribute('src', songImage[index])
            songCover.classList.add('songCover')


            songCover.addEventListener('click', function (){
                lightbox.style.display = 'flex';
                document.body.style.overflowY = 'hidden'
                lightbox.dataset.current = index
                document.querySelector('.lightbox .songComponent img').src = songComponent.img
                document.querySelector('.lightbox .songComponent h5').innerText = songComponent.song
                document.querySelector('.lightbox .songComponent audio').src = songComponent.src

                const allSongComponents = document.querySelectorAll('.songContainer .songComponent')
                console.log(allSongComponents)
                document.querySelector('.lightbox .songComponent p').innerText = allSongComponents[index].dataset.artists
            })



            audioSong.setAttribute('controls', '')
            srcSong.setAttribute('src', songSrc[index])

            audioSong.append(srcSong)

            titleSong.innerText = songTitle[index]
            songComponents.append(songCover)
            songComponents.append(titleSong)
            songComponents.append(artistName)

            songComponents.append(audioSong)



            songContainer.append(songComponents)

        })
        //     lightbox

        const allSongComponents = document.querySelectorAll('.songContainer .songComponent')
        document.body.addEventListener('keydown', function (e) {
            if (e.key == 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflowY = 'auto'
            } else if (e.key == "ArrowLeft") {
                if (lightbox.dataset.current == 0) {
                    lightbox.dataset.current = allSongComponents.length-1
                } else {
                    lightbox.dataset.current--
                }

                document.querySelector('.lightbox .songComponent img').src = allSongComponents[lightbox.dataset.current].querySelector('img').src
                document.querySelector('.lightbox .songComponent h5').innerText = allSongComponents[lightbox.dataset.current].querySelector('h5').innerText
                document.querySelector('.lightbox .songComponent audio').src = allSongComponents[lightbox.dataset.current].querySelector('audio source').src
                document.querySelector('.lightbox .songComponent p').innerText = allSongComponents[lightbox.dataset.current].dataset.artists
            } else if (e.key == "ArrowRight") {
                if (lightbox.dataset.current == allSongComponents.length-1) {
                    lightbox.dataset.current = 0
                } else {
                    lightbox.dataset.current++
                }
                document.querySelector('.lightbox .songComponent img').src = allSongComponents[lightbox.dataset.current].querySelector('img').src
                document.querySelector('.lightbox .songComponent h5').innerText = allSongComponents[lightbox.dataset.current].querySelector('h5').innerText
                document.querySelector('.lightbox .songComponent audio').src = allSongComponents[lightbox.dataset.current].querySelector('audio source').src
                document.querySelector('.lightbox .songComponent p').innerText = allSongComponents[lightbox.dataset.current].dataset.artists

            }
        })





    } catch (error){
        console.log(error)
    }

}
const homeArtists = async () => {
    try {
        const response = await axios.get(serverName + 'api/artists');
        const artists = response.data;
        const songs = document.querySelectorAll('.songComponent');

        songs.forEach(function (songComponent, index) {
            var artistId = songComponent.dataset.artists;
            artistId = artistId.split(",");
            var artistList = [];

            artistId.forEach(function (singleArtist, singleArtistIndex) {
                artists.forEach(function (singleArtistTable) {
                    if (singleArtist == singleArtistTable.id) {
                        artistList.push(singleArtistTable.artist)
                    }
                });
            });
            songComponent.dataset.artists = artistList;

            var artistListString = artistList.join(', ');
            console.log(artistListString);

            songComponent.querySelector('p').innerText = artistListString;
        });
    } catch (error) {
        console.log(error);
    }
};



(async () => {
    await homeSongs();
    await homeArtists();
})();



