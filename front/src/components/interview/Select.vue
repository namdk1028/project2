<template>
  <v-stepper v-model='e1'>
    <v-stepper-header>
      <v-stepper-step
        editable
        step="1"
        :complete="e1 > 1"
        @click='e1=1'
      >
        질문 모아보기
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        editable
        step="2"
        :complete="e1 > 2"
      >면접 질문 선택</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        step="3"
        editable
      >
        면접 준비
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items class='row'>
      <QuestionCategory v-if="e1==1" @submit-question-state="changeState" class='col-lg-4' />
      <v-stepper-content step="1" class='step1-content col-lg-8'>
        <div v-if="state == 'newQuestion'" class='question'>
          <QuestionCreate />
        </div>
        <div v-else>
          <Question :state="state" class='question'/>
        </div>
        <div class='btns'>
          <div>현재 선택된 질문 : </div>
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="2">
        <QuestionDecision />
        <div class="btns">
          <v-btn @click="e1 = 1" class='back-btn' text>뒤로가기</v-btn>
          <v-btn
            color="primary"
            @click="e1 = 3"
            class='continue-btn'
          >
            Continue
          </v-btn>
        </div>

      </v-stepper-content>

      <v-stepper-content step="3">
        <CameraTest />

        <div class="btns">
          <v-btn @click="e1 = 2" class='back-btn' text>뒤로가기</v-btn>
          <v-btn
            color="primary"
          >
            <router-link to="/interview" class='start-text continue-btn'>START</router-link>
          </v-btn>
        </div>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Question from "./Question.vue"
import QuestionCategory from "./QuestionCategory.vue"
import QuestionDecision from "./QuestionDecision.vue"
import CameraTest from "./CameraTest.vue"
import QuestionCreate from "./QuestionCreate.vue"

export default {
  components: {
    CameraTest,
    QuestionDecision,
    Question,
    QuestionCreate,
    QuestionCategory,
  },
  data () {
    return {
      e1: 1,
      state: "vision",
    }
  },
  methods: {
    changeState(state) {
     this.state = state 
    },
  }
}
</script>

<style scoped>
.question {
  padding-bottom: 2rem;
  height: 550px;
}
.question {
  padding-bottom: 2rem;
  height: 550px;
}
.btns{
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
}

.start-text {
  color: white;
}
.step1-content {
  background-color: lightgrey;
}
</style>