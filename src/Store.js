import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state: {
        products: [],
        product: {},
        id:''
    },
    actions: {
        async getAllProducts({ commit }) {
            const response = await axios.get("http://localhost:3000/products");
            commit("GET_PRODUCTS", response.data);
        },

        async getProductById({ commit }, id) {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            commit("GET_PRODUCT_BY_ID", response.data);
        },

        async createProduct({ commit }, product) {
            await axios.post("http://localhost:3000/products", product);
            commit("CREATE_PRODUCT", product);
        },

        async updateProduct({ commit }, payload) { 
            const { id, updatedProduct } = payload;
            await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);
            commit("UPDATE_PRODUCT", payload);
        },

        async deleteProduct({ commit }, id) {
            await axios.delete(`http://localhost:3000/products/${id}`);
            commit("DELETE_PRODUCT", id);
        },
    },
    mutations:{
        GET_PRODUCTS(state, products) { 
            state.products = products;
        },

        GET_PRODUCT_BY_ID(state, product) {
            state.product = product;
        },

        DELETE_PRODUCT(state, id) {
            state.products = state.products.filter((product) => product.id !== id);
       },
        CREATE_PRODUCT(state, product) {
            state.products.push(product);
        },
        UPDATE_PRODUCT(state, payload) {
            const { id, updatedProduct } = payload;
            const index = state.products.findIndex((product) => product.id === id);
            state.products.splice(index, 1, updatedProduct);
        },
    }
});

export default store;