import chakraUI from '../../../../public/images/chakra-ui.png'
import css from '../../../../public/images/css.png'
import cypress from '../../../../public/images/cypress.png'
import docker from '../../../../public/images/docker.png'
import ESLint from '../../../../public/images/eslint.png'
import expo from '../../../../public/images/expo.png'
import framerMotion from '../../../../public/images/framer-motion.png'
import git from '../../../../public/images/git.png'
import graphql from '../../../../public/images/graphql.png'
import html from '../../../../public/images/html.png'
import jest from '../../../../public/images/jest.png'
import mobx from '../../../../public/images/mobx.svg'
import nextJS from '../../../../public/images/next-js.png'
import reactAria from '../../../../public/images/react-aria.png'
import reactHookForm from '../../../../public/images/react-hook-form.png'
import react from '../../../../public/images/react.png'
import rest from '../../../../public/images/rest.png'
import sentry from '../../../../public/images/sentry.png'
import storybook from '../../../../public/images/storybook.png'
import styledComponents from '../../../../public/images/styled-components.png'
import tailwind from '../../../../public/images/tailwind.svg'
import turborepo from '../../../../public/images/turborepo.png'
import typescript from '../../../../public/images/typescript.png'
import vanillaExtract from '../../../../public/images/vanilla-extract.png'
import VSCode from '../../../../public/images/vs-code.png'
import xstate from '../../../../public/images/xstate.png'
import zod from '../../../../public/images/zod.png'
import zustand from '../../../../public/images/zustand.png'
import { TSkill } from './types'

type TSkillCategory = {
  title: string
  skills: RoA<TSkill>
}

const REACT: TSkill = {
  title: `React`,
  url: `https://react.dev/`,
  progress: 5,
  icon: react,
  iconDescription: `React logo`,
  description: `almost exclusively with hooks, mostly web applications (not simple sites) with a lot of state and API calls`,
}

const TYPESCRIPT: TSkill = {
  title: `TypeScript`,
  url: `https://www.typescriptlang.org/`,
  progress: 5,
  icon: typescript,
  iconDescription: `TypeScript logo`,
  description: `using proper TS (not many anys to be found) and swapping to JS only in rare occasions (eg. some small utility CLI tools)`,
}

const GRAPHQL: TSkill = {
  title: `GraphQL`,
  url: `https://graphql.org/`,
  progress: 5,
  icon: graphql,
  iconDescription: `GraphQL logo`,
  description: `with Apollo or URQL client, end-to-end type safety with TS, generated types and hooks based on frontend documents`,
}

const REST_API: TSkill = {
  title: `REST`,
  url: `https://www.redhat.com/en/topics/api/what-is-a-rest-api`,
  progress: 3,
  icon: rest,
  iconDescription: `settings sign with API written over it`,
  description: `mostly with axios, some experience with fetch, not much with other libs`,
}

const REACT_CONTEXT: TSkill = {
  title: `State + context`,
  url: `https://react.dev/reference/react/createContext`,
  progress: 5,
  icon: react,
  iconDescription: `React logo`,
  description: `default, go-to solution for state management, suitable for small to medium apps`,
}

const MOBX: TSkill = {
  title: `MobX + MST`,
  url: `https://mobx.js.org/`,
  progress: 3,
  icon: mobx,
  iconDescription: `MobX logo`,
  description: `worked with an older version, in a larger app with a single, global store`,
}

const XSTATE: TSkill = {
  title: `XState`,
  url: `https://xstate.js.org/`,
  progress: 2,
  icon: xstate,
  iconDescription: `XState logo`,
  description: `used for few pieces of more complicated state`,
}

const REACT_HOOK_FORM: TSkill = {
  title: `React hook form`,
  url: `https://react-hook-form.com/api`,
  icon: reactHookForm,
  iconDescription: `React hook form logo`,
  progress: 3,
  description: `used in multiple apps for managing the state of larger forms`,
}

