<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center mb-4 display-6">All Products</h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Product Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in products"
              :key="product.id">
              <td>{{ product.id }}</td>
              <td>
                <router-link
                  class="text-dark text-decoration-none"
                  :to="'/' + product.id">
                  {{ product.title }}
                </router-link>
              </td>
              <td>${{ product.price }}</td>
              <td class="lead">{{ product.description }}</td>
              <td class="d-flex">
                <router-link
                  :to="'/edit/' + product.id"
                  class="btn btn-warning me-1"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click="deleteProduct(product.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch('getAllProducts');
  },
  methods: {
    async deleteProduct(id) {
      try {
        await this.$store.dispatch('deleteProduct', id);
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
