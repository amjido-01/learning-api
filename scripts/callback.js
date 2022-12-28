const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"},
];

const getPost = () => {
    setTimeout(() => {
        let outPut = '';
        posts.forEach((post) => {
            console.log(post.title)
            outPut += `<li>${post.body}</li>`
        });
        document.body.innerHTML = outPut;
    },1000);

}

const creatPost = (post, cb) => {
    setTimeout(() => {
        let result = posts.push(post)
        console.log(post.title)
        cb()
    },3000)
}
