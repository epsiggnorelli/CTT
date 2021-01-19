const objUsuario = new Usuario()
const objUsuarioCard = new UsuarioCard ()

const objStatus = new Status()
const objStatusCard = new StatusCard()

const objTweets = new Tweets()
const objTweetsCard = new TweetsCard()

const objFollow = new Follow()
const objFollowCard = new FollowCards()


objUsuario.buscaUsuario()
.then(function(resp){
    resp.json()
    .then(function(dados){
        objUsuarioCard.mostraUsuario(dados)
    })
})

objTweets.buscaTweets()
.then(function(resp){
    resp.json()
    .then(function(dados){
        objTweetsCard.mostraTweetsCard(dados)
    })
})

objFollow.buscaFollow()
.then(function(resp){
    resp.json()
    .then(function(dados){
        objFollowCard.mostraSeguidores(dados)
    })
})


objStatus.buscaStatus()
.then(function(resp){
    resp.json()
    .then(function(dados){
        objStatusCard.mostraStatus(dados)
    })
}) 