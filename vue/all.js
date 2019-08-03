var wrap = new Vue({
    el: ".wrap",
    data:{
        // 關於版面
            // 顯示點選專輯內容
            bShowAlbum: false,
            iAlbumNum: -1,
            iShowAlbumRecommend: 0,
            
        // 關於歌曲
            // 專輯清單
            vAlbums: [
                {
                    'name': 'But I Must Explain To You (Deluxe)',
                    'albumImg': './img/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg',
                    'year': '2019',
                    'date': '2019.7.15'
                },
                {
                    'name': 'itself',
                    'albumImg': './img/bangkit-ristant-cuIwZaJAFS8-unsplash.jpg',
                    'year': '2018'
                },
                {
                    'name': 'Solo',
                    'albumImg': './img/noah-silliman-gzhyKEo_cbU-unsplash.jpg',
                    'year': '2017'
                },
                {
                    'name': 'Happiness',
                    'albumImg': './img/piron-guillaume-NM77255WWVA-unsplash.jpg',
                    'year': '2015'
                },
                {
                    'name': 'No More Excuses',
                    'albumImg': './img/steve-johnson-IykhuSC5jgw-unsplash.jpg',
                    'year': '2013'
                },
            ],
            // 存放推薦專輯
            vAlbumsRecommend:[],
            // 推薦歌手清單
            vMoreSinger: [
                {
                    'singerImg': './img/jakob-owens-lkMJcGDZLVs-unsplash.jpg',
                    'singerName': 'Mountain John'
                },
                {
                    'singerImg': './img/taras-chernus-SazOmY5p0AQ-unsplash.jpg',
                    'singerName': 'Huston 1990'
                },
                {
                    'singerImg': './img/ryan-holloway-P2FNYWOlgZs-unsplash.jpg',
                    'singerName': 'BLAST'
                }
            ],
            // 歌曲清單
            vSongList: [
                [
                    {
                        'name': 'Adventure',
                        'url': './music/bensound-adventure.mp3',
                        'albumNum': 0,
                        'time': '3:07'
                    },
                    {
                        'name': 'A New Beginning',
                        'url': './music/bensound-anewbeginning.mp3',
                        'albumNum': 0,
                        'time': '2:35'
                    },
                    {
                        'name': 'Birth Of A Hero',
                        'url': './music/bensound-birthofahero.mp3',
                        'albumNum': 0,
                        'time': '3:49'
                    },
                    {
                        'name': 'Better Days',
                        'url': './music/bensound-betterdays.mp3',
                        'albumNum': 0,
                        'time': '2:34'
                    },
                    {
                        'name': 'New Dawn',
                        'url': './music/bensound-newdawn.mp3',
                        'albumNum': 0,
                        'time': '5:13'
                    },
                    {
                        'name': 'Of Elias Dream',
                        'url': './music/bensound-ofeliasdream.mp3',
                        'albumNum': 0,
                        'time': '4:59'
                    },
                    {
                        'name': 'Once Again',
                        'url': './music/bensound-onceagain.mp3',
                        'albumNum': 0,
                        'time': '3:52'
                    }
                ],
                [
                    {
                        'name': 'New Dawn',
                        'url': './music/bensound-newdawn.mp3',
                        'albumNum': 1,
                        'time': '5:13'
                    },
                    {
                        'name': 'Of Elias Dream',
                        'url': './music/bensound-ofeliasdream.mp3',
                        'albumNum': 1,
                        'time': '4:59'
                    },
                    {
                        'name': 'Once Again',
                        'url': './music/bensound-onceagain.mp3',
                        'albumNum': 1,
                        'time': '3:52'
                    }
                ],
                [
                    {
                        'name': 'piano Moment',
                        'url': './music/bensound-pianomoment.mp3',
                        'albumNum': 2,
                        'time': '1:05'
                    },
                    {
                        'name': 'Slow Motion',
                        'url': './music/bensound-slowmotion.mp3',
                        'albumNum': 2,
                        'time': '3:27'
                    },
                    {
                        'name': 'Summer',
                        'url': './music/bensound-summer.mp3',
                        'albumNum': 2,
                        'time': '3:37'
                    },
                    {
                        'name': 'New Dawn',
                        'url': './music/bensound-newdawn.mp3',
                        'albumNum': 2,
                        'time': '5:13'
                    },
                    {
                        'name': 'Of Elias Dream',
                        'url': './music/bensound-ofeliasdream.mp3',
                        'albumNum': 2,
                        'time': '4:59'
                    },
                    {
                        'name': 'Once Again',
                        'url': './music/bensound-onceagain.mp3',
                        'albumNum': 2,
                        'time': '3:52'
                    }
                ],
                [
                    {
                        'name': 'Tenderness',
                        'url': './music/bensound-tenderness.mp3',
                        'albumNum': 3,
                        'time': '2:04'
                    },
                    {
                        'name': 'Tomorrow',
                        'url': './music/bensound-tomorrow.mp3',
                        'albumNum': 3,
                        'time': '4:55'
                    },
                    {
                        'name': 'Enigmatic',
                        'url': './music/bensound-enigmatic.mp3',
                        'albumNum': 3,
                        'time': '2:27'
                    }
                ],
                [
                    {
                        'name': 'piano Moment',
                        'url': './music/bensound-pianomoment.mp3',
                        'albumNum': 4,
                        'time': '1:05'
                    },
                    {
                        'name': 'Slow Motion',
                        'url': './music/bensound-slowmotion.mp3',
                        'albumNum': 4,
                        'time': '3:27'
                    },
                    {
                        'name': 'Summer',
                        'url': './music/bensound-summer.mp3',
                        'albumNum': 4,
                        'time': '3:37'
                    }
                ]
            ],
            // 存放 Top Song
            vTopSong: [],
            // Top Song 數量
            iTopSongNum: 5,

        // 關於播放
            // 播放中的 boolean
            bPlayMusic: false,
            // 播放的歌曲index
            iPlayMusic: -1,
            song: '',
            songSrc: ''
    },
    methods:{
        //隨機生成 Top Song
        getTopSong: function(){
            const albumNum = (this.vAlbums.length);
            const topSong = this.vSongList[Math.floor(Math.random()* albumNum)][Math.floor(Math.random()*6)];
            if(topSong !== undefined && this.vTopSong.indexOf(topSong) == -1){
                return topSong;
            }else{
                return this.getTopSong();
            }
        },
        insertTopSong: function(){
            for(let i = 0; i < this.iTopSongNum; i++){
                const topSong = this.getTopSong();
                this.vTopSong.push(topSong);                
            }
        },
        // 選擇要觀看的專輯
        choseAlbum: function($index){
            this.bShowAlbum = true;
            this.iAlbumNum = $index;
            // 推薦專輯清單
            this.vAlbumsRecommend = []; // Reset
            this.iShowAlbumRecommend = 0; // Reset
            for(let key in this.vAlbums){
                if(parseInt(key) !== $index){
                    this.vAlbumsRecommend.push(this.vAlbums[key]);
                }
            }
        },
        // 設定被選取音樂
        setMusicurl: function($key, top = false){
            let sMusicUrl;
            if(this.song){
                this.pauseMusic();
            }
            if(top){
                sMusicUrl = this.vTopSong[$key].url
            }else{
                sMusicUrl = this.vSongList[iAlbumNum][$key].url
            }
            this.song = new Audio(sMusicUrl);
            this.playMusic($key);
        },
        // 播放音樂
        playMusic: function($key){
            this.bPlayMusic = $key;
            this.song.play();
        },
        // 暫停音樂
        pauseMusic: function(){
            this.song.pause();
        }
    },
    mounted(){
        this.insertTopSong();
    },
})