 let opener = document.querySelector('.opener');
 let fondatori = [
    {name: 'Godric', surname: 'Grifondoro', description:`Godric Grifondoro è stato un potente mago medievale, co-fondatore della Scuola di Magia e Stregoneria di Hogwarts. Proveniente da una brughiera (Godric's Hollow), era noto per essere un abile duellante e spadaccino, valorizzando coraggio, audacia e nobiltà. Sosteneva l'ammissione dei nati babbani, distinguendosi per tolleranza.`, url:''},
    {name: 'Tosca', surname: 'Tassorosso', description:`Tosca Tassorosso è famosa per la sua natura inclusiva, leale e gentile. Strega gallese dell'alto medioevo, valorizzava il duro lavoro, la pazienza e la correttezza, accettando tutti gli studenti senza distinzioni. Era un'esperta in incantesimi legati al cibo e celebre per la sua Coppa.`, url:''},
    {name: 'Corinna', surname: 'Corvonero', description:`Corinna Corvonero è celebre per la sua intelligenza, creatività e per aver fondato l'omonima casa, valorizzando saggezza e apprendimento. Strega scozzese del Medioevo, era famosa per un diadema magico che aumentava l'intelletto di chi lo indossava.`, url:''},
    {name: 'Salazar', surname: 'Serpeverde', description:`Salazar Serpeverde è noto per essere un mago oscuro, rettilofono e un acceso sostenitore della purezza di sangue. Proveniente probabilmente dalle paludi dell'Inghilterra orientale, era abile in Legilimanzia e Arti Oscure, valorizzando ambizione e astuzia. `, url:''}
 ]
 let movedDivs = document.querySelectorAll('.moved');
 
 let check = false;
 opener.addEventListener('click', ()=>{
    if (check == false) {
        opener.style.transform = `rotate(45deg)`;
        movedDivs.forEach((moved, i)=>{
            let angle = (360 * i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px)`;
        });
        check = true;
    }else{
        check = false;
        opener.style.transform = `rotate(0deg)`;
        movedDivs.forEach((moved, i)=>{
            moved.style.transform = `rotate(0deg) translate(0px)`;
        });
        
    }
});
