class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        //console.log(`Username: ${this.username}`);
        return this.username
    }

    static createID(){
        return `123`
    }
}

const geetanshu = new User("geetanshu")
//console.log(geetanshu.createID()) //static is used to make something private
console.log(geetanshu.logMe())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","apple@gmail.com")
iphone.logMe()