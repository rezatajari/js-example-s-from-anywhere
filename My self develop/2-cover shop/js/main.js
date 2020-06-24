// ======================== variables =====================

const buy = document.getElementsByClassName('btn_buy');
const tbody = document.getElementById('tbody');
// ======================== eventlisteners =====================

for (let i = 0; i < buy.length; i++) {
    buy[i].addEventListener('click', getCard)
}
document.addEventListener('DOMContentLoaded', getInfoOnLoad)
tbody.addEventListener('click', removeCover);
// ======================== function =====================

function getInfoOnLoad() {
    const cardKey = getInfoFromLS();
    cardKey.forEach(function(cardInfo) {
        showInfoToBasket(cardInfo);
    });
}

function getCard(e) {
    const card = e.target.parentElement;
    const cardInfo = {
        filmImage: card.querySelector('.card-img-top').src,
        filmTitle: card.querySelector('.film_title').textContent,
        filmYear: card.querySelector('.film_year').textContent,
        filmPrice: card.querySelector('.film_price').textContent,
        filmId: card.querySelector('.film_id').getAttribute('data-id')
    }
    showInfoToBasket(cardInfo);
    addInfoToLS(cardInfo);
}

function showInfoToBasket(cardInfo) {
    tbody.innerHTML += `  <tr>
   <td class="p-3"><img src="${cardInfo.filmImage}"  width="80" alt="cover"></td>
  <td class="p-3"><h4>${cardInfo.filmTitle}</h4></td>
  <td class="p-3"><h5>${cardInfo.filmYear}</h5></td>
  <td class="p-3"><h5>${cardInfo.filmPrice}</h5></td>
  <td class="p-3"><a href="#" data-id="${cardInfo.filmId}" class="text-danger remove">X</a></td>
</tr>`
}

function addInfoToLS(cardInfo) {
    const cardKey = getInfoFromLS();
    cardKey.push(cardInfo);
    localStorage.setItem('cardKey', JSON.stringify(cardKey));
}

function getInfoFromLS() {
    let cardKey;
    const getInfoFromKey = localStorage.getItem('cardKey');
    if (getInfoFromKey) cardKey = JSON.parse(getInfoFromKey);
    else cardKey = [];
    return cardKey;
}

function removeCover(e) {
    e.preventDefault();
    const cardInfoInBasket = e.target.classList.contains('remove');
    if (cardInfoInBasket) {
        const filmId = e.target.getAttribute('data-id');
        e.target.parentElement.parentElement.remove();
        const cardKey = getInfoFromLS();
        cardKey.forEach(function(cardInfo, index) {
            if (cardInfo.filmId === filmId) cardKey.splice(index, 1);
        });
        localStorage.setItem('cardKey', JSON.stringify(cardKey))
    }
}