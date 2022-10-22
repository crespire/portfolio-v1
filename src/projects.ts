import { Project } from "./@types/project";
import short from 'short-uuid';
const repoBaseURL = 'https://github.com/crespire';
const projectSlug = 'proj-';

export const projects: Array<Project> = [
  {
    'id': `${projectSlug}railsbook`,
    'key': short.generate(),
    'name': 'Railsbook',
    'liveURL': 'https://railsbook.crespire.dev/',
    'repoURL': `${repoBaseURL}/rails_railsbook`,
    'blurb': 'An implementation of Facebook using Rails 7',
    'tech': ['Ruby on Rails', 'devise', 'Turbo/Stimulus', 'Sass CSS', 'RSpec', 'Heroku', 'AWS S3', 'git']
  },
  {
    'id': `${projectSlug}waldo`,
    'key': short.generate(),
    'name': "Where's Waldo?",
    'liveURL': 'https://crespire-waldo.vercel.app',
    'repoURL': `${repoBaseURL}/waldo`,
    'blurb': "A fullstack clicker game based on the classic children's books.",
    'tech': ['React', 'React Router', 'Ruby on Rails', 'TailwindCSS', 'npm', 'git', 'vercel', 'render'],
  },
  {
    'id': `${projectSlug}shop`,
    'key': short.generate(),
    'name': "Cozy Creature Canteen",
    'liveURL': 'https://cozy-creature-canteen.vercel.app',
    'repoURL': `${repoBaseURL}/js-shopping-cart`,
    'blurb': "A frontend storefront with multi-step checkout flow.",
    'tech': ['React', 'React Router', 'TailwindCSS', 'npm', 'git', 'vercel'],
  },
]