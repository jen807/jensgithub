
const weather = (pos) => {
    
    const API_KEY = "a2a44b9f27b1f370dce8b97d7282d04d";

    const locations = [
        {
            name: "현재위치",
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "부산",
            lat: 35.1796,
            lon: 129.0756,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "대구",
            lat: 35.8714,
            lon: 128.6014,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "서울",
            lat: 37.5665,
            lon: 126.9780,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "인천",
            lat: 37.4563,
            lon: 126.7052,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "광주",
            lat: 35.1595,
            lon: 126.8526,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "대전",
            lat: 36.3504,
            lon: 127.3845,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "울산",
            lat: 35.5384,
            lon: 129.3114,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "수원",
            lat: 37.2636,
            lon: 127.0286,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "춘천",
            lat: 37.8813,
            lon: 127.7298,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "제주",
            lat: 33.4996,
            lon: 126.5312,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "청주",
            lat: 36.6424,
            lon: 127.4890,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        },
        {
            name: "전주",
            lat: 35.8219,
            lon: 127.1480,
            bg_img: 'url("https://cdn.newsworker.co.kr/news/photo/202402/320707_323919_350.png")'
        }
    ];

    let index = 0;
    
    const updateWeather = () => {
        
        const {lat, lon, name, bg_img} = locations[index];

       
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=Kr&units=metric`;
    // console.log(pos)

    const tempEl = document.querySelector('.temp span');
    const cityEl = document.querySelector('.city span');
    const boxEl = document.querySelector('.box');


    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data);
        tempEl.innerText = data.main.temp;
        cityEl.innerText = name;
        boxEl.style.backgroundImage = bg_img;

    });

    index = (index + 1) % locations.length;
    

    };

    updateWeather();
    
    setInterval(updateWeather, 3000);
}; 



navigator.geolocation.getCurrentPosition(weather);



// *변수의 범위(변수 스코프)

// =>1.전역변수
// =>전체 영역에서 사용할 수 있는 변수로 함수 안에 작성하지 않음

// 2. 지역변수
// =>함수 내부에서만 사용할 수 있는 변수로 함수 밖에서는 사용 불가

// a2a44b9f27b1f370dce8b97d7282d04d



// =>대한민국 내에서 지역이 바뀌고 5분에 한번씩 온도 갱신
// =>나만의 블로그글을 쓰기 그날 배우고 정리된 것들을 요약해서 글을 쓰기

// 인스타그램에서 댓글 input창에 작성하면 댓글이 추가되면서 보이는 기능