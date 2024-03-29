---
title: React and Typescript
date: '2021-05-15'
description: How to write typescript React Components
tags:
  - react
  - typescript
# githubUrl: https://www.github.com
---

I do not use the built in functional component type `React.FC` because it forces you to always have the prop `children`.
Instead I like to be explicit about what props go into each component, that way `VS Code` will give me a hard time if I try to add a child to a component that does not support it.

### Transform or Format Components

When you only want to style some input or transform it.

```ts
import formatISO from 'date-fns/formatISO'

export interface DateProps {
	date: string
}
export function Date({ date }: DateProps) {
	if (!date) {
		return null
	}
	const formatted = formatISO(date, { representation: 'date' })
	return <time dateTime={formatted}>{formatted}</time>
}
```

### Wrappers

When you want to create a wrapper element that always will have children

```ts
import clsx from 'clsx'
import { ReactNode } from 'react'

export interface GridProps {
	children: ReactNode // VS Code will warn you if you use this component without children
	className?: string // optional posibility to add additional classes to grid
}
export function Grid({ children, className }: GridProps) {
	const mobileLayout = 'grid gap-4 grid-cols-1'
	const desktopLayout = 'md:gap-8 md:grid-cols-2'

	return <div className={clsx('grid', mobileLayout, desktopLayout, className)}>{children}</div>
}
```

<mark>
  I'm using <a href="https://tailwindcss.com/">Tailwind CSS in the above example</a>
</mark>
