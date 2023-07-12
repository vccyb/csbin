


function createSecretHolder(secret) {
  const secretHolder = {}
  secretHolder.secret = secret
  
  secretHolder.getSecret = function (){
    console.log(this.secret)
  }
  secretHolder.setSecret = function(val) {
    this.secret = val
  }
  return secretHolder
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
obj.getSecret()// => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2
