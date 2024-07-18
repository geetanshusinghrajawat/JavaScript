class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constuctor(username,email,password){
        Super(username)
        this.email = email
        this.password= password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher ("chai","chai@email.com","123" )

chai.addCourse()