<template>
  <div>
    <vs-row />
    <vs-row>
      <vs-col vs-w="12">
        <label>Firstname</label>
        <vs-input
          v-model="firstName"
          class="name-input"
        />
      </vs-col>
      <vs-col vs-w="12">
        <label>Lastname</label>
        <vs-input
          v-model="lastName"
          class="name-input"
        />
      </vs-col>
      <vs-col vs-w="12">
        <label>City</label>
        <vs-input
          v-model="city"
          class="name-input"
        />
      </vs-col>
      <vs-col vs-w="12">
        <label>Date of Birth</label>
        <vs-input
          v-model="dateOfBirth"
          class="name-input"
          type="date"
        />
      </vs-col>
      <vs-col vs-w="12">
        <label>Email</label>
        <vs-input
          v-model="email"
          class="name-input"
          type="email"
        />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'AppUser',
};
</script>

<style scoped>

</style>