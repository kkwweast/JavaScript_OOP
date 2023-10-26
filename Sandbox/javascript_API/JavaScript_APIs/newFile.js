//Exercise 2 section
searchButton.addEventListener("click", () => {
  const gifImg = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&s=${searchInput.value}`
    .fetch(Url)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      gifImg.src = result.data.images.original.Url;
    });

})
  .catch((errVal) => {
    console.error(errVal);
  });
