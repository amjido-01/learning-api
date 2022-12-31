let listItems = document.getElementById("listitems")
const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"},
];

const getPost = () => {
    setTimeout(() => {
        let outPut = '';
        posts.forEach((post) => {
           outPut += post
        });
        // document.body.innerHTML = outPut;
        listItems.append(outPut)

    },1000);

}

const creatPost = (post, cb) => {
    setTimeout(() => {
        let result = posts.push(post)
        cb()
    },3000)
}

creatPost({title: "post three", body: "this is post three"}, getPost)
