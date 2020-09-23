<template>
  <div>
    <v-row justify="center">
      {{ selectedQuestion }}
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(question, i) in questions.vision"
          :key="i"
        >
        <div class='d-flex ml-4'>
          <v-checkbox v-model="selectedQuestion" :value=i color="red darken-3"></v-checkbox>
          <v-expansion-panel-header>
            {{ question.title }}
            </v-expansion-panel-header>
        </div>
          <v-expansion-panel-content>
            {{ question.content }}
            {{ question.time }} 분
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedQuestion: [],
      questions: {
        vision: [
          {
            title: "입사 후 포부가 무엇입니까?",
            content: "hello",
            time: 1,
  
          },
          {
            title: "입사 5 년 후, 10년 후 자신의 모습은 어떨 것이라고 생각합니까?",
            content: "hi",
            time: 1.5
          },
          {
            title: "본인의 직업관은 무엇이니까?",
            content: "hey",
            time: 1
          },
          {
            title: "당신에게 일이 왜 중요합니까?",
            content: "what's up",
            time: 1
          }
        ],
      values: [
          {
            title: "가장 존경하는 인물은 누구입니까?",
            content: "hello",
            time: 1,
  
          },
          {
            title: "본인만의 스트레스 해소법에 대해 이야기해주세요.",
            content: "hi",
            time: 1.5
          },
          {
            title: "본인의 가치관에 대해 말해보고, 그 가치관이 당사에서 어떻게 발휘될 것인가를 설명해보세요.",
            content: "hey",
            time: 2
          },
          {
            title: "평소 결정을 해야할 때 과감하게 하는 편입니까, 신중하게 하는 편입니까?",
            content: "what's up",
            time: 1
          } 
        ],
      }
    }
  },
  props: {
  }
}
</script>

<style>

</style>