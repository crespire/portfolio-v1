const repoBaseURL = 'https://github.com/crespire';

export const projects = {
  'railsbook': {
    'name': 'Railsbook',
    'liveURL': 'https://railsbook.crespire.dev/',
    'repoURL': `${repoBaseURL}/rails_railsbook`,
    'blurb': 'An implementation of Facebook using Rails 7',
    'tech': ['Ruby on Rails', 'devise', 'Turbo/Stimulus', 'Sass CSS', 'RSpec', 'Heroku', 'AWS S3', 'git']
  },
  'waldo': {
    'name': "Where's Waldo?",
    'liveURL': 'https://crespire-waldo.vercel.app',
    'repoURL': `${repoBaseURL}/waldo`,
    'blurb': "A fullstack clicker game based on the classic children's books.",
    'tech': ['React', 'React Router', 'Ruby on Rails', 'TailwindCSS', 'npm', 'git', 'vercel', 'render'],
  },
}