import { Router } from "express";
const router = Router();

const mockResponse = {
  results: [
    {
      id: 26458,
      title: "MOCK HARRY POTTER Harry Potter and the Order of the Phoenix",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXyq_JbKBJLMfuRawWIJUNRCxC_lEdyFIbBJJhdN5PeeI7SUjQQ6oKd4ee2G36h__8csxFoWdYx27LTvQ8sbHs8atA.jpg?r=3b6",
      vtype: "movie",
      nfid: 70058027,
      synopsis:
        "Learning that his warning about the return of Voldemort has been ignored, MOCK HARRY POTTER Harry trains a group of students to defend themselves against the dark arts.",
      avgrating: 4.157845,
      year: 2007,
      runtime: 8290,
      imdbid: "tt0373889",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg",
      imdbrating: 7.5,
      top250: 0,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2015-04-14",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 26465,
      title: "MOCK HARRY POTTER Harry Potter and the Half-Blood Prince",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABavCbNOI-fx4pkYpyLxcBKBHTeSemM7kxeGhc7RRFlB7rW66otCHtQgEnEkD0a3DRXfZzBxhFy51AMbKwHjhpFeQGQ.jpg?r=cb4",
      vtype: "movie",
      nfid: 70099612,
      synopsis:
        "When MOCK HARRY POTTER Harry inadvertently discovers a mysterious book that sheds light on the sordid life of the evil Voldemort, he and Dumbledore prepare for battle.",
      avgrating: 4.1519375,
      year: 2009,
      runtime: 9206,
      imdbid: "tt0417741",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
      imdbrating: 7.6,
      top250: 0,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2015-04-14",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 26485,
      title: "MOCK HARRY POTTER Harry Potter and the Goblet of Fire",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVYLOmeCdAOvFNkPJyq8BHqoBHFb5htRe9qlZtLWt-xhHKb3bGFZkNUROiSnPsZVJ_uN6nUNEL9QBjPekEZcDXJxBg.jpg?r=413",
      vtype: "movie",
      nfid: 70021660,
      synopsis:
        "In his fourth year at Hogwarts, MOCK HARRY POTTER Harry Potter competes alongside young wizards from faraway schools in the treacherous Tri-Wizard Tournament.",
      avgrating: 4.136838,
      year: 2005,
      runtime: 9425,
      imdbid: "tt0330373",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
      imdbrating: 7.7,
      top250: 0,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2015-04-14",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 26495,
      title: "MOCK HARRY POTTER Harry Potter and the Prisoner of Azkaban",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABY80Db6NNsXEVhbOv5eHDZX0D1kFjiOYhC8P2L7TrK5Xwh2xntQQMCG1Q3tZEoXul2HmfjEmci8mI0W0BvdyLYKGqg.jpg?r=735",
      vtype: "movie",
      nfid: 60034567,
      synopsis:
        "In his third year at Hogwart&#39;s, MOCK HARRY POTTER Harry faces extreme danger yet again when Voldemort sympathizer Sirius Black escapes from prison to hunt down MOCK HARRY POTTER Harry.",
      avgrating: 4.157547,
      year: 2004,
      runtime: 8497,
      imdbid: "tt0304141",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
      imdbrating: 7.9,
      top250: 0,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2015-04-14",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 26515,
      title: "MOCK HARRY POTTER Harry Potter and the Chamber of Secrets",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABblSa6fONlocR8lQHerwKZZzJMDkU1sxGqKqGeQsJTLbMTsYgwDG30Dvqx9lMiXMlCzcr314ZaL13ghzpnz--kIjTg.jpg?r=760",
      vtype: "movie",
      nfid: 60024925,
      synopsis:
        "MOCK HARRY POTTER Harry ignores Dobby&#39;s warnings not to return to Hogwarts and teams up with Ron and Hermione to investigate a mysterious series of attacks.",
      avgrating: 4.054712,
      year: 2002,
      runtime: 9654,
      imdbid: "tt0295297",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
      imdbrating: 7.4,
      top250: 0,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2015-04-14",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 38437,
      title: "MOCK HARRY POTTER Harry Potter and the Sorcerer&#39;s Stone",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWaFWfi6qUWzU6JTEAxiUhitprVaALVTV7bG4MnHHDNx-frY-71QOOZGEsII7Eff8L0dmeePJ50KCjrDo3vSFhvUsA.jpg?r=aac",
      vtype: "movie",
      nfid: 60004478,
      synopsis:
        "On his 11th birthday, MOCK HARRY POTTER Harry Potter learns that he&#39;s a powerful wizard with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry.",
      avgrating: 4.0484905,
      year: 2001,
      runtime: 9137,
      imdbid: "tt0241527",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
      imdbrating: 7.6,
      top250: 0,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2015-04-14",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 43404,
      title: "MOCK HARRY POTTER Harry Potter and the Deathly Hallows: Part I",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdvMUxf8hB2NdShYGCXwdIWTnCWhNFUzc3FMv_8QuuDjwLPx1JIRvhAqjfcA5vSVFFSvAd_srdDZvC9kdA4NgLnj_Q.jpg?r=0a3",
      vtype: "movie",
      nfid: 70115887,
      synopsis:
        "The first installment of the two-part conclusion to the MOCK HARRY POTTER Harry Potter series finds MOCK HARRY POTTER Harry leaving Hogwarts to destroy the remaining Horcruxes.",
      avgrating: 4.221568,
      year: 2010,
      runtime: 8760,
      imdbid: "tt0926084",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
      imdbrating: 7.7,
      top250: 0,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2015-09-20",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 47285,
      title: "MOCK HARRY POTTER Harry Potter and the Deathly Hallows: Part 2",
      img: "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdyZ2sR1Rrzy9Cxe7wPxCUuxaqi2pDI-MEDY4-dPOemY5rS9YJYdRg36N4TURTeNdXCRtGQRCXXxSXsZIWi2M_Lxlg.jpg?r=8a1",
      vtype: "movie",
      nfid: 70120085,
      synopsis:
        "Just as things begin to look hopeless, MOCK HARRY POTTER Harry discovers a trio of magical objects that endow him with powers to rival Voldemort&#39;s formidable skills.",
      avgrating: 4.357972,
      year: 2011,
      runtime: 7822,
      imdbid: "tt1201607",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg",
      imdbrating: 8.1,
      top250: 212,
      top250tv: 0,
      clist: '"AU":"Australia"',
      titledate: "2016-05-15",
      countries: {
        AU: "Australia",
      },
    },
    {
      id: 71143,
      title: "Montalbano: The Potter&#39;s Field",
      img: "https://occ-0-4039-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRuowfuTWesL0QcQW9t332gnsr1271Xd1chRddcvLvhJ25G80HFkUEyXPSIA1FvsQO1b7VCRlmFOZE7KxrF58btL4Q.jpg?r=d71",
      vtype: "movie",
      nfid: 81411715,
      synopsis:
        "After the discovery of a dead body suggests ties to the Mafia, Montalbano finds an old friendship tested when a trusted colleague lands in danger.",
      avgrating: 0,
      year: 2011,
      runtime: 6512,
      imdbid: null,
      poster: null,
      imdbrating: null,
      top250: null,
      top250tv: null,
      clist:
        '"NL":"Netherlands","PL":"Poland","CZ":"Czech Republic","GR":"Greece","IS":"Iceland","LT":"Lithuania","SE":"Sweden"',
      titledate: "2021-05-12",
      countries: {
        NL: "Netherlands",
        PL: "Poland",
        CZ: "Czech Republic",
        GR: "Greece",
        IS: "Iceland",
        LT: "Lithuania",
        SE: "Sweden",
      },
    },
    {
      id: 36455,
      title: "MOCK HARRY POTTER Harry Dean Stanton: Partly Fiction",
      img: "http://cdn6.nflximg.net/ipl/18515/d787e6d9783a5506c95bd73db992c78dae3428c1.jpg",
      vtype: "movie",
      nfid: 70258476,
      synopsis:
        "Film clips, interviews with friends and colleagues, and MOCK HARRY POTTER Harry Dean Stanton&#39;s surprising aptitude for music help profile the legendary character actor.",
      avgrating: 3.6,
      year: 2012,
      runtime: 4593,
      imdbid: "tt2372776",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTAzMTQ3NzM2OTVeQTJeQWpwZ15BbWU3MDcxNTI2OTg@._V1_SX300.jpg",
      imdbrating: 7.3,
      top250: 0,
      top250tv: 0,
      clist:
        '"FR":"France","PL":"Poland","BE":"Belgium","CZ":"Czech Republic","ES":"Spain","SE":"Sweden"',
      titledate: "2015-04-14",
      countries: {
        FR: "France",
        PL: "Poland",
        BE: "Belgium",
        CZ: "Czech Republic",
        ES: "Spain",
        SE: "Sweden",
      },
    },
  ],
  total: 19,
  elapse: 0.3414,
};

router.get("/search", (req, res, next) => {
  return res.json(mockResponse);
});

export default router;
