import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from "vue-toastification";
const toast = useToast()
export const useMedicineStore = defineStore('medicine', {
    state: () => ({
        categories: [],
        medicines: [],
        carts: [],
    }),
    actions: {
        async fetchCategories() {
            try {
                const { data } = await axios.get(
                    'http://localhost:3000/categories'
                )
                this.categories = data
                // console.log(this.categories);
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMedicines(page = 1, CategoryId, search) {
            try {
                let options = 'http://localhost:3000/medicine'
                if (page) {
                    options += `?page=${page}`
                  }
                  if (CategoryId) {
                    options += `&filter=${CategoryId}`
                  }
                  if (search) {
                    options += `&search=${search}`
                  }
                    const { data } = await axios.get(
                        options
                    )
                this.medicines = data
            } catch (error) {
                console.log(error);
            }
        },
        async addCart(medicineId, dataMedicine) {
            try {
                const { data } = await axios.post(
                    'http://localhost:3000/addCart/' + medicineId,
                    dataMedicine,
                    { headers: { access_token: localStorage.getItem('access_token') } }
                )
                toast.success('Item added to cart')
                this.fetchMedicines()
            } catch (error) {
                toast.warning('Please login first')
                console.log(error);
            }
        },
        async fetchCart(){
            try {
                const { data } = await axios.get(
                    'http://localhost:3000/carts',
                    { headers: { access_token: localStorage.getItem('access_token')}}
                )
                this.carts = data
            } catch (error) {
                console.log(error);
            }
          },
          async checkOut(){
            try {
                await axios.delete(
                    'http://localhost:3000/checkout',
                    { headers: { access_token: localStorage.getItem('access_token') } }
                );
                this.$router.push('/');
                toast.success('Pembayaran berhasil')
            } catch (error) {
                console.log(error);
            }
          },
          async payment() {
            try {
              const { data } = await axios.post(
                `http://localhost:3000/midtrans-client/`, {},
                { headers: { access_token: localStorage.getItem('access_token') } }
              );
              console.log(data);
              const cb = this.checkOut
              window.snap.pay(data.transaction.token, {
                onSuccess: function (result) {
                    cb()
                },
            });
            } catch (error) {
              console.log(error);
            } finally {
              this.isLoading = false;
            }
          },
    },
})