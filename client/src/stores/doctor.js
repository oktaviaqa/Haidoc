import { defineStore } from 'pinia'
import axios from 'axios'
export const useDoctorStore = defineStore('doctor', {
    state: () => ({ 
        specialists: [],
        doctors: []}),
    actions: {
      async fetchSpecialist(){
              try {
                const { data } = await axios.get(
                  'http://localhost:3000/specialists'
                )
                this.specialists = data
              } catch (error) {
                console.log(error);
              }
      
      },
      async fetchDoctor( SpecialistId, search){
        try {
          let options = 'http://localhost:3000/doctors'
            if (SpecialistId) {
              options += `?filter=${SpecialistId}`
            }
            if (search) {
              options += SpecialistId ? `&search=${search}` : `?search=${search}`;
            }
              const { data } = await axios.get(
                  options
              )
          this.doctors = data
      } catch (error) {
          console.log(error);
      }
      }
    },
  })