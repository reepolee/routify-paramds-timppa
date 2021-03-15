<script>
  import { metatags } from "@roxi/routify";
  import data from "../data";
  metatags.title = "My Routify app";
  metatags.description = "Description coming soon...";
</script>

<h1>Store home page</h1>

{#each data.categories as category (category.id)}
  <p>
    <a href="/{category.slug}" style="padding:1rem">{category.title}</a>
  </p>
{/each}
