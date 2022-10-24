import { Project } from "./@types/project";
import short from 'short-uuid';
const repoBaseURL = 'https://github.com/crespire';
const projectSlug = 'proj-';
const thumbPath = './assets/project_thumbs/';

export const projects: Array<Project> = [
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
    'name': "Cozy Creature Canteen",
    'img': require(`${thumbPath}shop.png`),
    'liveURL': 'https://pet-shop.crespire.dev/',
    'repoURL': `${repoBaseURL}/js-shopping-cart`,
    'blurb': "A frontend storefront with multi-step checkout flow.",
    'tech': ['React', 'TailwindCSS', 'npm', 'git', 'vercel'],
  },
]