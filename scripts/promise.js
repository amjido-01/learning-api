const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"},
];

const getPost = () => {
    setTimeout(() => {
        let outPut = ''
        posts.forEach((post) => {
            outPut += `<li>${post.title}</li>`
        })
        document.body.innerHTML = outPut;
    },1000)
}

const creatPost = (post, cb) => {
    setTimeout(() => {
        posts.push(post)
        cb()
    },2000)
}


creatPost({title: "post three", body: "this is post three"}, getPost)