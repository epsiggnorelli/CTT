class UsuarioCard{

    constructor(){
        this.usuario = document.getElementById("profile-header")
    } 

    mostraUsuario(dados){
        let cardUsuario = ""

        localStorage.setItem("dados",dados.usuario[0].nome)

        localStorage.getItem("dados")

            cardUsuario +=
            `
            <div class= "cardUsuario">
                <h3 class="profile-fullname"><a>${dados.usuario[0].nome}</a></h3>
                <h2 class="profile-element"><a>${dados.usuario[0].nome}</a></h2>
                <a class="profile-element profile-website" hrerf=""><i
                    class="octicon octicon-link"></i>&nbsp${dados.usuario[0].usuario};</a>
                <a class="profile-element profile-website" hrerf=""><i
                    class="octicon octicon-location"></i>&nbsp${dados.usuario[0].local};</a>
                <h2 class="profile-element"><i class="octicon octicon-calendar">${dados.usuario[0].cadastro}</i></h2>
                <button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados.usuario[0].nome}</button>
                        
            </div>
            `

       this.usuario.innerHTML = cardUsuario

     };


    }  
