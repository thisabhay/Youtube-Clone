const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyCGscITI4jzyJrz6rbiE6ycKU4KKri0mjY";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
}))
.then(res => res.json())
.then(data => {
   video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
   makeVideoCard(video_data);
})
}
const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
    <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
    <div class="content">
        <img src="${data.channelThumbnail}" class="channel-icon" alt="">
        <div class="info">
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
var input = document.getElementById("myInput");



let searchLink = "https://www.youtube.com/results?search_query=master+video+songs";
let searchLink1 = "https://www.youtube.com/results?search_query=irctc+train+";
let searchLink2 = "https://www.youtube.com/results?search_query=master+video+songs";
let searchLink4 = "https://www.youtube.com/results?search_query=master+video+songs";
let searchLink5 = "https://www.youtube.com/results?search_query=master+video+songs";
let searchLink6 = "https://www.youtube.com/results?search_query=master+video+songs";
let searchLink7 = "https://www.youtube.com/results?search_query=master+video+songs";
let searchLink8 = "https://www.youtube.com/results?search_query=master+video+songs";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
    
})

input.addEventListener('keypress', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
});