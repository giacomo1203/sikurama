const getNews = async () => {
  const sheetId = '1cc-vhaV01h-tGGcKhJ6GSNFrb31NJlCGgYOnvu-nHr4';
  const range = 'news!A2:C100';
  const apiKey = 'AIzaSyCkdxh9XIrr1p824DBpKy7z3GLuhJMziS8';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  const rsp = await fetch(url);
  const data = await rsp.json();
  return data;
};

export { getNews };
