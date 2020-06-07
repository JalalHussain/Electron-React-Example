const Realm = require('realm')
const  Promise = require('promise')
const USER_SCHEMA = "User"

const UserSchema ={
    name : USER_SCHEMA,
    primaryKey: 'id',
    properties:{
        id:'int',
        name: {type: 'string', indexed: true},
        email: 'string',
    }
}
const databaseOptions = {
    path: 'RealmInNodeJS.realm',
    schema: [UserSchema],
    schemaVersion: 0,
}

const insertNewUser = newUser => new Promise((resolve, reject )=>{
Realm.open(databaseOptions).then(realm =>{
    let filteredUsers = realm.objects(USER_SCHEMA)
        .filtered(`name='${newUser.name.trim()}' AND email ='${newUser.email.trim()}'`)
    if (filteredUsers.length > 0){
    reject("User with the same name and email exists !")
}
realm.write(() =>{
    newUser.id=Math.floor(Date.now())
    realm.create(USER_SCHEMA, newUser)
    resolve(newUser)
    console.log("User has been inserted !")
} )
}).catch((error) => reject(error))
    console.log("User insertion failed")
})


module.exports ={
    insertNewUser
}