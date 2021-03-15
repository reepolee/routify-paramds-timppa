<script>
  import data from "../data";
</script>

<a href="/" style="padding:1rem">HOME</a>
{#each data.categories as category (category.id)}
  <a href="/{category.slug}" style="padding:1rem">{category.title}</a>
{/each}

<slot />
