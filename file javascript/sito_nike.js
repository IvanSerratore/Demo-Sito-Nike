

document.addEventListener('DOMContentLoaded',
    function () {

        function getbyid(id) {
            return document.getElementById(id)
        }

        // ----------------cambio scritte fascia3 -----------

        const giro1 = getbyid('giro1')
        const giro2 = getbyid('giro2')
        const giro3 = getbyid('giro3')
        const giro4 = getbyid('giro4')

        arraygiro = [giro1, giro2, giro3, giro4]



        for (let index = 0; index < arraygiro.length; index++) {
            const elementgiro = arraygiro[index];
            
            
            const setintervalID = setInterval(function () {

              
            const casualnumber = Math.floor(Math.random() * 4 + 1);
                
                if(casualnumber == 1){
                    giro1.classList.remove('hidden')
                    giro2.classList.add('hidden')
                    giro3.classList.add('hidden')
                    giro4.classList.add('hidden')
                }

                if(casualnumber == 2){
                    giro1.classList.add('hidden')
                    giro2.classList.remove('hidden')
                    giro3.classList.add('hidden')
                    giro4.classList.add('hidden')
                }

                if(casualnumber == 3){
                    giro1.classList.add('hidden')
                    giro2.classList.add('hidden')
                    giro3.classList.remove('hidden')
                    giro4.classList.add('hidden')
                }

                if(casualnumber == 4){
                    giro1.classList.add('hidden')
                    giro2.classList.add('hidden')
                    giro3.classList.add('hidden')
                    giro4.classList.remove('hidden')
                }

            }, 2000)


        }


        // ----------------cambio scritte fascia3 -----------

        // ----------------cambio immagini novita fascia5 -----------

        const buttonbacknovita = getbyid('backnovita')
        const buttonnextnovita = getbyid('nextnovita')
        const novita1 = getbyid('novita1')
        const novita2 = getbyid('novita2')
        const novita3 = getbyid('novita3')
        const novita4 = getbyid('novita4')
        const novita5 = getbyid('novita5')



        buttonnextnovita.addEventListener('click',
            function () {

                if (novita4.classList.contains('hidden')) {
                    novita1.classList.add('hidden')
                    novita4.classList.remove('hidden')
                    buttonbacknovita.classList.remove('colore')
                } else if (novita5.classList.contains('hidden')) {
                    novita2.classList.add('hidden')
                    novita5.classList.remove('hidden')
                    buttonnextnovita.classList.add('colore')
                }

            })

        buttonbacknovita.addEventListener('click',
            function () {

                if (novita2.classList.contains('hidden')) {
                    novita2.classList.remove('hidden')
                    novita5.classList.add('hidden')
                    buttonnextnovita.classList.remove('colore')
                }
                else if (novita1.classList.contains('hidden')) {
                    novita1.classList.remove('hidden')
                    novita4.classList.add('hidden')
                    buttonbacknovita.classList.add('colore')
                }

            })



        


        // ----------------cambio immagini scarpe fascia6 -----------

        const buttonbackscarpe = getbyid('backscarpe')
        const buttonnextscarpe = getbyid('nextscarpe')
        const scarpa1 = getbyid('scarpa1')
        const scarpa2 = getbyid('scarpa2')
        const scarpa3 = getbyid('scarpa3')
        const scarpa4 = getbyid('scarpa4')
        const scarpa5 = getbyid('scarpa5')
        const scarpa6 = getbyid('scarpa6')



        buttonnextscarpe.addEventListener('click',
            function () {

                if (scarpa4.classList.contains('hidden')) {
                    scarpa1.classList.add('hidden')
                    scarpa4.classList.remove('hidden')
                    buttonbackscarpe.classList.remove('colore')
                } else if (scarpa5.classList.contains('hidden')) {
                    scarpa2.classList.add('hidden')
                    scarpa5.classList.remove('hidden')
                } else if (scarpa6.classList.contains('hidden')) {
                    scarpa3.classList.add('hidden')
                    scarpa6.classList.remove('hidden')
                    buttonnextscarpe.classList.add('colore')
                }

            })

        buttonbackscarpe.addEventListener('click',
            function () {

                if (scarpa3.classList.contains('hidden')) {
                    scarpa3.classList.remove('hidden')
                    scarpa6.classList.add('hidden')
                    buttonnextscarpe.classList.remove('colore')
                }
                else if (scarpa2.classList.contains('hidden')) {
                    scarpa2.classList.remove('hidden')
                    scarpa5.classList.add('hidden')
                }
                else if (scarpa1.classList.contains('hidden')) {
                    scarpa1.classList.remove('hidden')
                    scarpa4.classList.add('hidden')
                    buttonbackscarpe.classList.add('colore')
                }

            })

    

        // ----------------cambio immagini sport fascia7 -----------

        const buttonbacksport = getbyid('backsport')
        const buttonnextsport = getbyid('nextsport')
        const sport1 = getbyid('sport1')
        const sport2 = getbyid('sport2')
        const sport3 = getbyid('sport3')
        const sport4 = getbyid('sport4')
        const sport5 = getbyid('sport5')
        const sport6 = getbyid('sport6')


        buttonnextsport.addEventListener('click',
            function () {

                if (sport4.classList.contains('hidden')) {
                    sport1.classList.add('hidden')
                    sport4.classList.remove('hidden')
                    buttonbacksport.classList.remove('colore')
                } else if (sport5.classList.contains('hidden')) {
                    sport2.classList.add('hidden')
                    sport5.classList.remove('hidden')
                } else if (sport6.classList.contains('hidden')) {
                    sport3.classList.add('hidden')
                    sport6.classList.remove('hidden')
                    buttonnextsport.classList.add('colore')
                }

            })

        buttonbacksport.addEventListener('click',
            function () {

                if (sport3.classList.contains('hidden')) {
                    sport3.classList.remove('hidden')
                    sport6.classList.add('hidden')
                    buttonnextsport.classList.remove('colore')
                }
                else if (sport2.classList.contains('hidden')) {
                    sport2.classList.remove('hidden')
                    sport5.classList.add('hidden')
                }
                else if (sport1.classList.contains('hidden')) {
                    sport1.classList.remove('hidden')
                    sport4.classList.add('hidden')
                    buttonbacksport.classList.add('colore')
                }

            })




        // ----------------cambio immagini banner  fascia8-----------

        const buttonbackbanner = getbyid('backbanner')
        const buttonnextbanner = getbyid('nextbanner')
        const banner1 = getbyid('banner1')
        const banner2 = getbyid('banner2')
        const banner3 = getbyid('banner3')
        const banner4 = getbyid('banner4')
        const banner5 = getbyid('banner5')



        buttonnextbanner.addEventListener('click',
            function () {


                if (banner4.classList.contains('hidden')) {
                    banner1.classList.add('hidden')
                    banner4.classList.remove('hidden')
                    buttonbackbanner.classList.remove('colore')
                } else if (banner5.classList.contains('hidden')) {
                    banner2.classList.add('hidden')
                    banner5.classList.remove('hidden')
                    buttonnextbanner.classList.add('colore')
                }

            })

        buttonbackbanner.addEventListener('click',
            function () {

                if (banner2.classList.contains('hidden')) {
                    banner2.classList.remove('hidden')
                    banner5.classList.add('hidden')
                    buttonnextbanner.classList.remove('colore')
                }
                else if (banner1.classList.contains('hidden')) {
                    banner1.classList.remove('hidden')
                    banner4.classList.add('hidden')
                    buttonbackbanner.classList.add('colore')
                }

            })



        
    })
