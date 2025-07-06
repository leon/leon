// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      seoTitle?: string
      seoDescription?: string
    }
    // interface Platform {}
  }
}

declare module '*.svx' {
  import type { SvelteComponent } from 'svelte'

  export default class Comp extends SvelteComponent {}

  export const metadata: Record<string, unknown>
}

export {}
