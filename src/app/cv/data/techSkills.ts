import { StaticImageData } from 'next/image'

import chakraUI from '../../../../public/images/chakra-ui.png'
import css from '../../../../public/images/css.png'
import cypress from '../../../../public/images/cypress.png'
import docker from '../../../../public/images/docker.png'
import ESLint from '../../../../public/images/eslint.png'
import framerMotion from '../../../../public/images/framer-motion.png'
import git from '../../../../public/images/git.png'
import graphql from '../../../../public/images/graphql.png'
import html from '../../../../public/images/html.png'
import jest from '../../../../public/images/jest.png'
import mobx from '../../../../public/images/mobx.svg'
import nextJS from '../../../../public/images/next-js.png'
import reactAria from '../../../../public/images/react-aria.png'
import reactHookForm from '../../../../public/images/react-hook-form.png'
import reactNative from '../../../../public/images/react-native.png'
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

type TSkill = {
  title: string
  description: string
  icon: StaticImageData
  iconDescription: string
  progress: 0 | 1 | 2 | 3 | 4 | 5
}

type TSkillCategory = {
  title: string
  skills: RoA<TSkill>
}

/**
 * data for the tech skills section of extended CV page,
 * includes skills divided into categories
 * and for each skill it's title, description, icon, and current progress
 */
