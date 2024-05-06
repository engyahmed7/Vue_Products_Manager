<template>
    <div class="container mt-3">
        <h2 v-if="!paramsId" class="display-5 mt-3 text-center">Add Product</h2>
        <h2 v-else class="display-5 mt-3 text-center">Edit Product</h2>

        <form @submit.prevent="!this.paramsId ? addProduct() : updateProduct()">
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
              v-if="!this.paramsId">
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

    export default {
        name: 'editAndCreateProduct',
        data(){
            return{
                title: '',
                price: '',
                description: '',
                thumbnail: '',
                paramsId:''
            }
        },
        async created() {
            this.paramsId = this.$route.params.id;
            if (this.paramsId) {
                try {
                    await this.$store.dispatch('getProductById', this.paramsId);
                    this.title = this.$store.state.product.title;
                    this.description = this.$store.state.product.description;
                    this.price = this.$store.state.product.price;
                    this.thumbnail = this.$store.state.product.thumbnail;
                } catch (error) {
                    console.error('Error fetching product details:', error);
                }
            }
        },
        methods:{
            async addProduct(){
                try{
                    await this.$store.dispatch('createProduct',{
                        title: this.title,
                        price: this.price,
                        description: this.description,
                        thumbnail: this.thumbnail
                    });
                    this.$router.push('/');
                }catch(err){
                    console.log(err);
                }
            },
            async updateProduct(){
                try {
                await this.$store.dispatch('updateProduct', {
                    id: this.paramsId,
                    updatedProduct: {
                        title: this.title,
                        price: this.price,
                        description: this.description,
                        thumbnail: this.thumbnail
                    }
                });
                this.$router.push('/');
            } catch (error) {
                console.error('Error updating product:', error);
            }
            }
        }
    }
</script>

<style scoped>

</style>