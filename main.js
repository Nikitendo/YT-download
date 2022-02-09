const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

// ytdl('https://www.youtube.com/watch?v=U3S4l5DCBxE', { quality: 'highestvideo' })
// .pipe(fs.createWriteStream('video6.mp4'));

const ref = 'https://www.youtube.com/watch?v=U3S4l5DCBxE';
async function getTitle(ref) {
    let ttitle = (await ytdl.getInfo(ref)).videoDetails.title
    console.log(ttitle)
}
// var iinfo
// ytdl.getInfo(ref).then(info => {
// iinfo = info.videoDetails.title
// console.log('title:', info.videoDetails.title);
// })
// console.log(iinfo)
let ttl = getTitle(ref)
console.log(ttl)