<template>
  <div class="home">
    <el-upload
        class="upload-demo"
        action="#"
        :show-file-list= false
        :multiple= false
        accept="xlsx"
        :before-upload="handleUpload"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  props:{
    handleUpload:Function
  }
}
</script>
