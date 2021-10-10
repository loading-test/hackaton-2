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
    name: "Bootstrap",
    color: "info"
  }
};

const users = [
  {
    id: "17179c839e22461792004f317fdc1743",
    name: "Адель Абсалямов",
    age: "33",
    src: "./img/115344820161227.jpg",
    skills: [skills.html, skills.css, skills.javaScript, skills.bootstrap],
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/loading-test",
    session:
      "В данном проекте разрабатывал api, компонентом карточки, маршрутизации и главной страницы сайта"
  },
  {
    id: "5e95e4f4a8e44441a3dd1f339d2d6238",
    name: "Сергей Матвейчук",
    age: "55",
    src: "./img/115344820161227.jpg",
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/Sergei2010",
    session:
      "В данном проекте разрабатывал такие компоненты: progress, badge и api"
  },
  {
    id: "929ab3502acc48d691994b98bd6b5025",
    name: "Дмитрий Братищев",
    age: "38",
    src: "./img/115344820161227.jpg",
    aboutMe:
      "Всем привет! Очень люблю программирование, а именно JavaScript. В программировании мне нравится результат. В данный момент обучаюсь у Владилена Минина.",
    socialNetwork: "https://github.com/DmitryBratishchev",
    session:
      "В данном проекте разрабатывал компонент избранные, переход на карточки участника"
  },
  {
    id: "683396b878c64415b7eeea6990e4c4a2",
    name: "Иван Иванов",
    age: "23",
    src: "./img/115344820161227.jpg",
    aboutMe:
      "Люблю путешествовать, узнавать что то новое. Много читаю книг, а так же учусь и работаю. Работаю официантом в ресторане. учеба это JavaScript",
    socialNetwork: "https://github.com/ivan",
    session: "В данном проекте разрабатывал стили"
  },
  {
    id: "3a1291bb8ecd43579bb76cc2667728a5",
    name: "Артур Исмаев",
    age: "29",
    src: "./img/115344820161227.jpg",
    aboutMe:
      "В программировании совсем недавно. Это мой первый опыт в хакатоне. Пока работаю водителем, но в дальнейшем планирую перейти в разработку",
    socialNetwork: "https://github.com/artur",
    session: "В данном проекте разрабатывал preloader"
  }
];

const fetchUsersAll = () =>
  new Promise(function (resolve) {
    window.setInterval(() => {
      resolve(users);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setInterval(function () {
      resolve(users.find((user) => user.id === id));
    }, 1000);
  });

export default {
  fetchUsersAll,
  getById
};
