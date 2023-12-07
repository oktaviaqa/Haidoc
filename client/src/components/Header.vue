<script>
import { mapState, mapActions } from 'pinia';
import { useMedicineStore } from '../stores/medicine';
import { RouterLink } from 'vue-router';
import { useToast } from "vue-toastification";
const toast = useToast()
export default {
    data() {
        return {
            search: '',
            CategoryId: '',
            loggedIn: false
        };
    },
    computed: {
        ...mapState(useMedicineStore, ['categories', 'carts', 'medicines']),
    },
    methods: {
        ...mapActions(useMedicineStore, ['fetchCategories', 'fetchCart', 'fetchMedicines']),
        handleFilter(category) {
            this.CategoryId = category.id;
            this.fetchMedicines(1, this.CategoryId);
        },
        async logOut() {
            try {
                localStorage.removeItem('access_token')
                toast.success("Logged out successfully")
                this.$router.push('/')
            } catch (error) {
                console.log(error);
            }
        },
        handleSearch() {
        console.log('ppppp');
        this.fetchMedicines(1, '', this.search);
    },
    async changePageSearch() {
      try {
        this.$router.push('/cart')
      } catch (error) {
        console.log(error);
      }
    },
    },
    
    created() {
        this.fetchCategories(),
            this.fetchCart(),
            this.fetchMedicines(),
            this.loggedIn = !!localStorage.getItem('access_token');
    },
    components: { RouterLink }
}
</script>
<template>
    <header>



        <div class="header-main">

            <div class="container">

                <RouterLink to="/" class="header-logo">
                    <img src="../assets/images/logo/logo.svg" alt="Anon's logo" width="120" height="36">
                </RouterLink>

              
        <div class="header-search-container">
          <input v-model="search" type="search" name="search" class="search-field"
            placeholder="Enter your product name..." />

          <button class="search-btn" @click.prevent="handleSearch">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>


                <div class="header-user-actions">


                    <button v-if="loggedIn" @click.prevent="logOut" class="action-btn">
                        <ion-icon name="log-out-outline"></ion-icon>
                    </button>
                    <RouterLink v-else to="/login" class="action-btn">
                        <ion-icon name="person-outline"></ion-icon>
                    </RouterLink>



                    <button class="action-btn" @click.prevent="changePageSearch" >
                        <ion-icon name="bag-handle-outline"></ion-icon>
                        <span class="count">{{ carts.length }}</span>
                    </button>

                </div>

            </div>

        </div>


    </header>
</template>
