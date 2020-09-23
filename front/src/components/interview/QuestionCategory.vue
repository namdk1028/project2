<template>
  <v-card
    class="mx-auto category"
    max-height="650"
    tile
  >
    <v-list shaped>
      <v-list-group
        v-for="item in items"
        :key="item.title"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        
        <v-list-item-group color="primary">
          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            @click='submitQuestionState(subItem.state)'
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        state: 'vision',
        items: [
          {
            title: '성격별 면접 질문',
            items: [
              { title: '비전/목표', state:'vision' },
              { title: '조직적응력', state:'adaptation' },
              { title: '관심사/가치관', state:'values' },
              { title: '돌발/창의성', state:'creativity' },
              { title: '압박질문', state:'press' },
              { title: '기업/직무 적합도 및 관심도', state:'fitness' },
              { title: '대외활동 및 성격', state:'external' },
            ],
          },
          {
            title: '기업별 면접 질문',
            items: [
              { title: '넥슨', state:"nexon" },
              { title: 'LG전자', state:"lg" },
              { title: 'CJ 프레시웨이', state:"cj-fresh" },
              { title: 'CJ 올리브네트웍스', state:"cj-olive" },
              { title: 'CJ E&M', state:"cj-enm" },
              { title: 'CJ 대한통운', state:"cj-daehan" },
              { title: '삼성전자', state:"samsung" },
              { title: '신한은행', state:"sinhan" },
              { title: '하나은행', state:"keb" },
              { title: '한국전력', state:"ke" },
              { title: 'LH 토지주택공사', state:"lh" },
              { title: '현대백화점', state:"hd-dep" },
              { title: '현대모비스', state:"hd-mobis" },
              { title: 'SK하이닉스', state:"sk" },
            ],
          },
          {
            title: '직무별 면접 질문',
            items: [
              { title: 'IT/인터넷', state:"it" },
              { title: '디자인', state:"design" },
              { title: '마케팅/시장조사', state:"marketing" },
              { title: '경영/기획/컨설팅', state:"business" },
              { title: '미디어/홍보직', state:"media" },
            ],
          },
          {
            title: '내 면접 질문',
            items: [
              { title: '질문 만들기', state:"newQuestion" },
              { title: '내 질문', state:"myQuestion" },
            ],
          },
        ],
      }
    },
    methods: {
      submitQuestionState(state) {
        this.state = state
        this.$emit('submit-question-state', this.state)
        console.log(this.state)
      }
    }
  }
</script>

<style>
.category {
  overflow:auto;
}
</style>