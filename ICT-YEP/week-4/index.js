// const greeting = (person: string) => {
//     console.log('good day'+person);
// };
// greeting('Daniel');
var userAccount = /** @class */ (function () {
    function userAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return userAccount;
}());
var user = new userAccount("murphy", 1);
console.log (user)