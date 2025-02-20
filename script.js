document.getElementById('start-button').addEventListener('click', function() {
    startGame();
});

let songs = [
    { name: "손" },
    { name: "미소" },
    { name: "디-데이" },
    { name: "웅크리기" },
    { name: "사실" },
    { name: "그대" },
    { name: "진심" },
    { name: "둘이서" },
    { name: "우리 (feat. 손효진 Of 문없는집)" },
    { name: "오늘도" },
    { name: "인사" },
    { name: "도미노" },
    { name: "내내" },
    { name: "답" },
    { name: "색깔" },
    { name: "지난 날" },
    { name: "여름빛" },
    { name: "마음대로" },
    { name: "사라져" },
    { name: "무슨 일이 있어도 울지는 않네" },
    { name: "일몰" },
    { name: "열두시" },
    { name: "지평선" },
    { name: "고요" },
    { name: "품" },
    { name: "기도" },
    { name: "곁에" },
    { name: "가깝고도 먼" },
    { name: "우리의 시간" },
    { name: ":59" },
    { name: "어떡하라고" },
    { name: "뭘까" },
    { name: "생각의 생각" },
    { name: "그래 바로 지금" },
    { name: "I Feel Like You Do" },
    { name: "고민고민" },
    { name: "별무리" },
    { name: "늦은 새벽" },
    { name: "휘청휘청" },
    { name: "아지랑이" },
    { name: "정전기" },
    { name: "뿌리염색" },
    { name: "CCTV" },
    { name: "아리송해" },
    { name: "토끼춤" },
    { name: "불장난" },
    { name: "개꿈" },
    { name: "각자의 밤" },
    { name: "그대" },
    { name: "25" },
    { name: "마음들" },
    { name: "밤노리" },
    { name: "Am" },
    { name: "눈맞춤" },
    { name: "도담도담" },
    { name: "안부" },
    { name: "기대" },
    { name: "Choom" },
    { name: "한심!" },
    { name: "주말" },
    { name: "소풍" },
    { name: "소노라마" },
    { name: "불빛" },
    { name: "함께" },
    { name: "생" },
    { name: "끝의 시작" },
    { name: "덩그러니" },
    { name: "방" },
    { name: "창문" },
    { name: "푸르른" },
    { name: "잔치" },
    { name: "언젠가" },
    { name: "늦잠" },
    { name: "바람" },
    { name: "목소리" },
    { name: "남겨진 것들" },
    { name: "망상가 (Feat. 손혜은)" },
    { name: "주인공" },
    { name: "멍" },
    { name: "은방울 (원곡: DANIEL)" },
    { name: "SITCOM" },
    { name: "1+1" },
    { name: "서툴러" },
    { name: "88" },
    { name: "Love Love Love" },
    { name: "찬란" },
    { name: "FILM" },
    { name: "Take Seven" },
    { name: "우리는 이곳에" },
    { name: "직진" },
    { name: "COSMOS" },
    { name: "노래나 부를까" },
    { name: "사이" },
    { name: "그늘" },
    { name: "어떤 하루" },
    { name: "축제" },
    { name: "With you" },
    { name: "New Hippie Generation" },
    { name: "여기 있어" },
    { name: "길" },
    { name: "낙하" },
    { name: "발자국" },
    { name: "윤슬" },
    { name: ":00" },
    { name: "CLOVER" },
    { name: "친구" },
    { name: "책상" },
];

let selectedSongs = [];
let round = 1;
let results = [];

function startGame() {
    selectedSongs = [];
    results = [];
    round = 1;
    document.getElementById('result').innerHTML = '';
    showMatch();
}

function showMatch() {
    if (songs.length < 2) {
        document.getElementById('match').innerHTML = "<h2>모든 대결이 끝났습니다!</h2>";
        return;
    }

    const [song1, song2] = getRandomTwoSongs();
    selectedSongs = [song1, song2];

    document.getElementById('match').innerHTML = `
        <div>
            <img src="${song1.image}" alt="${song1.name}" />
            <h2>${song1.name}</h2>
        </div>
        <div>
            <img src="${song2.image}" alt="${song2.name}" />
            <h2>${song2.name}</h2>
        </div>
        <div>
            <button onclick="vote('${song1.name}')">곡1 선택</button>
            <button onclick="vote('${song2.name}')">곡2 선택</button>
        </div>
    `;
}

function getRandomTwoSongs() {
    const randomIndex1 = Math.floor(Math.random() * songs.length);
    let randomIndex2 = Math.floor(Math.random() * songs.length);

    // 같은 곡이 선택되지 않도록
    while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * songs.length);
    }

    return [songs[randomIndex1], songs[randomIndex2]];
}

function vote(selectedSongName) {
    const winner = selectedSongs.find(song => song.name === selectedSongName);
    results.push(winner);
    songs = songs.filter(song => song.name !== selectedSongName); // 선택된 곡은 목록에서 제거

    round++;
    if (round <= 100 && songs.length > 1) {
        showMatch();
    } else {
        showResults();
    }
}

function showResults() {
    const resultHTML = results.map((song, index) => {
        return `<h3>순위 ${index + 1}: ${song.name}</h3>`;
    }).join('');
    document.getElementById('result').innerHTML = `
        <h2>최종 결과</h2>
        ${resultHTML}
    `;
}
