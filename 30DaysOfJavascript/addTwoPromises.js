Title: Add Two Promises 
Nr: 2723

var addTwoPromises = async function(promise1, promise2) {
    const [p1, p2] = Promise.allSettled([promise1, promise2]);
    return p1 + p2;
};

