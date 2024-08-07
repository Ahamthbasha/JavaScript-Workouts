const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 1");
        resolve("success1");
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 2");
        resolve("success2");
    }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 3");
        resolve("success3");
    }, 1000);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 4");
        reject("error occurred");
    }, 1500);
});
Promise.all([promise1, promise2, promise3])
    .then((res) => {
        console.log("All promises resolved:", res);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
Promise.all([promise1, promise2, promise4])
    .then((res) => {
        console.log("All promises resolved:", res);
    })
    .catch((err) => {
        console.log("Error with promise4:", err);
    });
