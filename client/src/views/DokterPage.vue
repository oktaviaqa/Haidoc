<script>
import { mapState, mapActions } from 'pinia';
import { useDoctorStore } from '../stores/doctor';
import { useMedicineStore } from '../stores/medicine';
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            SpecialistId: '',
            search: ''
        };
    },
    methods: {
        ...mapActions(useDoctorStore, ['fetchSpecialist', 'fetchDoctor']),
        ...mapActions(useMedicineStore, ['fetchCategories', 'fetchCart', 'fetchMedicines']),
        handleFilter(specialist) {
            this.SpecialistId = specialist.id;
            this.fetchDoctor(this.SpecialistId);
        },
        handleSearch() {
        this.fetchDoctor(1, '', this.search);
    }
    },
    computed: {
        ...mapState(useDoctorStore, ['specialists', 'doctors']),
        ...mapState(useMedicineStore, ['categories', 'carts', 'medicines']),
    },
    created() {
        this.fetchCategories(),
            this.fetchCart(),
            this.fetchMedicines(),
            this.fetchSpecialist(),
            this.fetchDoctor();
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

                    <RouterLink to="/login" class="action-btn">
                        <ion-icon name="person-outline"></ion-icon>
                    </RouterLink>

                    <button class="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>
                        <span class="count">0</span>
                    </button>

                    <RouterLink to="/cart" class="action-btn">
                        <ion-icon name="bag-handle-outline"></ion-icon>
                        <span class="count">{{ carts.length }}</span>
                    </RouterLink>

                </div>

            </div>

        </div>

        <nav class="desktop-navigation-menu">

            <div class="container">

                <ul class="desktop-menu-category-list">

                    <li class="menu-category" v-for="specialist in specialists" :key="specialist.id">
                        <a @click.event="handleFilter(specialist)" class="menu-title">{{ specialist.name }}</a>
                    </li>
                </ul>

            </div>

        </nav>

        <div class="mobile-bottom-navigation">

            <button class="action-btn" data-mobile-menu-open-btn>
                <ion-icon name="menu-outline"></ion-icon>
            </button>

            <button class="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>

                <span class="count">0</span>
            </button>

            <button class="action-btn">
                <ion-icon name="home-outline"></ion-icon>
            </button>

            <button class="action-btn">
                <ion-icon name="heart-outline"></ion-icon>

                <span class="count">0</span>
            </button>

            <button class="action-btn" data-mobile-menu-open-btn>
                <ion-icon name="grid-outline"></ion-icon>
            </button>

        </div>


    </header>
    <div class="product-main">
        <h2 class="title" style="text-align: center">Pilih dokter yang anda butuhkan!</h2>
        <br />
        <div class="product-grid" 
        style="margin-right: 100px;
         margin-left: 100px;">
            
            <div v-for="doctor in doctors" :key="doctor.id" class="showcase">
    
        <div class="showcase-banner">
    
          <img :src=doctor.profilPict alt="Mens Winter Leathers Jackets" width="300" class="product-img default">
    
          <div class="showcase-actions">
    
            <button @click.prevent="addCart(medicine.id)" class="btn-action">
                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            </button>
    
          </div>
    
        </div>
    
        <div class="showcase-content">
    
          <a href="#" class="showcase-category">{{ doctor.name }}</a>
    
          <a href="#">
            <h3 class="showcase-title">{{ doctor.Specialist.name }}</h3>
          </a>
    
          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
    
          <div class="price-box">
            <p class="price">Rp. {{ doctor.price }}</p>
          </div>
    
        </div>
    
      </div>
    
    
    </div>

    </div>
</template>