const likeEl = document.querySelector('.fa-regular.fa-heart');

const liketoggle = () => {
    likeEl.classList.toggle('fa-regular');
    likeEl.classList.toggle('fa-solid');
};

likeEl.addEventListener('click', liketoggle);

const formEl = document.querySelector('form');
const commentInput = document.querySelector('.comment');
const commentBox = document.querySelector('.comment_box');
const saveComment = localStorage.length;

formEl.addEventListener('submit', (e) => {
            
   e.preventDefault();
            
   const inputComment = commentInput.value;
   const saveComment = localStorage.length;

   if(inputComment !== null){
        const newComment = document.createElement('p');
        newComment.innerHTML = inputComment;
        commentBox.append(newComment);
        commentInput.value = "";

    console.log('이거안되면바지에똥싼다');

    localStorage.setItem(`COMMENT_${saveComment}`, inputComment);

    }

});    