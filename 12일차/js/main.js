const users = [

    {
        id: 0,
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&s",
        username: "James",
        imgUrl: "https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb"
    },
    
    {
        id: 1,
        avatarUrl: "https://media.istockphoto.com/id/1181396841/photo/trendy-african-man.jpg?s=612x612&w=0&k=20&c=89F1KJHsttzyiuaJ5M0Rd4tLgiX7ooYDoPw7oNYZ5UI=",
        username: "Aliya",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2QHD9DgCKTgUqH0Ld1pPKkfg7zRCBYx8tg&s"
    },
    
    {
        id: 2,
        avatarUrl: "https://www.esri.com/about/newsroom/wp-content/uploads/2024/06/arcnews-article-simplifyinghow-5-768x433.jpg",
        username: "user 3",
        imgUrl: "https://static.ivanti.com/sites/marketing/media/images/products/user-workspace-mgr/workspace-manager-hero.jpg"
    },

];

const wrapEl = document.querySelector('.wrap');
const avatarAll = document.querySelectorAll('.avatar');
const usernameAll = document.querySelectorAll('.username')
const bgAll = document.querySelectorAll('.bg')
const menuEl = document.querySelector('.menu')
const menuWrapEl = document.querySelector('.menu_wrap')
let isCliked = true;

for(let i = 0; i < users.length; i++){
    avatarAll[i].innerHTML = `<img src="${users[i].avatarUrl}" alt="${users[i].username}">`;
    usernameAll[i].innerText = users[i].username;
    bgAll[i].innerHTML = `<img src="${users[i].imgUrl}" alt="${users[i].username}">`;
};

const heartHandler = (e) => {
    if(e.target.classList.contains('fa-regular')){
        e.target.parentNode.innerHTML = `<i class="fa-solid fa-heart full_heart"></i>`
    }else if (e.target.classList.contains('full_heart')){
        e.target.parentNode.innerHTML = `<i class="fa-regular fa-heart"></i>`
    };
};

const menuHandler = () => {
    if(isCliked){
        menuWrapEl.classList.add('menu_active');
        isCliked = false;
    }else if(!isCliked){
        menuWrapEl.classList.remove('menu_active')
        isCliked = true;
    }
};

menuEl.addEventListener('click',menuHandler)
wrapEl.addEventListener('click', heartHandler)



