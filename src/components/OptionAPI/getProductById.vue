<template>
    <div class="container mt-5">
      <div class="row">
        <h2 class="text-center mb-4 display-5">{{ product.title }}</h2>
        <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div class="card shadow">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <div class="image-container">
                    <img :src="product.thumbnail" :alt="product.title" class="img-fluid rounded" />
                  </div>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                  <h2 class="card-title">{{ product.title }}</h2>
                  <p class="lead">{{ product.description }}</p>
                  <p class="lead">Price: ${{ product.price }}</p>
                  <div class="d-flex justify-content-between align-items-center mt-4">
                    <router-link to="" class="btn btn-primary w-50 me-1">Edit</router-link>
                    <button class="btn btn-danger w-50" @click="deleteProduct(product.id)">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
    export default {
        name: 'getProductById',
        computed:{
            product(){
                return this.$store.state.product;
            }
        },
        created(){
            this.$store.dispatch('getProductById', this.$route.params.id);
        },
        methods:{
            async deleteProduct(id){
            try{
                await this.$store.dispatch('deleteProduct',id);
                this.$router.push('/');
            }catch(err){
                console.log(err);
            }
        }
        }
    }
</script>

<style scoped>
.card {
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.image-container {
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
}

.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  opacity: 0.8;
}
</style>
