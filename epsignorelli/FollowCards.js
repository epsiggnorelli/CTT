class FollowCards{

    constructor() {
        this.follow = document.getElementById("follow") 
    }

    mostraSeguidores(dados){

        let cardFollow = ""

        dados.followers.map(function(elemento){

            cardFollow += `
            
            <div class="cardFollow">
             
              <ol class="tweet-list">
                <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong id="nomeUsuarioFollow">${elemento.nome}</strong>
                      </span>
                      <span class="username" id="usernameFollow">${elemento.usuario}</span>
                    </div>
                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>
              </ol>
            </div>
          `


        });
        this.follow.innerHTML = cardFollow

    }

} 