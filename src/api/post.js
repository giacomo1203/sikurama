const path = 'https://giacomo.one/sikuapi/songs';

const getPost = async (id = '') => {
  const paramId = id ? `/${id}` : '';
  const rsp = await fetch(`${path}${paramId}`);
  const data = await rsp.json();
  return data;
};

const createSong = async (payload) => {
  const rsp = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await rsp.json();
  return data;
};

const editSong = async (payload) => {
  const rsp = await fetch(`${path}/${payload.id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await rsp.json();
  return data;
};

const deleteSong = async (id) => {
  const rsp = await fetch(`${path}/${id}`, {
    method: 'DELETE',
  });
  const data = await rsp.json();
  return data;
};

export { getPost, createSong, editSong, deleteSong };
