
const gUser = []
const LOG_USER = 'user'

export const userService = {
  getUser,
  signup,
  addMove

}




function addMove(contact, amount) {
  const user = JSON.parse(localStorage.getItem(LOG_USER))
  const move = createMove(contact, amount)
  user.moves.unshift(move)
  user.coins -= amount
  localStorage.setItem(LOG_USER, JSON.stringify(user))
}



function signup(name) {
  const logedInUser = createUser(name)
  localStorage.setItem(LOG_USER, JSON.stringify(logedInUser))
  return gUser.push(logedInUser)
}


function getUser() {
  if (gUser) {
    const user = JSON.parse(localStorage.getItem(LOG_USER))
    console.log('service',user);
    return user
}
}


function createUser(name) {
  return {
    _id: _makeId(),
    name,
    coins: 100,
    moves: []
  }
}
function createMove(contact, amount) {
  return {
    _id: _makeId(),
    toId: contact._id,
    to: contact.name,
    createdAt: new Date(Date.now()).toLocaleDateString(),
    amount
  }
}

function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}