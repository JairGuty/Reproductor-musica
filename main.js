document.addEventListener('DOMContentloaded', () => {
    // MY TRACK LIST 
    const tracksList = [
        {
          audioSrc:
            './tracks/01-Wiz Khalifa - Amber Ice [Prod. By I.D. Labs Productions] [www.SongsLover.com].mp3',
          coverSrc: './images/wizKhalifa.jpg',
          name: 'Wiz Khalifa',
          desc: 'Wiz Khalifa - Amber Ice',
          id: 0,
        },
        {
          audioSrc:
            './tracks/Martin Garrix & Tiësto - The Only Way Is Up (Official Music Video).mp3',
          coverSrc: './images/martinG.jpg',
          name: 'Martin Garrix',
          desc: 'Ft. Tiesto Only Way Is Up',
          id: 1,
        },
        {
          audioSrc: './tracks/Space Buddha - Self Therapy.mp3',
          coverSrc: './images/spaceBuddha.jpg',
          name: 'Space Buddha',
          desc: 'Self Therapy',
          id: 2,
        },
        {
          audioSrc: "./tracks/Drake - God's Plan.mp3",
          coverSrc: './images/godsplan.jpg',
          name: 'Drake',
          desc: "God's plan",
          id: 3,
        },
        {
          audioSrc: './tracks/Joyner Lucas & Lil Baby - Ramen & OJ.mp3',
          coverSrc: './images/ramenlucas.png',
          name: 'Joyner Lucas & Lil Baby',
          desc: 'Ramen & OJ',
          id: 4,
        },
        {
          audioSrc:
            './tracks/Pop Smoke - For The Night (Audio) ft. Lil Baby, DaBaby.mp3',
          coverSrc: './images/popsmoke.jpg',
          name: 'Pop Smoke ft. Lil Baby, DaBaby',
          desc: 'For The Night',
          id: 5,
        },
    ];
    
    // VARIABLES 
    const currentTrackName = document.querySelector('header h3');
    const currentTrackDesc = document.querySelector('header p');
    const currentTrackCover = document.querySelector('header img');
    const currentTrackAudio = document.querySelector('audio');
    const playPauseBtn = document.querySelector('.event-playPause');
    const muteUnmuteBtn = document.querySelector('.event-muteUnmute');
    const playNextBtn = document.querySelector('.event-next');
    const playPrevBtn = document.querySelector('.event-prev');
    const progress = document.querySelector('.slider-progress');
    const currentTrackTime = document.querySelector('.count-current');
    const finalTrackTime = document.querySelector('.count-final');

    // ADD TRACKS TO MY LIST 
    (function addMyTrackList() {
        for (let track of trackList){
            let li = document.createElement('li');
            li.id=track.id
            li.innerHTML=`
                <span class="track-number">0${track.id}</span>
                <img 
                    class="track-img" 
                    src=${track.coverSrc}
                    alt="track image"
                />
                <div class="track-detail">
                    <p class="track-detail_name">${track.name}</p>
                    <p class="track-detail_desc"><small>${track.desc}</small></p>
                </div>`;
            
            document.querySelector('ul').appendChild(li);
            
            (function (id) {
                li.addEventListener('click', () => {

                })
            })(track.id);
        }
    })();

    let trackId = 0;

    const loadTrack = songId => {
        const song = trackList.find(track => track.id === songId);

        const {audioSrc, coverSrc, name, desc } = song;

        currentTrackName.innerText = name;
        currentTrackDesc.innerText = desc;
        currentTrackName.src=audioSrc;
        currentTrackCover.src = coverSrc;
    };

    const playSelectedTrack = songId => {
        
    }
});