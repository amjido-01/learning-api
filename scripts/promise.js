const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"},
];

const returnPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let outPut = '';
            posts.forEach((post) => {
                outPut += `<li>${post.title}</li>`
            });
            document.body.innerHTML = outPut;
        }, 1000)
    })
}

// const creatPost =  (post, cb) => {
//     const timing = async setTimeout(() => {
//         posts.push(post);
//         await cb()
//     }, 3000)
// }

creatPost({title: "post three", body: "this is post three"}, returnPromise)