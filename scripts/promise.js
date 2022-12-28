const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"},
];

const getPost = () => {
    setTimeout(() => {
        let outPut = '';
        posts.forEach((post) => {
            console.log(post.title)
        })
    },1000)
}

const creatPost = (post) => {
    setTimeout(() => {
        let result = posts.push(post)
        console.log(post.title)
    },2000)
}

getPost()
creatPost({title: 'post three', body: 'this is post three'})