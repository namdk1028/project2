<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            lg="6"
          >
            <v-text-field
              v-model="name"
              filled
              background-color="white"
              color="blue-grey lighten-2"
              label="Name"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            lg="6"
          >
            <v-text-field
              v-model="title"
              filled
              background-color="white"
              color="blue-grey lighten-2"
              label="Title"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="content"
              filled
              background-color="white"
              color="blue-grey lighten-2"
              label="Name"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
      <v-switch
        v-model="autoUpdate"
        class="mt-0"
        color="green lighten-2"
        hide-details
        label="질문 공유"
      ></v-switch>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        autoUpdate: true,
    }
  }
}
</script>