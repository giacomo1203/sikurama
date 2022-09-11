const getPost = async () => {
    const rsp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await rsp.json();
    return data;
};

export { getPost };
