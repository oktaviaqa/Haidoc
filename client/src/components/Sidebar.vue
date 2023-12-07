<script>
import { mapState, mapActions } from 'pinia';
import { useMedicineStore } from '../stores/medicine';
export default {
  data(){
      return {
        CategoryId: null
      }
    },
    computed: {
        ...mapState(useMedicineStore, ['categories', 'medicines']),

    },
    methods: {
      ...mapActions(useMedicineStore, ['fetchCategories', 'fetchMedicines']),
      handleFilter(category){
        this.CategoryId = category.id
        this.fetchMedicines(1, this.CategoryId)
      }
    },
    created() {
      this.fetchCategories(),
      this.fetchMedicines(1, this.CategoryId);
    },
}
</script>
<template>
        <div class="sidebar  has-scrollbar" data-mobile-menu>

<div class="sidebar-category">

  <div class="sidebar-top">
    <h2 class="sidebar-title">Kategori</h2>

    <button class="sidebar-close-btn" data-mobile-menu-close-btn>
      <ion-icon name="close-outline"></ion-icon>
    </button>
  </div>

  <ul v-for="category in categories" :key="category.id" class="sidebar-menu-category-list">

    <li class="sidebar-menu-category">

      <button @click.prevent="handleFilter(category)" class="sidebar-accordion-menu" data-accordion-btn>

        <div class="menu-title-flex">
            <img :src=category.imageUrl style="width: 40px; height: 40px;" alt="clothes" width="20" height="20"
                      class="menu-title-img">

          <p class="menu-title">{{ category.name }}</p>
        </div>

      </button>


    </li>


  </ul>

</div>


</div>
</template>