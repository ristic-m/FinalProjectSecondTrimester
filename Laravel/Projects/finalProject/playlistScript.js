const serverName = 'http://localhost:8082/'

const homeSongs = async () => {
    try {
        const response = await axios.get(serverName + 'api/songs', {
            params: {
                id: 1,
            },
        })

        const songs = response.data

        const songContainer = document.querySelector('.songContainer')

        songs.forEach(function (songComponent, index) {
            const songComponents = document.createElement('div')
            songComponents.dataset.songId = songComponent.id
            songComponents.dataset.artistId = songComponent.artist_id

            songComponents.classList.add('songComponent')

            const titleSong = document.createElement('h5')
            const songCover = document.createElement('img')
            const audioSong = document.createElement('audio')
            const srcSong = document.createElement('source')
            const artistName = document.createElement('p')
            const deleteButton = document.createElement('a')

            deleteButton.setAttribute('href','#')
            deleteButton.setAttribute('class','deleteSongButton')
            deleteButton.innerText = 'Delete'

            songCover.setAttribute('src', songComponent.img)
            songCover.classList.add('songCover')

            audioSong.setAttribute('controls', '')

            srcSong.setAttribute('src', songComponent.src)
            audioSong.append(srcSong)

            titleSong.innerText = songComponent.song

            songComponents.append(songCover)
            songComponents.append(titleSong)
            songComponents.append(artistName)
            songComponents.append(audioSong)
            songComponents.append(deleteButton)

            songContainer.append(songComponents)



        })
    } catch (error) {
        console.log(error)
    }
}


const homeArtists = async () => {
    try {
        const response = await axios.get(serverName + 'api/artists')
        const artists = response.data
        const songs = document.querySelectorAll('.songComponent')

        songs.forEach(function (songComponent, index) {
            const artistId = songComponent.dataset.artistId
            const artistList = []
            artistId.split(',').forEach(function (singleArtist, singleArtistIndex) {
                artists.forEach(function (singleArtistTable) {
                    if (singleArtist == singleArtistTable.id) {
                        artistList.push(singleArtistTable.artist)
                    }
                })
            })
            const artistListString = artistList.join(', ')
            songComponent.querySelector('p').innerText = artistListString
        })
    } catch (error) {
        console.log(error)
    }
}


;(async () => {
    await homeSongs()
    await homeArtists()
})()
