function clickHandlers() {
  console.log(event.target);
  if (event.target.matches('#pull')) {
    document.querySelector('body').classList.toggle('show-nav');
    event.preventDefault();
  }
}

// video

// const iFrame = document.querySelector('iframe');
// const videoLinks = document.querySelectorAll('.content-video a');
// videoLinks.forEach(videoLink =>
//   videoLink.addEventListener('click', selectVideo),
// );

// function selectVideo() {
//   removeActiveClass(); // NEW
//   this.classList.add('active'); // NEW
//   const videoToPlay = event.target.getAttribute('href');
//   iFrame.setAttribute('src', videoToPlay);
//   event.preventDefault();
// }

// // NEW
// function removeActiveClass() {
//   videoLinks.forEach(videoLink => videoLink.classList.remove('active'));
// }

//end video

var addContent = function (data) {
  var looped = '';
  for (let i = 0; i < data.results.length; i++) {
    looped += `
      <div class="item">
        <h3>${data.results[i].name}</h3>
      </div>
      `;
  }
  document.querySelector('.content div').innerHTML = looped;
};

var getData = function () {
  fetch(gitHub)
    .then(response => response.json())
    .then(json => addContent(json));
};

var gitHub =
  'https://api.github.com/users/dakota-whitney';

document.addEventListener('click', clickHandlers);

// getData();

if (document.querySelector('.blog')) {
  getData();
}
