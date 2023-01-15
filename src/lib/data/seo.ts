import type { Organization, WithContext } from 'schema-dts'

export const siteTitle = 'Leon Radley'
export const siteDescription =
	'Here you will find articles, labs and projects relating to web development, 3d and programming.'

export const siteSchema: WithContext<Organization> = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	'@id': 'https://leon.id#organisation',
	url: 'https://leon.id',
	name: siteTitle,
	description: siteDescription,
}
