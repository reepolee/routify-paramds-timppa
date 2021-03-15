<!-- routify:options param-is-page -->
<script>
  import data from "../../data";
  export let cat;
  let category = data.categories.find((el) => el.slug == cat);
  let products = data.products.filter((el) => el.category_id == category.id);
</script>

<h1>{category.title}</h1>

{#each products as product (product.id)}
  <p>
    <a href="/{category.slug}/{product.slug}" style="padding:1rem">{product.title}</a>
  </p>
{/each}
