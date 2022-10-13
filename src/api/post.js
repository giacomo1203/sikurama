const playlist = [
  {
    id: "1",
    title: "Agua Milagro",
    author: "Filiberto Calderón Villasante",
    category: "Huayño calmado",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/agua-milagro.mp3",
    numbers:
      "322\\22/33\\44/33\\44/55.56\\6/6\\56\n544/55.56\\6/6\\5/5\\44/33\\44/55.56\\6/6\\56\n322\\22/33\\44/33\\44/55.56\\6/6\\56",
    lyrics: [],
  },
  {
    id: "2",
    title: "Ron",
    author: "D. R.",
    category: "Diana",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/diana-ron.mp3",
    numbers: "21\\21/23\\3.33/43\\43/45\\5.55\n765\\543/43\\43/45\\5.55",
    lyrics: [],
  },
  {
    id: "3",
    title: "Imillani 1",
    author: "D. R.",
    category: "Imillani",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/imillani-1.mp3",
    numbers:
      "223\\33/221\\1.111./223\\33/445\\[2-5]\n445\\55/443\\3.333.3/32.222\\2/3\\33/445\\[2-5]\n7\\5/6\\5/5\\4/4\\3/32.222\\2/3\\33/455\\[2-5]",
    lyrics: [],
  },
  {
    id: "4",
    title: "Adiós Carmen",
    author: "Aldemir Calderón Aliaga",
    category: "Huayño",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/adios-carmen.mp3",
    numbers:
      "[33-6]\\4/3\\4/3\\4/3\n22\\1/1\\1/233\\33.44/22\\1/1\\1//233\\33/22\\433/3\\344/55\\55.655/5\\566/7\\6/6\\56\n433/3\\344/55\\55/322\\1/233\\3/22\\433/3\\344/55\\55.655/5\\566/7\\6/6\\56\n54/5\\55.655/5\\566/7\\6/6\\56\n6.../3...",
    lyrics: [],
  },
  {
    id: "5",
    title: "Layka (Cholita conimeña)",
    author: "D.R. & C.S. 18 de Julio",
    category: "Huayño",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/layka.mp3",
    numbers:
      "[33-6]\\4/3\\4/3\\4/3\n5/5\\44/5\\44.4/3.33\\344/5\\44.543/55.565\\55.66/7\\6/6\\56\n544/55.565\\55.5/3.33\\344/5\\44.543/55.565\\55.66/7\\6/6\\56\n54/5\\55.66/7\\6/6\\56\n6.../3...",
    lyrics: `I
        Ahora que te he visto, linda cholita conimeña, estoy seguro que tu amor solo será para mí.\n
        Esos ojitos hechiceros, esa boquita pretenciosa, esa pollera tan hermosa, solo será para mí.\n
        Conimeña, solo será para mí.
        \n
        II
        Desgraciadamente abandonaste mi cariño, triste destino el que llevo, nunca fuiste para mí.\n
        El tiempo sanara mis penas y con ellas mis ilusiones, linda cholita conimeña, nunca fuiste para mí.\n
        Conimeña, nunca fuiste para mí.
        `,
  },
  {
    id: "6",
    title: "Huraña",
    author: "Aldemir Calderón Aliaga",
    category: "Huayño",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/huran%CC%83a.mp3",
    numbers:
      "[33-6]\\4/3\\4/3\\4/3\n43/3.33\\2/2\\2/3.23\\34.44.43/56\\44/56.665\\4/56\\6\n4/3.33\\2/2\\2/3.23\\34.44.43/56\\44/56.665\\44/56.665\\4/56\\6\n332\\2/3\\44.43/5\\5/6\\4/56\\6\n6.../3...",
    lyrics: `I
        Siempre te veo a escondidas cuando me acerco huyes de mí.\n
        Que serán de tus pensamientos, que serán de tus sentimientos, al saber que yo te quiero.\n
        No seas huraña pronto vuelve a mi lado.
        \n
        II
        Yo sé que piensas alejarte lejos muy lejos de este pueblo.\n
        Si así lo quieres cariñito, no me abandones amor mío, llévame junto a tu lado.\n
        Seremos felices, con el calor de mi cariño.`,
  },
  {
    id: "7",
    title: "Tiptiri sobrio",
    author: "18 de julio",
    category: "Huayño",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/phpcqiQdz.mpeg",
    numbers:
      "4/111\\1/22\\1/33.34.444\\1/23\\44.4/5.555\\33/3\\44.4/5.556\\54/6\\6\n4/4.444.2\\2/3\\4.4/4.445\\1/23\\44.4/5.555\\33/3\\44.4/5.556\\54/6\\6\n6/6\\5/5\\44.4/5.555\\33/3\\44.4/5.556\\54/6\\6",
    lyrics: [],
  },
];
  
  const getPost = async () => {
    // const rsp = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const data = await rsp.json();
    return playlist;
  };
  
  export { getPost };
  