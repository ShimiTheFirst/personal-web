// CSS layers are used to control the order in which styles are applied.
// The problem was that when element got unmounted and mounted again,
// the base component styles were applied with more specificity than the override styles
// passed as props – because the override styles were not unmounted
// as the parent component stayed mounted.
// This was happening eg. on route change via top navigation.

// The `defaults` layer should contain global styles.

// The `base` layer should be used for component’s own styles
// if that component supports override (className prop).

// The `override` layer could be used for override styles passed as props,
// but it’s not necessary as styles outside of any layer are applied last.

// ! careful because `base` and `default` layers are already present in the browser

// using vanilla extract to generate css layers was breaking the next build
// ? FIXME later

const defaults = 'defaultsLayer'
const base = 'baseLayer'
const override = 'overrideLayer'

export const LAYERS = { defaults, base, override } as const
