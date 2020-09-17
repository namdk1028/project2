<template>
  <v-stepper v-model='e1'>
    <v-stepper-header>
      <v-stepper-step
        editable
        step="1"
        :complete="e1 > 1"
      >
        면접 질문 선택
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        editable
        step="2"
        :complete="e1 > 2"
      >Create an ad group</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        step="3"
        editable
      >
        Create an ad
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1" class=''>
        <Question class='question'/>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn @click="e1 = 1" text>뒤로가기</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
        >
          <router-link to="/interview" class='start-text'>START</router-link>
        </v-btn>

        <v-btn @click="e1 = 2" text>뒤로가기</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Question from "./Question.vue"
export default {
  components: {
    Question,
  },
  data () {
    return {
      e1: 1,
    }
  },
}
</script>

<style scoped>
.question {
  margin-bottom: 2rem;
}
.start-text {
  color: white;
}
</style>