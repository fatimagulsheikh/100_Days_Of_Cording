// **Question 143:** Show how to use the `.then()` and `.catch()` methods to handle Promise resolution and rejection.

let check = new Promise ((a, r) => {
    setTimeout(() => {
        let fatima = true
        if (fatima) {
            console.log("Fatima is the student of GIAIC");
            return a(fatima)
        } else {
            console.log("Error");
            return r(fatima)            
        }
    }, 4000)
})
check.then(a => console.log(a)).catch(err => console.log("You have an Error"));