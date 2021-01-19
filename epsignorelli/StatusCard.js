class StatusCard{

    constructor(){
        this.status = document.getElementById("status")
    } 

    mostraStatus(dados){
        let cardStatus = ""

            cardStatus +=`
            <div class= "cardStatus">
            <ul>
            <li class="profile-stats-item-active">
              <a>
                <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                <span class="profile-stats-item profile-stats-item-number">${dados.usuario[0].quantidade_tweets}</span>
              </a>
            </li>
            <li>
              <a>
                <span class="profile-stats-item profile-stats-item-label">Following</span>
                <span class="profile-stats-item profile-stats-item-number">${dados.usuario[0].seguindo}</span>
              </a>
            </li>
            <li>
              <a>
                <span class="profile-stats-item profile-stats-item-label">Followers</span>
                <span class="profile-stats-item profile-stats-item-number">${dados.usuario[0].seguidores}</span>
              </a>
            </li>
            <li>
              <a>
                <span class="profile-stats-item profile-stats-item-label">Likes</span>
                <span class="profile-stats-item profile-stats-item-number">${dados.usuario[0].likes}</span>
              </a>
            </li>
          </ul>
                        
            </div>
            
            `

       this.status.innerHTML = cardStatus

     };


    }  
