
const weather = (pos) => {
    
    const API_KEY = "a2a44b9f27b1f370dce8b97d7282d04d";
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=Kr&units=metric`;
    // console.log(pos)
    const tempEl = document.querySelector('.temp span');
    const cityEl = document.querySelector('.city span');


    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data);
        tempEl.innerText = data.main.temp;
        cityEl.innerText = data.name;
    });

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