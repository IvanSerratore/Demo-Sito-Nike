
document.addEventListener('DOMContentLoaded',
    function () {

        function getbyid(id) {
            return document.getElementById(id)
        }


        const spedizionebutton = getbyid('spedizione')
        const ritirobutton = getbyid('ritiro')
        const modalitaspedizione = getbyid('modalita-spedizione')
        const modalitaritiro = getbyid('modalita-ritiro')
        const spedizione = getbyid('parte1sx')
        const ritiro = getbyid('parte1dx')
        const continua = getbyid('continua')
        const continua2 = getbyid('continua2')
        const salvaidati = getbyid('salvaidati')
        const indirizzo2 = getbyid('indirizzo2')
        const bottonesalva = getbyid('button-save')

        // bottonesalva.addEventListener('click',
        // function(evt){

        //     evt.preventDefault()


        // })


        continua2.addEventListener('click',
            function () {

                location.href = "pagina6.html"

            })

        continua.addEventListener('click',
            function () {

                location.href = "pagina6.html"

            })

        salvaidati.addEventListener('click',
            function () {

                indirizzo2.value = ''

            })

            // cambio da spediozne a ritiro

        ritirobutton.addEventListener('click',
            function () {

                modalitaritiro.classList.remove('hidden')

                modalitaspedizione.classList.add('hidden')

                spedizione.classList.remove('select')

                ritiro.classList.add('select')

                continua.classList.add('hidden')




            })

        spedizionebutton.addEventListener('click',
            function () {

                modalitaritiro.classList.add('hidden')

                modalitaspedizione.classList.remove('hidden')

                spedizione.classList.add('select')

                ritiro.classList.remove('select')

                continua.classList.remove('hidden')


            })




        // --------------- controllo dati form ----------------------

        function validaForm() {
            var nomeInput = document.getElementById("nome").value;
            var cognomeInput = document.getElementById("cognome").value;
            var emailInput = document.getElementById("email").value;
            var telefonoInput = document.getElementById("telefono").value;
            var indirizzoInput = document.getElementById("indirizzo").value;

            var regexSoloLettere = /^[A-Za-z]+$/;

            if (!regexSoloLettere.test(nomeInput)) {
                alert("Il campo nome deve contenere solo lettere.");
                return false;
            }

            if (!regexSoloLettere.test(cognomeInput)) {
                alert("Il campo cognome deve contenere solo lettere.");
                return false;
            }

            var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regexEmail.test(emailInput)) {
                alert("Il campo email deve avere un formato valido.");
                return false;
            }

            var regexTelefono = /^\d{10}$/;

            if (!regexTelefono.test(telefonoInput)) {
                alert("Il campo telefono deve contenere solo cifre e deve essere lungo 10.");
                return false;
            }

            const regexIndirizzo = /^[a-zA-Z0-9\s.,'-]+$/;

            if (!regexIndirizzo.test(indirizzoInput)) {
                alert("Il campo telefono deve contenere lettere e numero civico");
                return false;
            }


            return true;
        }


        // ------controllo campo carta di credito-----


        function validaForm() {

            const numerocarta = getbyid('numerocarta').value;
            const scadenza = getbyid('scadenza').value;
            const controllo = getbyid('controllo').value;

            var regexTelefono = /^\d{10}$/;

            if (!regexTelefono.test(numerocarta)) {
                alert("Il campo telefono deve contenere solo cifre e deve essere lungo 10.");
                return false;
            }

            if (!regexTelefono.test(scadenza)) {
                alert("Il campo telefono deve contenere solo cifre e deve essere lungo 10.");
                return false;
            }

            if (!regexTelefono.test(controllo)) {
                alert("Il campo telefono deve contenere solo cifre e deve essere lungo 10.");
                return false;
            }



            return true;
        }

       
    })