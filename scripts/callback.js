const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"},
];

// const getPost = () => {
//     setTimeout(() => {
//         let outPut = '';
//         posts.forEach((post) => {
//             console.log(post.title)
//             outPut += `<li>${post.body}</li>`
//         });
//         document.body.innerHTML = outPut;
//     },1000);

// }

// const creatPost = (post, cb) => {
//     setTimeout(() => {
//         let result = posts.push(post)
//         console.log(post.title)
//         cb()
//     },3000)
// }



const getData = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

const  creatPost = async (post, cb) => {
    posts.push(post);
    await cb()
}

creatPost({title: 'post three', body: 'this is post three'}, creatPost)