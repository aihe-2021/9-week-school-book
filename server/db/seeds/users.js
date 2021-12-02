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
          Quote: 'This is a quote',
          githubLink: 'https://github.com/dane-williams',
          skills: 'i have a skill',
          facebook: 'dane@facebook.com',
          linkedin: 'dane@linkedin',
          twitter: 'dane@twitter',
          instagram: 'dane@instagram',
          image: 'Dane.jpg'
        },
        {
          id: 2,
          authId: '',
          name: 'Natalia Ramirez',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'ntlc.ramirez@gmail.com',
          location: 'Wellington',
          Quote: 'Dont worry, be happy',
          githubLink: 'https://github.com/NataliaCatalina',
          skills: 'Front-end developer',
          facebook: 'natalia@facebook.com',
          linkedin: 'natalia@linkedin',
          twitter: 'natalia@twitter',
          instagram: 'dane@instagram',
          image: 'Natalia.jpg'
        },
        {
          id: 3,
          authId: '',
          name: 'Callum Morris',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Christchurch',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/CalMorris',
          skills: 'Python',
          facebook: 'callum@facebook.com',
          linkedin: 'callum@linkedin',
          twitter: 'callum@twitter',
          instagram: 'callum@instagram',
          image: 'Callum.jpg'
        },
        {
          id: 4,
          authId: '',
          name: 'Danny Goulter',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'dannygoulter@gmail.com',
          location: 'Christchurch',
          Quote: 'I have a question',
          githubLink: 'https://github.com/danny-goulter',
          skills: 'Front-end developer, public speaker and presenter',
          facebook: 'http://www.facebook.com/dannygoulter',
          linkedin: 'https://nz.linkedin.com/in/danny-goulter-97492227',
          twitter: 'http://www.twitter.com/dannyrambles',
          instagram: 'http://www.instagram.com/dannyrambles',
          image: 'Danny.jpg'
        },
        {
          id: 5,
          authId: '',
          name: 'David Braga',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Somewhere',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/david-braga',
          skills: 'i have a skill',
          facebook: 'david@facebook.com',
          linkedin: 'david@linkedin',
          twitter: 'david@twitter',
          instagram: 'david@instagram',
          image: 'David.jpg'
        },
        {
          id: 6,
          authId: '',
          name: 'Finn Bettjeman',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Wellington',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/finnbett',
          skills: 'I have a skill',
          facebook: 'finn@facebook.com',
          linkedin: 'finn@linkedin',
          twitter: 'finn@twitter',
          instagram: 'finne@instagram',
          image: 'Finn.jpg'
        },
        {
          id: 7,
          authId: '',
          name: 'Gerard Miller',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Cambridge',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/gerard-miller',
          skills: 'i have a skill',
          facebook: 'gerard@facebook.com',
          linkedin: 'gerard@linkedin',
          twitter: 'gerard@twitter',
          instagram: 'gerard@instagram',
          image: 'Gerard.jpg'
        },
        {
          id: 8,
          authId: '',
          name: 'Jatin Puri',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'insert great pun here',
          githubLink: 'https://github.com/jatin-puri-coder',
          skills: 'coder, rapper, dj',
          facebook: 'jatin@facebook.com',
          linkedin: 'jatin@linkedin',
          twitter: 'jatin@twitter',
          instagram: 'jatin@instagram',
          image: 'Jatin.jpg'
        },
        {
          id: 9,
          authId: '',
          name: 'Jean Sergent',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Wellington',
          Quote: 'I love you, Bye!',
          githubLink: 'N/A',
          skills: 'actor, tarot card reader',
          facebook: 'https://www.facebook.com/jeansergentactor/',
          linkedin: 'jean@linkedin',
          twitter: 'jean@twitter',
          instagram: 'jean@instagram',
          image: 'Jean.jpg'
        },
        {
          id: 10,
          authId: '',
          name: 'Jojo Sexton',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Wellington',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/jojo-sexton',
          skills: 'I have a skill',
          facebook: 'jojo@facebook.com',
          linkedin: 'jojo@linkedin',
          twitter: 'jojo@twitter',
          instagram: 'jojo@instagram',
          image: 'Jojo.jpg'
        },
        {
          id: 11,
          authId: '',
          name: 'Joshua Vial (JV)',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Wellington',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/joshuavial',
          skills: 'coding wizard',
          facebook: 'jv@facebook.com',
          linkedin: 'jv@linkedin',
          twitter: '@joshuavial',
          instagram: 'jv@instagram',
          image: 'JV.jpg'
        },
        {
          id: 12,
          authId: '',
          name: 'Leilani Heather',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/leilani-heather',
          skills: 'I have a skill',
          facebook: 'leilani@facebook.com',
          linkedin: 'leilani@linkedin',
          twitter: 'leilani@twitter',
          instagram: 'leilani@instagram',
          image: 'Leilani.jpg'
        },
        {
          id: 13,
          authId: '',
          name: 'Levi Hauraki',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Gisborne',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/Levi-Hauraki',
          skills: 'i have a skill',
          facebook: 'levi@facebook.com',
          linkedin: 'levi@linkedin',
          twitter: 'levi@twitter',
          instagram: 'levi@instagram',
          image: 'Levi.jpg'
        },
        {
          id: 14,
          authId: '',
          name: 'Micheal Singh',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/micheal-singh',
          skills: 'I have a skill',
          facebook: 'micheal@facebook.com',
          linkedin: 'micheal@linkedin',
          twitter: 'micheal@twitter',
          instagram: 'michealinstagram',
          image: 'Micheal.jpg'
        },
        {
          id: 15,
          authId: '',
          name: 'Rodrigo Marcolino',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'rodrigomarcolino@gmail.com',
          location: 'Invercargill',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/rodrigo-marcolino',
          skills: 'i have a skill',
          facebook: 'rodrigo@facebook.com',
          linkedin: 'rodrigo@linkedin',
          twitter: 'rodrigo@twitter',
          instagram: 'rodrigo@instagram',
          image: 'Rodrigo.jpg'
        },
        {
          id: 16,
          authId: '',
          name: 'Rohan Fowler-Harper',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Hamilton',
          Quote: 'This is a quote',
          githubLink: 'Link',
          skills: 'this is a link',
          facebook: 'rohan@facebook.com',
          linkedin: 'https://www.linkedin.com/in/rohan-fowler-harper/',
          twitter: 'rohan@twitter',
          instagram: 'rohan@instagram',
          image: 'Rohan.jpg'
        },
        {
          id: 17,
          authId: '',
          name: 'Sarah Emerson',
          cohort: 'aihe-21',
          teacher: 'true',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/sarah-emerson',
          skills: 'i have a skill',
          facebook: 'N/A',
          linkedin: 'sarah@linkedin',
          twitter: 'sarah@twitter',
          instagram: 'sarah@instagram',
          image: 'Sarah.jpg'
        },
        {
          id: 18,
          authId: '',
          name: 'Shaun Collinss',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/shaun-collinss',
          skills: 'game dev',
          facebook: 'shaun@facebook.com',
          linkedin: 'shaun@linkedin',
          twitter: 'shaun@twitter',
          instagram: 'shaun@instagram',
          image: 'Shaun.jpg'
        },
        {
          id: 19,
          authId: '',
          name: 'Victoria Fahey',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/victoria-fahey',
          skills: 'diving',
          facebook: 'victoria@facebook.com',
          linkedin: 'victoria@linkedin',
          twitter: 'victoria@twitter',
          instagram: 'victoria@instagram',
          image: 'Victoria.jpg'
        },
        {
          id: 20,
          authId: '',
          name: 'Walid Bouladam',
          cohort: 'aihe-21',
          teacher: 'false',
          email: 'this@email.net',
          location: 'Auckland',
          Quote: 'This is a quote',
          githubLink: 'https://github.com/BIGWALDOR',
          skills: 'I have a skill',
          facebook: 'walid@facebook.com',
          linkedin: 'walid@linkedin',
          twitter: 'walid@twitter',
          instagram: 'walid@instagram',
          image: 'Walid.jpg'
        }
      ])
    })
}