const ZUSTAND: TSkill = {
  title: `Zustand`,
  url: `https://zustand-demo.pmnd.rs/`,
  progress: 0,
  icon: zustand,
  iconDescription: `Zustand logo`,
  description: `would like to try it out and possibly use it as a default state management solution`,
}

const ZOD: TSkill = {
  title: `Zod`,
  url: `https://zod.dev/`,
  progress: 0,
  icon: zod,
  iconDescription: `Zod logo`,
  description: `would really like to get more into schema validation – especially when working with REST APIs, but also for data stored in persistence`,
}

const STYLED_COMPONENTS: TSkill = {
  title: `Styled components`,
  url: `https://styled-components.com/`,
  progress: 5,
  icon: styledComponents,
  iconDescription: `Styled components logo`,
  description: `used a lot in the past, but now I try to get more into build time solutions`,
}

const CHAKRA_UI: TSkill = {
  title: `Chakra UI`,
  url: `https://chakra-ui.com/`,
  progress: 3,
  icon: chakraUI,
  iconDescription: `ChakraUI logo`,
  description: `built an internal component library on top of Chakra, used it in multiple applications`,
}

const VANILLA_EXTRACT: TSkill = {
  title: `Vanilla extract`,
  url: `https://vanilla-extract.style/`,
  progress: 3,
  icon: vanillaExtract,
  iconDescription: `Vanilla extract logo`,
  description: `used in my personal website, really liked it as a modern, viable CSS-in-JS solution`,
}

const REACT_ARIA: TSkill = {
  title: `React Aria`,
  url: `https://react-spectrum.adobe.com/react-aria/`,
  progress: 2,
  icon: reactAria,
  iconDescription: `React Aria (Adobe) logo`,
  description: `not really styling, but I have tested it in one project and it seems like a good base for building accessible components`,
}

const FRAMER_MOTION: TSkill = {
  title: `Framer motion`,
  url: `https://www.framer.com/motion/`,
  progress: 0,
  icon: framerMotion,
  iconDescription: `Framer motion logo`,
  description: `would really like to do more with it, seems fun`,
}

const TAILWIND: TSkill = {
  title: `Tailwind`,
  url: `https://tailwindcss.com/`,
  progress: 0,
  icon: tailwind,
  iconDescription: `Tailwind logo`,
  description: `know the hype but never used it myself, prefer CSS over classes but wouldn’t mind trying it out`,
}

const GIT: TSkill = {
  title: `Git`,
  url: `https://git-scm.com/`,
  progress: 4,
  icon: git,
  iconDescription: `Git logo`,
  description: `used daily, know the basics (including rebase, cherry-pick, etc.), but only in a small team where conflicts were mostly avoidable (mostly on Bitbucket)`,
}

const HTML: TSkill = {
  title: `HTML`,
  url: `https://developer.mozilla.org/en-US/docs/Web/HTML`,
  progress: 5,
  icon: html,
  iconDescription: `HTML 5 logo`,
  description: `try to write semantic HTML and use the right tags for the right job whenever possible`,
}

const CSS: TSkill = {
  title: `CSS`,
  url: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
  progress: 4,
  icon: css,
  iconDescription: `CSS 3 logo`,
  description: `can write my own styles, confident when using both flexbox and grid layouts, mostly using CSS-in-JS or CSS modules`,
}

const STORYBOOK: TSkill = {
  title: `Storybook`,
  url: `https://storybook.js.org/`,
  progress: 4,
  icon: storybook,
  iconDescription: `Storybook logo`,
  description: `love the tool, used in multiple projects for UI lib development and documentation, would like to try visual testing as well`,
}

const TESTING: TSkill = {
  title: `Testing`,
  url: `https://jestjs.io/`,
  progress: 1,
  icon: jest,
  iconDescription: `Jest logo`,
  description: `not used to write unit tests as most of the business logic in apps I worked on was on the BE side, I understand the importance of it though`,
}

const CYPRESS: TSkill = {
  title: `Cypress`,
  url: `https://www.cypress.io/`,
  progress: 2,
  icon: cypress,
  iconDescription: `Cypress logo`,
  description: `E2E tests make the most sense to me – I have used Cypress in few projects to ensure core functionality works as expected`,
}

