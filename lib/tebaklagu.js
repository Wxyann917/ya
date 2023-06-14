const fetch = require("isomorphic-unfetch")
const spotify = require("spotify-url-info")(fetch)
const fs = require("fs")
const setting = JSON.parse(fs.readFileSync('./config.json'))

const pickRandom = (arr) => {
     return arr[Math.floor(Math.random() * arr.length)]
}
const all_url = setting.playlist

exports.tebaklagu = async() => {
    return new Promise(async(resolve, reject) => {
       const playlist_url = pickRandom(all_url)
       const data = await spotify.getData(playlist_url)
       const random = pickRandom(data.trackList)
       var hasil = {
         status: 200,
         creator: 'Irfan H.',
         result: {
           title: random.title,
           artis: random.subtitle,
           preview: random.audioPreview.url,
           music_url: 'https://open.spotify.com/track/'+random.uri.split('track:')[1],
         }
       }
       resolve(hasil)
    }).catch((err) => {
       reject(err)
       return { status: 403, msg: "Server Error!" }
    })
}