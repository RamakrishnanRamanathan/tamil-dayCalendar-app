const formDate = document.querySelector("#formDate");
const imgContainer=document.querySelector('#dateimg')
formDate.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const dateInput = document.querySelector("#dateInput").value;
  imgContainer.classList.remove('hidden')
  imgContainer.src=`https://www.prokerala.com/general/calendar/imgs/daily/${dateInput}.png`
});

