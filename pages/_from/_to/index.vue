<template>
  <div>
    <div class="container">
      <div>
        <h1 class="text-6xl">From {{ result.from }} to {{ result.to }}</h1>
      </div>
      <div>
        <h2 class="text-2xl">Figures</h2>
        <p>Distance: {{ result.distance }}km</p>
      </div>
      <div class="grid grid-cols-3">
        <div>
          <h3 class="text-xl">Plane</h3>
          <p>Duration: {{ result.plane.duration }}h</p>
          <p>Fare: {{ result.plane.fare }}€</p>
          <p>CO²: {{ result.plane.co2 }}g</p>
        </div>
        <div>
          <h3 class="text-xl">Car</h3>
          <p>Duration: {{ result.car.duration }}h</p>
          <p>Fare: {{ result.car.fare }}€</p>
          <p>CO²: {{ result.car.co2 }}g</p>
        </div>
        <div>
          <h3 class="text-xl">Train (currently)</h3>
          <p>Duration: {{ result.currentTrain.duration }}h</p>
          <p>Fare: {{ result.currentTrain.fare }}€</p>
          <p>CO²: {{ result.currentTrain.co2 }}g</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="text-4xl">
          What if we had a high speed train line between those cities?
        </h2>
      </div>
      <div>
        <h2 class="text-xl">A journey</h2>
        <div class="grid grid-cols-3">
          <p class="text-lg text-center">
            Duration: {{ result.futureTrain.duration }}h
          </p>
          <p class="text-lg text-center">
            Fare: {{ result.futureTrain.fare }}€
          </p>
          <p class="text-lg text-center">CO²: {{ result.futureTrain.co2 }}g</p>
        </div>
      </div>
      <div>
        <h2 class="text-xl">CO² savings</h2>
        <div class="grid grid-cols-3">
          <p class="text-lg text-center">
            Daily {{ result.futureTrain.savings.daily }} T
          </p>
          <p class="text-lg text-center">
            Monthly {{ result.futureTrain.savings.monthly }} T
          </p>
          <p class="text-lg text-center">
            Yearly {{ result.futureTrain.savings.yearly }} T
          </p>
        </div>
      </div>
      <div>
        <h2 class="text-xl">Details</h2>
        <div class="grid grid-cols-2">
          <p class="text-lg text-center">
            Potential delivery by {{ result.futureTrain.delivery }}
          </p>
          <p class="text-lg text-center">
            Estimated amount: {{ result.futureTrain.amount }}€
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.result = await this.getParams()
  },
  data() {
    return {
      result: {
        from: '',
        to: '',
        distance: '',
        plane: {
          duration: '',
          fare: '',
          co2: '',
        },
        car: {
          duration: '',
          fare: '',
          co2: '',
        },
        currentTrain: {
          duration: '',
          fare: '',
          co2: '',
        },
        futureTrain: {
          delivery: 2030,
          duration: '',
          fare: '',
          co2: '',
          savings: {
            daily: '',
            monthly: '',
            yearly: '',
          },
        },
      },
      cities: [
        { name: 'Bordeaux', id: 'BOD' },
        { name: 'Lyon', id: 'LYS' },
        { name: 'Madrid', id: 'MAD' },
        { name: 'Berlin', id: 'BER' },
        { name: 'Rome', id: 'ROM' },
      ],
    }
  },
  methods: {
    getCityName(id) {
      return this.cities.find((el) => el.id === id).name
    },
    getParams() {
      const { from, to } = this.$nuxt.$route.params
      return {
        from: this.getCityName(from),
        to: this.getCityName(to),
        distance: Math.round(Math.random() * 10000),
        plane: {
          duration: Math.round(Math.random() * 3),
          fare: Math.round(Math.random() * 100),
          co2: Math.round(Math.random() * 10),
        },
        car: {
          duration: Math.round(Math.random() * 5),
          fare: Math.round(Math.random() * 100),
          co2: Math.round(Math.random() * 10),
        },
        currentTrain: {
          duration: Math.round(Math.random() * 3),
          fare: Math.round(Math.random() * 100),
          co2: Math.round(Math.random() * 10),
        },
        futureTrain: {
          delivery: 2030,
          amount: Math.round(Math.random() * 3000000),
          duration: Math.round(Math.random() * 3),
          fare: Math.round(Math.random() * 100),
          co2: Math.round(Math.random() * 5),
          savings: {
            daily: Math.round(Math.random() * 100),
            monthly: Math.round(Math.random() * 100 * 30),
            yearly: Math.round(Math.random() * 100 * 30 * 12),
          },
        },
      }
    },
  },
}
</script>
