exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          authId: '',
          name: 'Dane Williams',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Wellington',
          quote: 'This is a quote',
          githubLink: 'https://github.com/dane-williams',
          skills: 'i have a skill',
          facebook: 'dane@facebook.com',
          linkedin: 'dane@linkedin',
          twitter: 'dane@twitter',
          instagram: 'dane@instagram',
          image: 'https://avatars.githubusercontent.com/u/89368577?v=4'
        },
        {
          id: 2,
          authId: '',
          name: 'Natalia Ramirez',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'ntlc.ramirez@gmail.com',
          location: 'Wellington',
          quote: 'Dont worry, be happy',
          githubLink: 'https://github.com/NataliaCatalina',
          skills: 'Front-end developer',
          facebook: 'natalia@facebook.com',
          linkedin: 'natalia@linkedin',
          twitter: 'natalia@twitter',
          instagram: 'dane@instagram',
          image: 'https://avatars.githubusercontent.com/u/68573508?v=4'
        },
        {
          id: 3,
          authId: '',
          name: 'Callum Morris',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Christchurch',
          quote: 'This is a quote',
          githubLink: 'https://github.com/CalMorris',
          skills: 'Python',
          facebook: 'callum@facebook.com',
          linkedin: 'callum@linkedin',
          twitter: 'callum@twitter',
          instagram: 'callum@instagram',
          image: 'https://avatars.githubusercontent.com/u/55716886?v=4'
        },
        {
          id: 4,
          authId: '',
          name: 'Danny Goulter',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'dannygoulter@gmail.com',
          location: 'Christchurch',
          quote: 'I have a question',
          githubLink: 'https://github.com/danny-goulter',
          skills: 'Front-end developer, public speaker and presenter',
          facebook: 'http://www.facebook.com/dannygoulter',
          linkedin: 'https://nz.linkedin.com/in/danny-goulter-97492227',
          twitter: 'http://www.twitter.com/dannyrambles',
          instagram: 'http://www.instagram.com/dannyrambles',
          image: 'https://avatars.githubusercontent.com/u/89580994?v=4'
        },
        {
          id: 5,
          authId: '',
          name: 'David Braga',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Somewhere',
          quote: 'This is a quote',
          githubLink: 'https://github.com/david-braga',
          skills: 'i have a skill',
          facebook: 'david@facebook.com',
          linkedin: 'david@linkedin',
          twitter: 'david@twitter',
          instagram: 'david@instagram',
          image: 'https://avatars.githubusercontent.com/u/89430266?v=4'
        },
        {
          id: 6,
          authId: '',
          name: 'Finn Bettjeman',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Wellington',
          quote: 'This is a quote',
          githubLink: 'https://github.com/finnbett',
          skills: 'I have a skill',
          facebook: 'finn@facebook.com',
          linkedin: 'finn@linkedin',
          twitter: 'finn@twitter',
          instagram: 'finne@instagram',
          image: 'https://avatars.githubusercontent.com/u/85616388?v=4'
        },
        {
          id: 7,
          authId: '',
          name: 'Gerard Miller',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Cambridge',
          quote: 'This is a quote',
          githubLink: 'https://github.com/gerard-miller',
          skills: 'i have a skill',
          facebook: 'gerard@facebook.com',
          linkedin: 'gerard@linkedin',
          twitter: 'gerard@twitter',
          instagram: 'gerard@instagram',
          image: 'https://avatars.githubusercontent.com/u/89118251?v=4'
        },
        {
          id: 8,
          authId: '',
          name: 'Jatin Puri',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Auckland',
          quote: 'insert great pun here',
          githubLink: 'https://github.com/jatin-puri-coder',
          skills: 'coder, rapper, dj',
          facebook: 'jatin@facebook.com',
          linkedin: 'jatin@linkedin',
          twitter: 'jatin@twitter',
          instagram: 'jatin@instagram',
          image: 'https://avatars.githubusercontent.com/u/77951538?v=4'
        },
        {
          id: 9,
          authId: '',
          name: 'Jean Sergent',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Wellington',
          quote: 'I love you, Bye!',
          githubLink: 'N/A',
          skills: 'actor, tarot card reader',
          facebook: 'https://www.facebook.com/jeansergentactor/',
          linkedin: 'jean@linkedin',
          twitter: 'jean@twitter',
          instagram: 'jean@instagram',
          image: '/images/Jean.jpg'
        },
        {
          id: 10,
          authId: '',
          name: 'Jojo Sexton',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Wellington',
          quote: 'This is a quote',
          githubLink: 'https://github.com/jojo-sexton',
          skills: 'I have a skill',
          facebook: 'jojo@facebook.com',
          linkedin: 'jojo@linkedin',
          twitter: 'jojo@twitter',
          instagram: 'jojo@instagram',
          image: 'https://avatars.githubusercontent.com/u/89529995?v=4'
        },
        {
          id: 11,
          authId: '',
          name: 'Joshua Vial (JV)',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Wellington',
          quote: 'This is a quote',
          githubLink: 'https://github.com/joshuavial',
          skills: 'coding wizard',
          facebook: 'jv@facebook.com',
          linkedin: 'jv@linkedin',
          twitter: '@joshuavial',
          instagram: 'jv@instagram',
          image: 'https://avatars.githubusercontent.com/u/72309?v=4'
        },
        {
          id: 12,
          authId: '',
          name: 'Leilani Heather',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Auckland',
          quote: 'This is a quote',
          githubLink: 'https://github.com/leilani-heather',
          skills: 'I have a skill',
          facebook: 'leilani@facebook.com',
          linkedin: 'leilani@linkedin',
          twitter: 'leilani@twitter',
          instagram: 'leilani@instagram',
          image: 'https://avatars.githubusercontent.com/u/73852663?v=4'
        },
        {
          id: 13,
          authId: '',
          name: 'Levi Hauraki',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Gisborne',
          quote: 'This is a quote',
          githubLink: 'https://github.com/Levi-Hauraki',
          skills: 'i have a skill',
          facebook: 'levi@facebook.com',
          linkedin: 'levi@linkedin',
          twitter: 'levi@twitter',
          instagram: 'levi@instagram',
          image: 'https://avatars.githubusercontent.com/u/89329374?v=4'
        },
        {
          id: 14,
          authId: '',
          name: 'Micheal Singh',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          quote: 'This is a quote',
          githubLink: 'https://github.com/micheal-singh',
          skills: 'I have a skill',
          facebook: 'micheal@facebook.com',
          linkedin: 'micheal@linkedin',
          twitter: 'micheal@twitter',
          instagram: 'michealinstagram',
          image: 'https://avatars.githubusercontent.com/u/89555193?v=4'
        },
        {
          id: 15,
          authId: '',
          name: 'Rodrigo Marcolino',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'rodrigomarcolino@gmail.com',
          location: 'Invercargill',
          quote: 'This is a quote',
          githubLink: 'https://github.com/rodrigo-marcolino',
          skills: 'i have a skill',
          facebook: 'rodrigo@facebook.com',
          linkedin: 'rodrigo@linkedin',
          twitter: 'rodrigo@twitter',
          instagram: 'rodrigo@instagram',
          image: 'https://avatars.githubusercontent.com/u/51892785?v=4'
        },
        {
          id: 16,
          authId: '',
          name: 'Rohan Fowler-Harper',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Hamilton',
          quote: 'This is a quote',
          githubLink: 'Link',
          skills: 'this is a link',
          facebook: 'rohan@facebook.com',
          linkedin: 'https://www.linkedin.com/in/rohan-fowler-harper/',
          twitter: 'rohan@twitter',
          instagram: 'rohan@instagram',
          image: 'https://avatars.githubusercontent.com/u/88605753?v=4'
        },
        {
          id: 17,
          authId: '',
          name: 'Sarah Emerson',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Auckland',
          quote: 'This is a quote',
          githubLink: 'https://github.com/sarah-emerson',
          skills: 'i have a skill',
          facebook: 'N/A',
          linkedin: 'sarah@linkedin',
          twitter: 'sarah@twitter',
          instagram: 'sarah@instagram',
          image: 'https://avatars.githubusercontent.com/u/70471216?v=4'
        },
        {
          id: 18,
          authId: '',
          name: 'Shaun Collinss',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          quote: 'This is a quote',
          githubLink: 'https://github.com/shaun-collinss',
          skills: 'game dev',
          facebook: 'shaun@facebook.com',
          linkedin: 'shaun@linkedin',
          twitter: 'shaun@twitter',
          instagram: 'shaun@instagram',
          image: 'https://avatars.githubusercontent.com/u/89567829?v=4'
        },
        {
          id: 19,
          authId: '',
          name: 'Victoria Fahey',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          quote: 'This is a quote',
          githubLink: 'https://github.com/victoria-fahey',
          skills: 'diving',
          facebook: 'victoria@facebook.com',
          linkedin: 'victoria@linkedin',
          twitter: 'victoria@twitter',
          instagram: 'victoria@instagram',
          image: 'https://avatars.githubusercontent.com/u/53734799?v=4'
        },
        {
          id: 20,
          authId: '',
          name: 'Walid Bouladam',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          quote: 'This is a quote',
          githubLink: 'https://github.com/BIGWALDOR',
          skills: 'I have a skill',
          facebook: 'walid@facebook.com',
          linkedin: 'walid@linkedin',
          twitter: 'walid@twitter',
          instagram: 'walid@instagram',
          image: 'https://avatars.githubusercontent.com/u/56755074?v=4'
        },
        {
          id: 21,
          authId: '',
          name: 'Ysabel Taya Guiang',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/ysabel-guiang',
          skills: 'coding, motherhood',
          facebook: 'ysabel@facebook.com',
          linkedin: 'ysabel@linkedin',
          twitter: 'ysabel@twitter',
          instagram: 'ysabel@instagram',
          image: 'https://avatars.githubusercontent.com/u/77661073?v=4'
        },
        {
          id: 22,
          authId: '',
          name: 'Tom King',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Wellington',
          Quote: 'This is a quote',
          githubLink: '',
          skills: 'Job hunter extraordinaire',
          facebook: 'tom@facebook.com',
          linkedin: 'tom@linkedin',
          twitter: 'tom@twitter',
          instagram: 'tom@instagram',
          image: '/images/Tom.jpg'
        }
      ])
    })
}
