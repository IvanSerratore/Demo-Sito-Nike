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

                if (casualnumber == 1) {
                    giro1.classList.remove('hidden')
                    giro2.classList.add('hidden')
                    giro3.classList.add('hidden')
                    giro4.classList.add('hidden')
                }

                if (casualnumber == 2) {
                    giro1.classList.add('hidden')
                    giro2.classList.remove('hidden')
                    giro3.classList.add('hidden')
                    giro4.classList.add('hidden')
                }

                if (casualnumber == 3) {
                    giro1.classList.add('hidden')
                    giro2.classList.add('hidden')
                    giro3.classList.remove('hidden')
                    giro4.classList.add('hidden')
                }

                if (casualnumber == 4) {
                    giro1.classList.add('hidden')
                    giro2.classList.add('hidden')
                    giro3.classList.add('hidden')
                    giro4.classList.remove('hidden')
                }

            }, 2000)


        }


        // --------------cambio scritte fascia3 -----------


        // -----------foto scarpe verticali 1-A -----------

        const foto1a = getbyid('foto1a')
        const foto2a = getbyid('foto2a')
        const foto3a = getbyid('foto3a')
        const foto4a = getbyid('foto4a')
        const foto5a = getbyid('foto5a')
        const foto6a = getbyid('foto6a')
        const foto7a = getbyid('foto7a')
        const foto8a = getbyid('foto8a')
        const video1a = getbyid('video1a')
        const fotoag = getbyid('fotoag')
        const selezione1 = getbyid('selezione1')
        const selezione2 = getbyid('selezione2')
        const field1a = getbyid('field1a')
        const field2a = getbyid('field2a')
        const field1b = getbyid('field1b')
        const field2b = getbyid('field2b')


        // --------------foto scarpe verticali 1-b------------

        const foto1b = getbyid('foto1b')
        const foto2b = getbyid('foto2b')
        const foto3b = getbyid('foto3b')
        const foto4b = getbyid('foto4b')
        const foto5b = getbyid('foto5b')
        const foto6b = getbyid('foto6b')
        const foto7b = getbyid('foto7b')
        const video1b = getbyid('video1b')
        const fotobg = getbyid('fotobg')



        // --------------BOTTONI-MISURE----------------

        const bottone1 = getbyid('bottone1')
        const bottone2 = getbyid('bottone2')
        const bottone3 = getbyid('bottone3')
        const bottone4 = getbyid('bottone4')
        const bottone5 = getbyid('bottone5')
        const bottone6 = getbyid('bottone6')
        const bottone7 = getbyid('bottone7')
        const bottone8 = getbyid('bottone8')
        const bottone9 = getbyid('bottone9')
        const bottone10 = getbyid('bottone10')
        const bottone11 = getbyid('bottone11')
        const bottone12 = getbyid('bottone12')
        const bottone13 = getbyid('bottone13')
        const bottone14 = getbyid('bottone14')
        const bottone15 = getbyid('bottone15')
        const bottone16 = getbyid('bottone16')
        const bottone17 = getbyid('bottone17')
        const bottone18 = getbyid('bottone18')

        // -------------qui inizia la creazione degli array--------------



        arraybutton = []

        arraybutton.push(bottone1, bottone2, bottone3, bottone4, bottone5, bottone6, bottone7, bottone8, bottone9, bottone10, bottone11, bottone12, bottone13, bottone14, bottone15, bottone16, bottone17, bottone18,)


        array1a = [foto1a, video1a, foto2a, foto3a, foto4a, foto5a,
            foto6a, foto7a, foto8a]



        array1b = [foto1b, video1b, foto2b, foto3b, foto4b, foto5b,
            foto6b, foto7b]



        // --------qui finisce la creazione degli array------------

        // --------scambio tra scarpa nera e scarpa verde----------


        const prezzo = getbyid('prezzo')

        selezione1.addEventListener('click',
            function () {

                field1a.classList.remove('hidden')

                field2a.classList.remove('hidden')

                field1b.classList.add('hidden')

                field2b.classList.add('hidden')

                selezione1.classList.add('border')

                selezione2.classList.remove('border')

                prezzo.innerHTML = '119,99 €'


            })

        selezione2.addEventListener('click',
            function () {

                field1a.classList.add('hidden')

                field2a.classList.add('hidden')

                field1b.classList.remove('hidden')

                field2b.classList.remove('hidden')

                selezione1.classList.remove('border')

                selezione2.classList.add('border')

                prezzo.innerHTML = '99,99 €'

            })

        // -------------sostituzione mouseover scarpe ----------------

        for (let index = 0; index < array1a.length; index++) {
            const element1a = array1a[index];

            let select = ''


            element1a.addEventListener("mouseover",
                () => {

                    select = this

                    this.innerHTML = element1a.innerHTML

                    fotoag.innerHTML = this.innerHTML


                })

        }

        for (let index = 0; index < array1b.length; index++) {
            const element1b = array1b[index];

            let select = ''

            console.log(element1b);

            element1b.addEventListener("mouseover",
                () => {

                    select = this

                    this.innerHTML = element1b.innerHTML

                    fotobg.innerHTML = this.innerHTML

                })

        }


        // -------------Selezione taglia con i bottoni----------------

        for (let index = 0; index < arraybutton.length; index++) {
            const elementbutton = arraybutton[index];


            elementbutton.addEventListener("mouseover",
                function () {

                    this.classList.add('button')

                })

            elementbutton.addEventListener("mouseout",
                function () {

                    this.classList.remove('button')

                })

        }


        for (let index = 0; index < arraybutton.length; index++) {
            const elementbutton = arraybutton[index];

            counter = 0

            elementbutton.addEventListener('click',
                function () {

                    counter++


                    if (counter % 2 == 1) {

                        misura.innerText = this.innerText

                        this.classList.add('button1')



                    } else if (counter % 2 == 0) {

                        counter == 0

                        this.classList.remove('button1')

                    }

                })

        }

        // -------------Selezione Aggiunta al carrello----------------

        const aggiunta = getbyid('aggiunta-carrello')
        const preferiti = getbyid('preferiti')
        const preferiti2 = getbyid('preferiti2')
        const finestra = getbyid('finistra-carrello')
        const finestra2 = getbyid('finistra-carrello2')
        const chiusura = getbyid('riga1dx')
        const chiusura2 = getbyid('chiusura2')
        const chiusura3 = getbyid('chiusura3')
        const fascia1 = getbyid('fascia1')
        const fascia2 = getbyid('fascia2')
        const carrello = getbyid('carrello')
        const misura = getbyid('misura-change')
        const misuraP = getbyid('misura')
        const avviso = getbyid('avviso')
        const avviso2 = getbyid('avviso2')
        const cuore = getbyid('cuore')

        // const per cambio finestra in base alla scarpa
        // quando aggiungo una scarpa al carrello e aggiunta ai preferiti

        const costo = getbyid('costo')
        const scarpa = getbyid('riga2sx')

        aggiunta.addEventListener('click',
            function () {

                for (let index = 0; index < arraybutton.length; index++) {
                    const elementbutton = arraybutton[index];

                    if (selezione2.classList.contains('border')) {

                        costo.innerHTML = '99,99 €'

                        scarpa.innerHTML = '<img src="../immagini/Scarpa_2/6.jpg" alt="">'

                    }
                    else {

                        costo.innerHTML = '119,99 €'

                        scarpa.innerHTML = '<img src="../immagini/Scarpa/4.jpg" alt="">'

                    }


                    if (elementbutton.classList.contains('button1')) {

                        carrello.innerHTML = '<a href="#"><img src="../immagini/loghi/Carrello1.PNG" alt=""></a>'

                        fascia1.classList.add('fascia1')

                        fascia2.classList.add('fascia2')

                        finestra.classList.remove('hidden')

                        const setintervalID = setTimeout(function () {


                            avviso.classList.add('hidden')


                        }, 1000)

                    }


                    if (!elementbutton.classList.contains('button1')) {

                        avviso.classList.remove('hidden')

                    }
                }
            })



        preferiti.addEventListener('click',
            function () {


                if (preferiti2.classList.contains('hidden')) {

                    cuore.innerHTML = '<a href="#"><img src="../immagini/loghi/cuore1.jpg" alt=""></a>'

                    preferiti.classList.add('hidden')

                    preferiti2.classList.remove('hidden')

                    avviso2.classList.remove('hidden')

                }

            })

            // bottoni di chiusura


        chiusura.addEventListener('click',
            function () {


                fascia1.classList.remove('fascia1')

                fascia2.classList.remove('fascia2')

                finestra.classList.add('hidden')

            })

        chiusura2.addEventListener('click',
            function () {


                avviso.classList.add('hidden')

            })

        chiusura3.addEventListener('click',
            function () {


                avviso2.classList.add('hidden')

            })

    })