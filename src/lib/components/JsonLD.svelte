<script lang="ts">
  import type { Thing, WithContext } from 'schema-dts'

  interface Props {
    schema: Thing | WithContext<Thing>
  }
  let { schema }: Props = $props()
</script>

{@html `<script type="application/ld+json"> ${JSON.stringify(schema)} </script>`}
