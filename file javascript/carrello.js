
document.addEventListener('DOMContentLoaded',
    function () {

        function getbyid(id) {
            return document.getElementById(id)
        }


        //    ---------cambio dati del carrello-----------

        const cestino = getbyid('cestino')
        const cestino2 = getbyid('cestino2')
        const finestra = getbyid('finestra')
        const finestra2 = getbyid('finestra2')
        const buttonselezione = getbyid('selezione')
        const divselezione = getbyid('seleziona-prodotto')
        const subtotale = getbyid('subtotaledx')
        const subtotale1 = getbyid('subtotaledx1')
        const totale = getbyid('totaledx')
        const totale1 = getbyid('totaledx1')
        const subtotale2 = getbyid('subtotaledx2')
        const totale2 = getbyid('totaledx2')
        const subtotale3 = getbyid('subtotaledx3')
        const totale3 = getbyid('totaledx3')
        const carrello = getbyid('carrello')


        cestino.addEventListener('click',
            function () {

                finestra.classList.add('hidden')


                if ((carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello2.PNG" alt=""></a>') && (finestra.classList.contains('hidden'))) {
                    carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello1.PNG" alt=""></a>'
                }

                if ((carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello1.PNG" alt=""></a>') && (finestra2.classList.contains('hidden'))) {
                    carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello0.PNG" alt=""></a>'
                }



                if (finestra.classList.contains('hidden')) {

                    subtotale.classList.add('hidden')

                    subtotale2.classList.remove('hidden')

                    totale.classList.add('hidden')

                    totale2.classList.remove('hidden')


                }

                if (finestra2.classList.contains('hidden')) {

                    subtotale.classList.add('hidden')

                    subtotale1.classList.add('hidden')

                    subtotale2.classList.add('hidden')

                    subtotale3.classList.remove('hidden')

                    totale.classList.add('hidden')

                    totale1.classList.add('hidden')

                    totale2.classList.add('hidden')

                    totale3.classList.remove('hidden')

                    divselezione.classList.remove('hidden')
                }

            })

        cestino2.addEventListener('click',
            function () {

                finestra2.classList.add('hidden')


                if ((carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello2.PNG" alt=""></a>') && (finestra2.classList.contains('hidden'))) {
                    carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello1.PNG" alt=""></a>'
                }

                if ((carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello1.PNG" alt=""></a>') && (finestra.classList.contains('hidden'))) {
                    carrello.innerHTML = '<a href="pagina4.html"><img src="../immagini/loghi/Carrello0.PNG" alt=""></a>'
                }



                if (finestra2.classList.contains('hidden')) {

                    subtotale.classList.add('hidden')

                    subtotale1.classList.remove('hidden')

                    totale.classList.add('hidden')

                    totale1.classList.remove('hidden')
                }


                if (finestra.classList.contains('hidden')) {

                    subtotale.classList.add('hidden')

                    subtotale1.classList.add('hidden')

                    subtotale2.classList.add('hidden')

                    subtotale3.classList.remove('hidden')

                    totale.classList.add('hidden')

                    totale1.classList.add('hidden')

                    totale2.classList.add('hidden')

                    totale3.classList.remove('hidden')

                    divselezione.classList.remove('hidden')
                }

            })



        if (finestra2.classList.contains('hidden')) {

            subtotale.classList.add('hidden')

            subtotale3.classList.remove('hidden')

            totale.classList.add('hidden')

            totale3.classList.remove('hidden')
        }

        // bottone che riporta alla prima pagina quando il carrello è vuoto

        buttonselezione.addEventListener('click',
            function () {

                location.href = "pagina1.html"

            })


        //    ---------modifiche codice promozionale-----------

        const freccia = getbyid('freccia')
        const codice = getbyid('codice')
        const applica = getbyid('applica')

        freccia.addEventListener('click',
            function () {

                if (codice.classList.contains('hidden')) {

                    codice.classList.remove('hidden')

                    freccia.innerHTML = '<img src="../immagini/loghi/freccia3.png" alt=""></img>'

                } else {
                    codice.classList.add('hidden')

                    freccia.innerHTML = '<img src="../immagini/loghi/freccia4.png" alt=""></img>'

                }



            })


        applica.addEventListener('click',
            function () {

                codice.classList.add('hidden')

            })


































    })




