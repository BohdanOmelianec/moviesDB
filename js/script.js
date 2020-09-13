
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Анджелика",
            "Скотт Пилигрим против..."
        ]
    };

    const moviesList = document.querySelector('.promo__interactive-list'),
        adv = document.querySelectorAll('.promo__adv img'),
        comedy = document.querySelectorAll('.promo__genre')[0],
        bg = document.querySelectorAll('.promo__bg')[0],
        form = document.querySelector('form.add'),
        inp = form.querySelector('.adding__input');

    function sortAdd(films, element) {
        element.innerHTML = '';
        films.sort();
        films.forEach((mov, i) => {
            element.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${mov}
            <div class="delete"></div>
        </li>`;
        });
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                sortAdd(films, element);
            });
        });
    }

    function removeAdv(content) {
        content.forEach(item => {
            item.remove();
        });
    }

    function makeChanges() {
        comedy.textContent = 'драма';
        bg.style.backgroundImage = 'url(img/bg.jpg)';
    }

    form.addEventListener('submit', () => {
        let newFilm = inp.value;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 21)}...`;
            }
            movieDB.movies.push(newFilm);
            sortAdd(movieDB.movies, moviesList);
        }
        form.reset();
    });

    removeAdv(adv);
    makeChanges();
    sortAdd(movieDB.movies, moviesList);


});