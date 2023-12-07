    <template>
        <div class="container">
            <Header />
            <div class="row">
                <div class="col-md-8">
                    <h1>Cart</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">name</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in carts" :key="index">
                                <!-- <p>{{ item }}</p> -->
                                <img :src=item.Medicine.imageUrl alt="Mens Winter Leathers Jackets" width="300"
                                    class="product-img default">
                                <td>{{ item.Medicine.name }}</td>
                                <td>{{ item.Medicine.price }}</td>
                                <td>  </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4">
                    <h1>Summary</h1>
                    <table class="table">
                        <tbody>
                            <tr v-for="(item, index) in uniqueItems" :key="index">
                                <td>{{ item.Medicine.name }}</td>
                                <td>{{ item.Medicine.price }}</td>
                            </tr>
                            <tr>
                                <td>Tax (10%)</td>
                                <td>{{ total * 0.1 }}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{{ total + total * 0.1 }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- @TODO: You can add the desired ID as a reference for the embedId parameter. -->
                    <button id="pay-button" class="btn btn-primary" @click="payment">Checkout</button>

                </div>
            </div>
        </div>
    </template>

    <script>
    import Header from '../components/Header.vue'
    import { mapState, mapActions } from 'pinia';
    import { useMedicineStore } from '../stores/medicine';
    export default {
        components: {
            Header
        },
        computed: {
            uniqueItems() {
                const uniqueItems = [];
                const itemMap = new Map();
                this.carts.forEach(item => {
                    const medicineId = item.Medicine.id;
                    if (!itemMap.has(medicineId)) {
                        itemMap.set(medicineId, true);
                        uniqueItems.push(item);
                    }
                });
                return uniqueItems;
            },
            total() {
                return this.uniqueItems.reduce((acc, item) => acc + item.Medicine.price, 0);
            },
            ...mapState(useMedicineStore, ['carts']),

        },
        methods: {
            removeItem(index) {
                this.carts.splice(index, 1);
            },
            incrementQuantity(item) {
                item.quantity++;
            },
            decrementQuantity(item) {
                if (item.quantity > 1) {
                    item.quantity--;
                }
            },
            ...mapActions(useMedicineStore, ['fetchCart', 'updateCart', 'payment', 'checkOut']),
        },
        created() {
            this.fetchCart()
          
        }
    };
    </script>

    <style>
    /* Add custom styles here */
    </style>
