<template>
    <div class="container mt-4">
      <div class="row">
        <h3 class="display-6 text-center mt-4 mb-5">All Products</h3>
        <div class="col-md-4 mb-5" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <div class="image-container">
              <img :src="product.thumbnail" :alt="product.title" class="card-img-top" />
            </div>
            <div class="card-body d-flex flex-column">
              <router-link :to="'/products/' + product.id" class="">
                <h5 class="card-title">{{ product.title }}</h5>
              </router-link>
              <p class="card-text lead">{{ product.description }}</p>
              <p class="card-text">${{ product.price }}</p>
              <div class="mt-auto card-footer"> 
                <router-link :to="'/products/edit/' + product.id" class="btn btn-primary me-3 w-50">Edit</router-link>
                <button class="btn btn-danger" @click="deleteProduct(product.id)">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'; 
export default {
    name: 'DisplayAllProduct',
    setup() {
        const products = ref([]);

        const store = useStore(); 

        onMounted(async () => {
            try {
                await store.dispatch('getAllProducts');
                products.value = store.state.products;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        });

        const deleteProduct = async (id) => {
            try {
                await store.dispatch('deleteProduct', id);
                products.value = products.value.filter(product => product.id !== id);
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        };

        return { products, deleteProduct }; 
    }
};
</script>

<style scoped>
  .card {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .image-container {
    height: 200px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
  }

  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-body {
    padding: 1.25rem;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .card-text {
    margin-bottom: 0.5rem;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    transition: background-color 0.3s ease;
  }

</style>