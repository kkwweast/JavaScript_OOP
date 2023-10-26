
console.log("EXERCISE 1:\n==========\n") 
const searchButton = document.querySelector("#submitSearch");
const searchInput = document.querySelector("#searchWord");
const gifImG = document.querySelector("#imageContainer > img");
const feedbackPara = document.querySelector("#feedback");
console.log(gifImG);
const apiKey = "jhWjTV7Ua0hTlJjVrIixCpBZmntmjj35";
 

//Exercise 2 Section
searchButton.addEventListener("click", () => {  
const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=dancing`;
fetch(url)
.then((response) =>response.json())
.then((result) => {
 console.log(result);

  if(Array.isArray(result.data))  {
    gifImG.src = result.data.images.original.url;
    searchInput.value = "";
  } else {  
    gifImG.src = result.data.images.original.url;
    feedbackPara.textContent = "No gifs found";
    searchInput.value = "";
  }
})
  .catch((errVal) => {
    console.error(errVal);
    feedbackPara.textContent = errVal.message;
  }
);







})