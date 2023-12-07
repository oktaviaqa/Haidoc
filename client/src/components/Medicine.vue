<script>
import { mapState, mapActions } from 'pinia';
import { useMedicineStore } from '../stores/medicine';
export default {
    data(){
    return {
      page: 1,
    }
  },
    computed: {
        ...mapState(useMedicineStore, ['medicines', 'carts']),

    },
    methods: {
      ...mapActions(useMedicineStore, ['fetchMedicines', 'addCart' ]),
    },
    created() {
        this.page = 1
      this.fetchMedicines(this.page)
    },
}
</script>
<template>
          <div class="product-main">

<h2 class="title">Obat</h2>

<div class="product-grid">

  <div v-for="medicine in medicines" :key="medicine.id" class="showcase">

    <div class="showcase-banner">

      <img :src=medicine.imageUrl alt="Mens Winter Leathers Jackets" width="300" class="product-img default">

      <div class="showcase-actions">

        <button @click.prevent="addCart(medicine.id)" class="btn-action">
          <ion-icon name="bag-add-outline"></ion-icon>
        </button>

      </div>

    </div>

    <div class="showcase-content">

      <a href="#" class="showcase-category">{{ medicine.Category.name }}</a>

      <a href="#">
        <h3 class="showcase-title">{{ medicine.name }}</h3>
      </a>

      <div class="showcase-rating">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>

      <div class="price-box">
        <p class="price">{{ medicine.price }}</p>
      </div>

    </div>

  </div>

  <nav class="pagination-container">
      <ul class="pagination">
        <li class="page-item">
          <a v-if="page !== 1" class="page-link" aria-label="Previous" @click.prevent="fetchMedicines(page -= 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
          <a v-else  class="page-link" aria-label="Previous" style="pointer-events: none; color: rgb(195, 193, 193);">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a  class="page-link" href="#" @click.prevent="fetchMedicines(page = 1)">1</a></li>
        <li  class="page-item">
          <a class="page-link" href="#" @click.prevent="fetchMedicines(page = 2)">2</a></li>
        <li  class="page-item">
          <a  class="page-link" href="#" @click.prevent="fetchMedicines(page = 3)">3</a></li>
        <li class="page-item">
          <a class="page-link" aria-label="Next" @click.prevent="fetchMedicines(page += 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

</div>
<br/>



</div>
</template>