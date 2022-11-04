const playlist = [
  {
    id: "0",
    title: "Torero",
    author: "D.R.",
    category: "Huayño",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/torero.mp3",
    numbers:
      `4/4\\33/33\\33/22\\22/33\\33
       33\\33/44\\44/44\\44/55\\55
       77\\55/55\\45/44\\44/55\\55`,
    lyrics: `I
      Buenos días suti tata
      Buenos días suti mamá
      
      Waka mara huajritaspa 
      Wis wis sitantawa

      En la fiesta de mi pueblo celebramos la corrida

      Torero celebramos la corrida.`,
  },
  {
    id: "1",
    title: "Agua Milagro",
    author: "Filiberto Calderón Villasante",
    category: "Huayño calmado",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/agua-milagro.mp3",
    numbers:
      `66/3...
       322\\22/33\\44/33\\44/55.56\\6/6\\56
       544/55.56\\6/6\\5/5\\44/33\\44/55.56\\6/6\\56
       322\\22/33\\44/33\\44/55.56\\6/6\\56
       6.../3...`,
    lyrics: [],
  },
  {
    id: "2",
    title: "Ron",
    author: "D. R.",
    category: "Diana",
    media:
      "https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/diana-ron.mp3",
    numbers: `2|5|2|5|2|5
    21\\21/23\\3.33/43\\43/45\\5.55
    765\\543/43\\43/45\\5.55
    2|5|2...|5...`,
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
      `3.333.3|6.666.6
      223\\33/221\\1.111.1/223\\33/445
      2.222.2|5.555.5
      445\\55/443\\3.333.3/32.222\\2/3\\33/445
      2.222.2|5.555.5
      7\\5/6\\5/5\\4/4\\3/32.222\\2/3\\33/455
      2.222.2|5.555.5
      2...|5...`,
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
      `33|6\\4/3\\4/3\\4/3
      22\\1/1\\1/233\\33.44/22\\1/1\\1/233\\33/22\\433/3\\344/55\\55.655/5\\566/7\\6/6\\56
      433/3\\344/55\\55/322\\1/233\\33/22\\433/3\\344/55\\55.655/5\\566/7\\6/6\\56
      54/5\\55.655/5\\566/7\\6/6\\56
      6.../3...`,
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
      `33|6\\4/3\\4/3\\4/3
      5/5\\44/5\\44.4/3.33\\344/5\\44.543/55.565\\55.66/7\\6/6\\56
      544/55.565\\55.5/3.33\\344/5\\44.543/55.565\\55.66/7\\6/6\\56
      54/5\\55.66/7\\6/6\\56
      6.../3...`,
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
      `33|6\\4/3\\4/3\\4/3
      43/5\\5/6\\5/56\\66.6/3.33\\2/2\\2/3\\4
      4/3.33\\2/2\\2/3.23\\34.44.43/56\\44/56.665\\4/56\\6
      332\\2/3\\44.43/5\\5/6\\4/56\\6
      6.../3...`,
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
      `433/322\\1/1\\11/211.111\\221/23\\4/2.22|4.44
      233\\344.5/6\\55/6\\44.444.543/56\\6/3.33|6.66
      77\\55/55\\44.543/65\\6/3.33|6.66`,
    lyrics: [],
  },
  {
    id: "8",
    title: "P'attar J'aliri Jamachi",
    author: "LyM (Derechos reservados)",
    category: "Huayño",
    media:
      "",
    numbers:
      `4/3333\\34/5556\\4333/3\\4/5\\5556/7765\\5/6\\6
      44/5\\434/5\\44.4333/3\\4/5\\5556/7765\\5/6\\6
      54/5\\5556/7765\\5/6\\6`,
    lyrics: `
      P'attar j'aliri jamachi caraspa
      Papelay aparapitai caraspa, cartitay aparapitai. (BIS)

      Janui ina papelak'i, chacha wilampiu
      Q'elkasta caraspa, warmi chuymaru q'elkasta. (BIS)

      A yayayay vidita
      Warmi chuymaru q'elkasta. (BIS)
    `,
  },
  {
    id: "9",
    title: "Felicia",
    author: "LyM (Arcadio Calderón Choquechambi)",
    category: "Huayño",
    media:
      "",
    numbers:
      `4/33.33\\2/23\\3.44/33\\2/2\\2/32\\4
      544.44.434/5\\55.66/6\\55/556\\6
      332\\33.34/5\\55.66/6\\55/556\\6`,
    lyrics: `
      Nunca más desprecies esta canción que cantamos tus amigos. (BIS)

      Mírala, mírala quienes somos, tus preferidos como siempre. (BIS)

      Felicia eres un delirio entre las flores más precidas. (BIS)
    `,
  },
];
  
  const getPost = async () => {
    // const rsp = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const data = await rsp.json();
    return playlist;
  };
  
  export { getPost };
  