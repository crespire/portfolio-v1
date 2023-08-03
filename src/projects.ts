import { Project } from "./@types/project";
import short from 'short-uuid';
const repoBaseURL = 'https://github.com/crespire';
const projectSlug = 'proj-';
const thumbPath = './assets/project_thumbs/';

export const projects: Array<Project> = [
  {
    'id': `${projectSlug}ezn`,
    'key': short.generate(),
    'name': 'EZ Newswire',
    'img': require(`${thumbPath}ezn.png`),
    'liveURL': 'https://app.eznewswire.com/',
    'repoURL': null,
    'blurb': 'A press release generator and publishing network for automating announcements.',
    'tech': ['Ruby on Rails', 'Turbo/Stimulus', 'Bootstrap', 'RSpec', 'ViewComponents']
  },
  {
    'id': `${projectSlug}railsbook`,
    'key': short.generate(),
    'name': 'Railsbook',
    'img': require(`${thumbPath}railsbook.png`),
    'liveURL': 'https://railsbook.crespire.dev/',
    'repoURL': `${repoBaseURL}/rails_railsbook`,
    'blurb': 'A monolithic implementation of Facebook using Rails 7 and Turbo/Stimulus.',
    'tech': ['Ruby on Rails', 'Turbo/Stimulus', 'Sass CSS', 'RSpec', 'Heroku', 'AWS S3', 'git']
  },
  {
    'id': `${projectSlug}buysell`,
    'key': short.generate(),
    'name': 'Buy & Sell',
    'img': require(`${thumbPath}buysell.png`),
    'liveURL': 'https://buysell.crespire.dev/',
    'repoURL': `${repoBaseURL}/buysell`,
    'blurb': 'A buy and sell toy application powered by a Typescript React frontend and Rails 7 api.',
    'tech': ['Ruby on Rails', 'Typescript', 'React', 'TailwindCSS', 'DaisyUI', 'React Query', 'RSpec', 'Cypress', 'docker', 'AWS S3', 'git']
  },
  {
    'id': `${projectSlug}waldo`,
    'key': short.generate(),
    'name': "Where's Waldo?",
    'img': require(`${thumbPath}waldo.png`),
    'liveURL': 'https://waldo.crespire.dev/',
    'repoURL': `${repoBaseURL}/waldo`,
    'blurb': "A fullstack clicker game based on the classic children's books.",
    'tech': ['React', 'Ruby on Rails', 'TailwindCSS', 'npm', 'git', 'vercel', 'render'],
  },
  {
    'id': `${projectSlug}shop`,
    'key': short.generate(),
    'name': "Pet Shop",
    'img': require(`${thumbPath}shop.png`),
    'liveURL': 'https://pet-shop.crespire.dev/',
    'repoURL': `${repoBaseURL}/js-shopping-cart`,
    'blurb': "A frontend storefront with multi-step checkout flow.",
    'tech': ['React', 'TailwindCSS', 'npm', 'git', 'vercel'],
  },
  {
    'id': `${projectSlug}chess`,
    'key': short.generate(),
    'name': "Ruby Chess",
    'img': require(`${thumbPath}chess.png`),
    'liveURL': 'https://replit.com/@crespire/rubychess?lite=1&outputonly=1#README.md',
    'repoURL': `${repoBaseURL}/ruby_chess`,
    'blurb': "A two player command line Chess game written in Ruby.",
    'tech': ['Ruby', 'replit', 'git'],
  },
  {
    'id': `${projectSlug}cards`,
    'key': short.generate(),
    'name': "Memory Cards",
    'img': require(`${thumbPath}cards.png`),
    'liveURL': 'https://memory-cards.crespire.dev/',
    'repoURL': `${repoBaseURL}/js-memory-cards`,
    'blurb': "A memory card game written with React hooks. Can you get them all?",
    'tech': ['React', 'git', 'Github Pages']
  },
  {
    'id': `${projectSlug}battleship`,
    'key': short.generate(),
    'name': "Battleship",
    'img': require(`${thumbPath}battleship.png`),
    'liveURL': 'https://crespire.github.io/js-battleship/',
    'repoURL': `${repoBaseURL}/js-battleship`,
    'blurb': "A frontend recreation of the classic game Battleship against a (dumb) computer.",
    'tech': ['Javascript', 'jest', 'webpack', 'git', 'Github Pages']
  },
]