export const TECH_SKILLS: RoA<TSkillCategory> = [
  {
    title: `Core`,
    skills: [
      {
        title: `React`,
        progress: 5,
        icon: react,
        iconDescription: `react logo`,
        description: `almost exclusively with hooks, mostly web applications (not simple sites) with a lot of state and API calls`,
      },
      {
        title: `TypeScript`,
        progress: 5,
        icon: typescript,
        iconDescription: `typescript logo`,
        description: `using proper TS (not many <i>any</i>s to be found) and swapping to JS only in rare occasions (eg. some small utility CLI tools)`,
      },
    ],
  },

  {
    title: `Data`,
    skills: [
      {
        icon: graphql,
        iconDescription: `graphql logo`,
        title: `GraphQL`,
        progress: 5,
        description: `with Apollo or URQL client, end-to-end type safety with TS, generated types and hooks based on frontend documents`,
      },
      {
        icon: rest,
        iconDescription: `settings sign with API written over it`,
        title: `REST`,
        progress: 3,
        description: `mostly with axios, some experience with fetch, not much with other libs`,
      },
      {
        icon: react,
        iconDescription: `React logo`,
        title: `State + context`,
        progress: 5,
        description: `default, go-to solution for state management, suitable for small to medium apps`,
      },
      {
        icon: mobx,
        iconDescription: `MobX logo`,
        title: `MobX + MST`,
        progress: 3,
        description: `worked with an older version, in a larger app with a single, global store`,
      },
      {
        title: `XState`,
        progress: 2,
        icon: xstate,
        iconDescription: `XState logo`,
        description: `used for few pieces of more complicated state`,
      },
      {
        title: `React hook form`,
        icon: reactHookForm,
        iconDescription: `React hook form logo`,
        progress: 3,
        description: `used in multiple apps for managing the state of larger forms`,
      },
      {
        icon: zustand,
        iconDescription: `Zustand logo`,
        title: `Zustand`,
        progress: 0,
        description: `would like to try it out and possibly use it as a default state management solution`,
      },
      {
        icon: zod,
        iconDescription: `Zod logo`,
        title: `Zod`,
        progress: 0,
        description: `would really like to get more into schema validation – especially when working with REST APIs, but also for data stored in persistence`,
      },
    ],
  },

  {
    title: `Styles`,
    skills: [
      {
        icon: styledComponents,
        iconDescription: `Styled components logo`,
        title: `Styled components`,
        progress: 5,
        description: `used a lot in the past, but now I try to get more into build time solutions`,
      },
      {
        icon: chakraUI,
        iconDescription: `ChakraUI logo`,
        title: `Chakra UI`,
        progress: 3,
        description: `built an internal component library on top of Chakra, used it in multiple applications`,
      },
      {
        icon: vanillaExtract,
        iconDescription: `Vanilla extract logo`,
        title: `Vanilla extract`,
        progress: 3,
        description: `used in my personal website, really liked it as a modern, viable CSS-in-JS solution`,
      },
      {
        icon: reactAria,
        iconDescription: `React Aria (Adobe) logo`,
        title: `React Aria`,
        progress: 2,
        description: `not really styling, but I have tested it in one project and it seems like a good base for building accessible components`,
      },
      {
        icon: framerMotion,
        iconDescription: `Framer motion logo`,
        title: `Framer motion`,
        progress: 0,
        description: `would really like to do more with it, seems fun`,
      },
      {
        icon: tailwind,
        iconDescription: `Tailwind logo`,
        title: `Tailwind`,
        progress: 0,
        description: `know the hype but never used it myself, prefer CSS over classes but wouldn’t mind trying it out`,
      },
    ],
  },

  {
    title: `Basics`,
    skills: [
      {
        icon: git,
        iconDescription: `Git logo`,
        title: `Git`,
        progress: 4,
        description: `used daily, know the basics (including rebase, cherry-pick, etc.), but only in a small team where conflicts were mostly avoidable (mostly on Bitbucket)`,
      },
      {
        icon: html,
        iconDescription: `HTML 5 logo`,
        title: `HTML`,
        progress: 5,
        description: `try to write semantic HTML and use the right tags for the right job whenever possible`,
      },
      {
        icon: css,
        iconDescription: `CSS 3 logo`,
        title: `CSS`,
        progress: 4,
        description: `can write my own styles, confident when using both flexbox and grid layouts, mostly using CSS-in-JS or CSS modules`,
      },
    ],
  },

  {
    title: `Utilities`,
    skills: [
      {
        icon: storybook,
        iconDescription: `Storybook logo`,
        title: `Storybook`,
        progress: 4,
        description: `love the tool, used in multiple projects for UI lib development and documentation, would like to try visual testing as well`,
      },
      {
        icon: jest,
        iconDescription: `Jest logo`,
        title: `Testing`,
        progress: 1,
        description: `not used to write unit tests as most of the business logic in apps I worked on was on the BE side, I understand the importance of it though`,
      },
      {
        icon: cypress,
        iconDescription: `Cypress logo`,
        title: `Cypress`,
        progress: 2,
        description: `E2E tests make the most sense to me – I have used Cypress in few projects to ensure core functionality works as expected`,
      },
      {
        icon: sentry,
        iconDescription: `Sentry logo`,
        title: `Sentry`,
        progress: 3,
        description: `connected to multiple projects both in React and React Native to keep track of user errors`,
      },
    ],
  },

  {
    title: `DX`,
    skills: [
      {
        icon: VSCode,
        iconDescription: `VS Code logo`,
        title: `VS Code`,
        progress: 5,
        description: `the editor of choice, using shortcuts, command palette, various extensions and even custom snippets!`,
      },
      {
        icon: ESLint,
        iconDescription: `ESLint logo`,
        title: `ESLint & Prettier`,
        progress: 4,
        description: `using these in every project, although I would prefer prettier to be less opinionated sometimes`,
      },
      {
        icon: turborepo,
        iconDescription: `Turborepo logo`,
        title: `Monorepo`,
        progress: 2,
        description: `used and set up few of these, most recently using TurboRepo, but would like to try Nx as well`,
      },
      {
        icon: docker,
        iconDescription: `Docker logo`,
        title: `Docker`,
        progress: 0,
        description: `never had a need to use it, but I understand the benefits and would like to get into it one day`,
      },
    ],
  },

  {
    title: `Other`,
    skills: [
      {
        icon: reactNative,
        iconDescription: `React Native logo`,
        title: `React Native`,
        progress: 3,
        description: `created multiple applications for both Android and iOS, all using Expo and without a need to write custom native modules`,
      },
      {
        icon: nextJS,
        iconDescription: `NextJS logo`,
        title: `NextJS`,
        progress: 3,
        description: `a go-to default for any new React app, built few applications both with pages and app directory router`,
      },
    ],
  },
]
