const input = document.getElementById("userTxt");
const button = document.getElementById("submitBtn");
const imageDiv = document.getElementById("imageDiv");

const API_KEY = "sPSYzQl7EVU9j6UL1oQ3TWnPGHSiSROA";

async function fetchRandomGif(tag) {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=pg`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data?.data?.images?.downsized_large?.url) {
      const imageUrl = data.data.images.downsized_large.url;
      displayGif(imageUrl);
    } else {
      displayMessage("No GIF found for this tag.");
    }

  } catch (error) {
    console.error("Error fetching GIF:", error);
    displayMessage("Something went wrong!");
  }
}

function displayGif(url) {
  imageDiv.innerHTML = "";
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Random GIF";
  imageDiv.appendChild(img);
}

function displayMessage(message) {
  imageDiv.innerHTML = `<p style="color: red; font-weight: bold;">${message}</p>`;
}

button.addEventListener("click", () => {
  const tag = input.value.trim();

  if (tag !== "") {
    fetchRandomGif(tag);
    imageDiv.style.display = "block";
  } else {
    imageDiv.innerHTML = `<p style="color: gray;">Please enter a tag to search a GIF.</p>`;
  }
});
