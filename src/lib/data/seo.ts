import type { Organization, WithContext } from 'schema-dts'

export const siteTitle = 'Leon Radley'
export const siteDescription =
  'Here you will find articles, labs and projects relating to web development, 3d and programming.'

export const siteSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://leonradley.com#organisation',
  url: 'https://leonradley.com',
  name: siteTitle,
  description: siteDescription,
}
