exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, authId: '', name: 'Dane Williams', cohort: 'aihe-21', email: 'this @email.net', location: 'Wellington', Quote: 'This is a quote', githubLink: 'this is a link', skills: 'i have a skill', facebook: 'dane@facebook.com', linkedin: 'dane@likedin', twitter: 'dane@twiiter', instagram: 'dane@instagram', image: 'Dane.jpg' },
        { id: 2, authId: '', name: 'Natalia Ramirez', cohort: 'aihe-21', email: 'ntlc.ramirez@gmail.com', location: 'Wellington', Quote: 'Dont worry, be happy', githubLink: 'Link', skills: 'Front-end developer', facebook: 'natalia@facebook.com', linkedin: 'natalia@likedin', twitter: 'natalia@twiiter', instagram: 'dane@instagram', image: 'Natalia.jpg' }
      ])
    })
}
