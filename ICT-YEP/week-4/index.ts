// const greeting = (person: string) => {
//     console.log('good day'+person);
// };
// greeting('Daniel');

interface user {
    name:string;
    id:number;
}
class userAccount {
    name: string;
    id: number;

constructor(name: string,id: number) {
    this.name = name;
    this.id = id;
}
}
const user: user = new userAccount("murphy",1);