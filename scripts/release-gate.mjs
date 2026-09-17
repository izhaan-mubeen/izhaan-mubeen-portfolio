const requiredRepositories = [
  { name: 'AI Study Assistant', url: null, state: 'pending' },
  { name: 'Sand Simulation', url: null, state: 'pending' }
];

const blockers = requiredRepositories.filter((repo) => repo.state !== 'public-verified' || !repo.url);
if (blockers.length) {
  console.error('\nRELEASE BLOCKED — portfolio must remain local.');
  for (const blocker of blockers) console.error(`- ${blocker.name}: verified public GitHub repository required`);
  console.error('\nUpdate this release gate only after the exact repositories are public, nonempty and manually verified.\n');
  process.exit(1);
}
console.log('Release gate passed.');
