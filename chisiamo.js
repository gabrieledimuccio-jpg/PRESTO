 let opener = document.querySelector('.opener');
 let circle = document.querySelector('.circle');

 let fondatori = [
    {name: 'Godric', surname: 'Grifondoro', description:`Godric Grifondoro è stato un potente mago medievale. Proveniente da una brughiera (Godric's Hollow), era noto per essere un abile duellante e spadaccino, valorizzando coraggio, audacia e nobiltà. Sosteneva l'ammissione dei nati babbani, distinguendosi per tolleranza.`, url:'./media/GodricGrif.jpg'},
    {name: 'Tosca', surname: 'Tassorosso', description:`Tosca Tassorosso è famosa per la sua natura inclusiva, leale e gentile. Strega gallese dell'alto medioevo, valorizzava il duro lavoro, la pazienza e la correttezza, accettando tutti gli studenti senza distinzioni. Era un'esperta in incantesimi legati al cibo e celebre per la sua Coppa.`, url:'./media/ToscaTass.jpg'},
    {name: 'Corinna', surname: 'Corvonero', description:`Corinna Corvonero è celebre per la sua intelligenza, creatività e per aver fondato l'omonima casa, valorizzando saggezza e apprendimento. Strega scozzese del Medioevo, era famosa per un diadema magico che aumentava l'intelletto di chi lo indossava.`, url:'./media/CorinnaCorvonero.jpg'},
    {name: 'Salazar', surname: 'Serpeverde', description:`Salazar Serpeverde è noto per essere un mago oscuro, rettilofono e un acceso sostenitore della purezza di sangue. Proveniente probabilmente dalle paludi dell'Inghilterra orientale, era abile in Legilimanzia e Arti Oscure, valorizzando ambizione e astuzia. `, url:'./media/SalazarSerpeverde.jpg'}
];

fondatori.forEach((fondatore)=> {
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${fondatore.url})`;
    circle.appendChild(div);
});
let movedDivs = document.querySelectorAll('.moved');

let check = false;
let flipCard = document.querySelector('.flip-card');
opener.addEventListener('click', ()=>{
    if (check == false) {
        opener.style.transform = `rotate(45deg)`;
        movedDivs.forEach((moved, i)=>{
            let angle = (360 * i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
        check = true;
    }else{
        check = false;
        opener.style.transform = `rotate(0deg)`;
        movedDivs.forEach((moved, i)=>{
            moved.style.transform = `rotate(0deg) translate(0px)`;
        });
        flipCard.classList.add('d-none');
    }
});

 let innerFace = document.querySelector('.inner-face');
 let cardName = document.querySelector('#cardName');
 let cardName2 = document.querySelector('#cardName2');
 let cardDescription = document.querySelector('#cardDescription');

movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click', ()=>{
        flipCard.classList.remove('d-none');
        let fondatore = fondatori[i];
        innerFace.style.backgroundImage = `url(${fondatore.url})`;
        cardName.innerHTML = fondatore.name; 
        cardName2.innerHTML = fondatore.surname; 
        cardDescription.innerHTML = fondatore.description;
    })
})
