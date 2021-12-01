exports.seed = (knex) => {
  // Deletes ALL existing entries
  const seedData = []
  for (let i = 0; i < 20; i++) { seedData.push({ id: i, authId: '', name: '', cohort: '', email: '', location: '', quote: '', githubLink: '', skills: '', facebook: '', linkedin: '', twitter: '', instagram: '' }) }

  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert(seedData)
    })
}
