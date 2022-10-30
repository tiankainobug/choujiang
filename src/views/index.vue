<template>
  <div class="home">
    <Home :handleUpload="handleUpload"></Home>
    <br/>
    <Start :studentsData="studentsData"></Start>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Start from "@/components/Start";
import {transformExcel} from "@/utils/transformExcel";
import message from "element-ui/packages/message";

export default {
  name: "ViewTotal",
  data() {
    return {
      studentsData:Array
    };
  },
  methods: {
    async handleUpload(file) {
      const res = await transformExcel(file)
      this.studentsData = res
      message.success('学生数据导入成功！')
    },
  },
  components:{
    Home,Start
  }
}
</script>
