<template>
  <div class="container mt-3">
    <h2
      v-if="!paramsId"
      class="display-5 mt-3 text-center">
      Add Product
    </h2>
    <h2
      v-else
      class="display-5 mt-3 text-center">
      Edit Product
    </h2>

    <form @submit.prevent="!paramsId ? addProduct() : updateProduct()">
      <div class="mb-3">
        <label
          for="title"
          class="form-label"
          >Title</label
        >
        <input
          type="text"
          class="form-control"
          id="title"
          v-model.lazy.trim="title" />
      </div>
      <div class="mb-3">
        <label
          for="description"
          class="form-label"
          >Description</label
        >
        <textarea
          class="form-control"
          id="description"
          v-model.lazy.trim="description"></textarea>
      </div>
      <div class="mb-3">
        <label
          for="price"
          class="form-label"
          >Price</label
        >
        <input
          type="number"
          class="form-control"
          id="price"
          v-model.lazy.number="price" />
      </div>
      <div class="mb-3">
        <label
          for="thumbnail"
          class="form-label"
          >Thumbnail</label
        >
        <input
          type="text"
          class="form-control"
          id="thumbnail"
          v-model="thumbnail" />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        v-if="!paramsId">
        Add
      </button>
      <button
        type="submit"
        class="btn btn-primary"
        v-else>
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const title = ref('');
    const description = ref('');
    const price = ref(0);
    const thumbnail = ref('');

    const paramsId = computed(() => router.currentRoute.value.params.id);

    const getProductDetails = async () => {
      if (paramsId.value) {
        console.log(paramsId.value);
        try {
          await store.dispatch('getProductById', paramsId.value);
          title.value = store.state.product.title;
          description.value = store.state.product.description;
          price.value = store.state.product.price;
          thumbnail.value = store.state.product.thumbnail;
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      }
    };
    onMounted(getProductDetails);

    const addProduct = async () => {
      try {
        await store.dispatch('createProduct', {
          title: title.value,
          description: description.value,
          price: price.value,
          thumbnail: thumbnail.value,
        });
        router.push('/products');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };

    const updateProduct = async () => {
      try {
        await store.dispatch('updateProduct', {
          id: paramsId.value,
          updatedProduct: {
            title: title.value,
            description: description.value,
            price: price.value,
            thumbnail: thumbnail.value,
          },
        });
        router.push('/products');
      } catch (error) {
        console.error('Error updating product:', error);
      }
    };

    return {
      paramsId,
      title,
      description,
      price,
      thumbnail,
      addProduct,
      updateProduct,
    };
  },
};
</script>

<style scoped></style>
