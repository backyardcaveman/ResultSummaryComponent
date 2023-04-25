const listEl = document.getElementById('breakdown');

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {
            listEl.insertAdjacentHTML('beforeend', `<li class=${el.class}><img src=${el.icon}><p class=${el.categoryText}>${el.category}</p><p class='score-numerator'>${el.score}</p><p class='score-denominator'>/ 100</p></li>`)
        });
    });