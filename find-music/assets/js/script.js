const apiUrl = "http://localhost:3000/music";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const result = await axios.get(apiUrl);
    showMusicList(result.data);
  } catch (error) {
    console.error(error);
  }
});

const showMusicList = (musicData) => {
  const musicList = document.querySelector(".music_list");

  musicData.forEach((music) => {
    const musicItem = document.createElement("li");
    musicItem.classList.add("music_item");
    musicItem.innerHTML = `
    <img
      src="${music.coverImg}" alt="${music.album}"
    />
    <h3>${music.title}</h3>
    <p>${music.artist}</p>
    <p>${music.album} (${music.releaseYear})</p>
    <button onclick="openModal('${music.youtubeLink}')">Listen</button>
    `;
    musicList.appendChild(musicItem);
  });
};

const openModal = (youtubeLink) => {
  const modal = document.querySelector(".youtube_modal");
  const modalYoutubeLink = document.querySelector(".youtube_modal_link");
  modalYoutubeLink.href = youtubeLink;

  modal.style.display = "flex";

  const closeModal = () => {
    modal.style.display = "none";
  };

  document
    .querySelector(".youtube_modal_close")
    .addEventListener("click", closeModal);
};
