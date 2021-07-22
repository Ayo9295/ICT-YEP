// const seconds =2000;

// setTimeout(() => {
//     }, seconds);

//     console.log("I will show up first");
    
let done = true 
const isitDoneYet = new promise((resolve, reject) => {
    if (done) {
        const WorkDone = "Here's what i built"
        resolve(workDone)
    }else {
        const why = "still working on something else"
        reject(why)
    }
})