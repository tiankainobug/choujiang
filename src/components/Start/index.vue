<template>
  <div class="startLotteryDraw">
    <el-button type="primary" @click="startLotteryDraw">开始抽奖</el-button>
    被抽中的学生为：<p>{{studentName}}</p>
  </div>
</template>

<script>

export default {
  name:"startLotteryDraw",
  data(){
    return{
      studentName:''
    }
  },
  props:{
    studentsData:Array
  },
  methods:{
    startLotteryDraw(){
      // 学生人数
      let studentsNum = this.studentsData.length
      // 在学生人数范围内的随机索引
      let randomNum = Math.floor(Math.random()*(studentsNum+1))
      this.studentName = this.studentsData[randomNum]['姓名']
    }
  }
}
</script>
