const getPost = async () => {
  const rsp = await fetch('https://giacomo.one/siku/data/records.json');
  const data = await rsp.json();
  return data;
};

export { getPost };
