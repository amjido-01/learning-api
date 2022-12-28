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

const creatPost = (post) => {
    setTimeout(() => {
        posts.push(post)
    },2000)
}

getPost()
creatPost({title: "post three", body: "this is post three"})