const SENTRY: TSkill = {
  title: `Sentry`,
  url: `https://sentry.io/welcome/`,
  progress: 3,
  icon: sentry,
  iconDescription: `Sentry logo`,
  description: `connected to multiple projects both in React and React Native to keep track of user errors`,
}

const VS_CODE: TSkill = {
  title: `VS Code`,
  url: `https://code.visualstudio.com/`,
  progress: 5,
  icon: VSCode,
  iconDescription: `VS Code logo`,
  description: `the editor of choice, using shortcuts, command palette, various extensions and even custom snippets!`,
}

const ESLINT: TSkill = {
  title: `ESLint & Prettier`,
  url: `https://eslint.org/`,
  progress: 4,
  icon: ESLint,
  iconDescription: `ESLint logo`,
  description: `using these in every project, although I would prefer prettier to be less opinionated sometimes`,
}

const TURBOREPO: TSkill = {
  title: `Monorepo`,
  url: `https://turbo.build/`,
  progress: 2,
  icon: turborepo,
  iconDescription: `Turborepo logo`,
  description: `used and set up few of these, most recently using TurboRepo, but would like to try Nx as well`,
}

const DOCKER: TSkill = {
  title: `Docker`,
  url: `https://www.docker.com/`,
  progress: 0,
  icon: docker,
  iconDescription: `Docker logo`,
  description: `never had a need to use it, but I understand the benefits and would like to get into it one day`,
}

const REACT_NATIVE: TSkill = {
  title: `React Native (Expo)`,
  url: `https://docs.expo.dev/`,
  progress: 3,
  icon: expo,
  iconDescription: `Expo logo`,
  description: `created multiple applications for both Android and iOS, all using Expo and without a need to write custom native modules`,
}

const NEXT_JS: TSkill = {
  title: `NextJS`,
  url: `https://nextjs.org/`,
  progress: 3,
  icon: nextJS,
  iconDescription: `NextJS logo`,
  description: `a go-to default for any new React app, built few applications both with pages and app directory router`,
}

/**
 * data for the tech skills section of extended CV page,
 * includes skills divided into categories
 * and for each skill it's title, description, icon, and current progress
 */
export const TECH_SKILLS_BY_CATEGORY: RoA<TSkillCategory> = [
  {
    title: `Core`,
    skills: [REACT, TYPESCRIPT],
  },
  {
    title: `Data`,
    skills: [GRAPHQL, REST_API, REACT_CONTEXT, MOBX, XSTATE, REACT_HOOK_FORM, ZUSTAND, ZOD],
  },
  {
    title: `Styles`,
    skills: [STYLED_COMPONENTS, CHAKRA_UI, VANILLA_EXTRACT, REACT_ARIA, FRAMER_MOTION, TAILWIND],
  },
  {
    title: `Basics`,
    skills: [GIT, HTML, CSS],
  },
  {
    title: `Utilities`,
    skills: [STORYBOOK, TESTING, CYPRESS, SENTRY],
  },
  {
    title: `DX`,
    skills: [VS_CODE, ESLINT, TURBOREPO, DOCKER],
  },
  {
    title: `Other`,
    skills: [REACT_NATIVE, NEXT_JS],
  },
]

/**
 * all tech skills exported as a single object
 */
export const TECH_SKILLS = {
  REACT,
  TYPESCRIPT,
  GRAPHQL,
  REST_API,
  REACT_CONTEXT,
  MOBX,
  XSTATE,
  REACT_HOOK_FORM,
  ZUSTAND,
  ZOD,
  STYLED_COMPONENTS,
  CHAKRA_UI,
  VANILLA_EXTRACT,
  REACT_ARIA,
  FRAMER_MOTION,
  TAILWIND,
  GIT,
  HTML,
  CSS,
  STORYBOOK,
  TESTING,
  CYPRESS,
  SENTRY,
  VS_CODE,
  ESLINT,
  TURBOREPO,
  DOCKER,
  REACT_NATIVE,
  NEXT_JS,
}
