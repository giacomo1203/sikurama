const getPost = async () => {
  // const rsp = await fetch('https://giacomo.one/siku/data/records.json');
  const rsp = await fetch('https://giacomo.one/sikuapi/songs');
  const data = await rsp.json();
  return data;
};

export { getPost };
