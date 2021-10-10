const skills = {
  html: {
    id: "8fd0ab4743b148ce98b9ee0187bcbdc0",
    name: "HTML",
    color: "primary"
  },
  css: {
    id: "e0c490b79d8347d5b01475ebf6b114dc",
    name: "CSS",
    color: "secondary"
  },
  javaScript: {
    id: "308eeb2b9cf74f4eab79298945268dba",
    name: "JavaScript",
    color: "success"
  },
  react: {
    id: "f11f53e497c94981bb95f8f39e3cb2cb",
    name: "React",
    color: "dark"
  },
  bootstrap: {
    id: "fecc34906d164459ae920985794c017c",
    name: "Bootstrap",
    color: "warning"
  },
  materialUi: {
    id: "52e396ef8157491f974f51d0c7865d2a",
    name: "MaterialUi",
    color: "info"
  }
};

const users = [
  {
    id: "3",
    name: "Адель Абсалямов",
    age: "33",
    src: "./img/115344820161227.jpg",
    skills: [
      (skills.html = addLevel(skills.html, 64)),
      (skills.css = addLevel(skills.css, 58)),
      (skills.javaScript = addLevel(skills.javaScript, 45)),
      (skills.bootstrap = addLevel(skills.bootstrap, 56))
    ],
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/loading-test",
    session:
      "В данном проекте занимался api, компонентом карточки, маршрутизации и главной страницы сайта"
  },
  {
    id: "5e95e4f4a8e44441a3dd1f339d2d6238",
    name: "Сергей Матвейчук",
    age: "55",
    src: "./img/115344820161227.jpg",
    skills: [
      (skills.html = addLevel(skills.html, 55)),
      (skills.css = addLevel(skills.css, 67)),
      (skills.javaScript = addLevel(skills.javaScript, 34)),
      (skills.bootstrap = addLevel(skills.bootstrap, 77))
    ],
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/Sergei2010",
    session:
      "В данном проекте занимался api, компонентом карточки, маршрутизации и главной страницы сайта"
  },
  {
    id: "929ab3502acc48d691994b98bd6b5025",
    name: "Адель Абсалямов",
    age: "33",
    src: "./img/115344820161227.jpg",
    skills: [
      (skills.html = addLevel(skills.html, 34)),
      (skills.css = addLevel(skills.css, 45)),
      (skills.javaScript = addLevel(skills.javaScript, 55)),
      (skills.bootstrap = addLevel(skills.bootstrap, 48))
    ],
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/loading-test",
    session:
      "В данном проекте занимался api, компонентом карточки, маршрутизации и главной страницы сайта"
  },
  {
    id: "683396b878c64415b7eeea6990e4c4a2",
    name: "Адель Абсалямов",
    age: "33",
    src: "./img/115344820161227.jpg",
    skills: [
      (skills.html = addLevel(skills.html, 44)),
      (skills.css = addLevel(skills.css, 57)),
      (skills.javaScript = addLevel(skills.javaScript, 34)),
      (skills.bootstrap = addLevel(skills.bootstrap, 42))
    ],
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/loading-test",
    session:
      "В данном проекте занимался api, компонентом карточки, маршрутизации и главной страницы сайта"
  },
  {
    id: "3a1291bb8ecd43579bb76cc2667728a5",
    name: "Адель Абсалямов",
    age: "33",
    src: "./img/115344820161227.jpg",
    skills: [
      (skills.html = addLevel(skills.html, 33)),
      (skills.css = addLevel(skills.css, 49)),
      (skills.javaScript = addLevel(skills.javaScript, 56)),
      (skills.bootstrap = addLevel(skills.bootstrap, 47))
    ],
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/loading-test",
    session:
      "В данном проекте занимался api, компонентом карточки, маршрутизации и главной страницы сайта"
  }
];

const fetchUsersAll = () =>
  new Promise(function (resolve) {
    window.setInterval(() => {
      resolve(users);
    }, 2000);
  });

const fetchSkillsAll = () =>
  new Promise(function (resolve) {
    window.setInterval(() => {
      resolve(skills);
    }, 2000);
  });

const getUserById = (id) =>
  new Promise((resolve) => {
    window.setInterval(function () {
      resolve(users.find((user) => user.id === id));
    }, 1000);
  });

const getSkillById = (id) =>
  new Promise((resolve) => {
    window.setInterval(function () {
      resolve(users.find((user) => user.id === id));
    }, 1000);
  });

function addLevel(Obj, level) {
  Obj = Object.assign(Obj, { languageLevel: level });
  return Obj;
}

export default {
  fetchUsersAll,
  fetchSkillsAll,
  getUserById,
  getSkillById
};
