// const pathName = window.location.pathname;

// if (pathName.includes('status')) {
//   const mainTweet = document.querySelector('article');
//   const tweetImgs = mainTweet.querySelectorAll('tweetImgs');
//   const sendButton = document.createElement('button');
// }

const addConfigButton = () => {
  const articles = document.querySelectorAll('article');
  articles.forEach((article) => {
    const articleImages = article.querySelectorAll('img');
    if (articleImages.length > 1 && article.querySelectorAll('#raph_curate_button').length === 0) {
      // Check to see if the tweet contains an image, other than the avatar
      const articleImagesFiltered = [];
      articleImages.forEach((articleImage) => {
        if (articleImage.alt === 'Image' && articleImage.src.includes('https://pbs.twimg.com/media/')) {
          articleImagesFiltered.push(articleImage);
        }
      });
      if (articleImagesFiltered.length > 0) {
        const createPopup = () => {
          const imagePreviewElement = document.createElement('div');
          const hashTags = [];
          //   I need some code here that will extract the hashtags from the tweet string
          //   article.querySelector('div[lang="en"]')

          let imagePreviewBox = `
            <style>
                .previewBox {
                    display: flex;
                }
                .previewBox img {
                    width: 40%;
                }
            </style>
          `;
          articleImagesFiltered.forEach((image) => {
            const imgURL = image.src.split('&')[0];
            imagePreviewBox += `
                <div class="previewBox">
                    <img src="${imgURL}">
                    <div>
                        <input type="text">Testing</input>
                    </div>
                </div>
            `;
          });

          imagePreviewElement.innerHTML = imagePreviewBox;

          article.parentElement.appendChild(imagePreviewElement);
        };

        const groupElements = article.querySelector('div[role="group"]');
        const configButton = document.createElement('button');
        configButton.id = 'raph_curate_button';
        configButton.innerHTML = 'Test';
        configButton.onclick = createPopup;
        groupElements.appendChild(configButton);
      }
    }
  });
};

// Adds button as you scroll
let timer = null;
document.addEventListener('scroll', () => {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => { addConfigButton(); }, 200);
}, false);
