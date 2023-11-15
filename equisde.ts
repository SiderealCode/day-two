const dude : {firstName: string, lastName: string, height: string, iq: string, fullName: () => string} = {
    firstName : "aLELjandro",
    lastName : "PAPAcen",
    height : "tall af",
    iq : "Over 9000",
    fullName : function() {
        
        return dude.firstName + " " + dude.lastName;

    },


}

console.log(dude)
console.log(dude.fullName())
