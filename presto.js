// inizio swiper1
const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// fine swiper1

// inizio variabili
let numero1 = document.querySelector(`#numero1`);
let numero2 = document.querySelector(`#numero2`);
let numero3 = document.querySelector(`#numero3`);
let check = true;
// fine variabili


// inizio function
function createInterval(n, element, time) {
    let counter = 0;
    
    let interval = setInterval(()=>{
        if(counter < n){
            counter++; 
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
        
    },time);
    setTimeout(()=>{
        check = true;
    },30000);
}
// fine function

// inizio observer

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if (entry.isIntersecting && check) {
            createInterval(200, numero1, 120);
            createInterval(300, numero2, 80);
            createInterval(3000, numero3, 8); 
            check = false;
        }
    })
});

observer.observe(numero1);
// fine observer

let reviews = [
    {user: 'Luca', description: 'Il miglior sito di sempre', rank: 5},
    {user: 'Matteo', description: 'È un sito ben progettato', rank: 3},
    {user: 'Sonia', description: 'Un design veramente pessimo', rank: 2},
    {user: 'Marta', description: 'Adoro Harry Potter', rank: 5},
    {user: 'Tonio', description: 'Molto meglio i Pokémon', rank: 1},
]

let swiperWrapper2 = document.querySelector('.swiper-wrapper2');
reviews.forEach((recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide2');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <div class="card-review d-flex flex-column justify-content-center">
    <p class="h4">${recensione.user}</p>
    <div class="d-flex justify-content-center star mt-3 mb-5">
    </div>
    <p class="lead">${recensione.description}</p>
    </div>`;
    swiperWrapper2.appendChild(div);
    
});

let stars = document.querySelectorAll(`.star`);

stars.forEach((star, index)=>{
    for(let i = 1; i <= reviews[index].rank; i++){
        let icona = document.createElement('i');
        icona.classList.add('fa-solid', 'fa-star');
        star.appendChild(icona);
    }
    let difference = 5 - reviews[index].rank;
        for(let i = 1; i <= difference; i++){
        let icona = document.createElement('i');
        icona.classList.add('fa-regular', 'fa-star');
        star.appendChild(icona);
    }
});


const swiper2 = new Swiper('.swiper2Custom', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true, 
    observeParents: true,
    // Navigation arrows
    navigation: {
        nextEl: '.next-review',
        prevEl: '.prev-review',
    },
    autoplay: {
        delay: 3000,
    },
});
