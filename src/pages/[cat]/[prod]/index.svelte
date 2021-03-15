<!-- routify:options param-is-page -->
<script>
  import data from "../../../data";
  export let prod;
  let product = data.products.find((el) => el.slug == prod);
  let category = data.categories.find((el) => el.id == product.category_id);
</script>

<h1>{category.title}</h1>

<p>
  {product.title}
</p>
