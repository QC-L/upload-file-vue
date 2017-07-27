<template>
  <div id="upload">
    <div>
      <!-- 选择文件按钮(自定义样式) -->
      <label class="ui_button ui_button_primary" for="xFile">上传文件</label>
      <!-- 作为input事件触发 -->
      <input type="file" id="xFile" style="position:absolute;clip:rect(0 0 0 0);" @change="fileChanged">
    </div>
    <!-- 拖拽框 -->
    <div id="drop_area"
         @drop.prevent="drop"
         @dragleave.prevent="dragLeave"
         @dragover.prevent="dragOver"
         @dragenter.prevent="dragEnter">将文件拖拽到此区域
    </div>
    <!-- 上传文件显示列表 -->
    <div id="preview">
      <ul>
        <li v-for="file in files">{{file.name}}</li>
      </ul>
    </div>
    <!-- 提交按钮 -->
    <button @click="click">提交上传</button>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      // 文件数组
      files: []
    }
  },
  methods: {
    // 当选择文件时, 会触发该方法
    fileChanged: function (event) {
      console.log('文件变更')
      var file = event.target.files[0]
      this.files.push(file)
    },
    // 只上传了一个文件, 选择form-data的形式上传
    click: function () {
      // 定义form-data
      var data = new FormData()
      data.append('name', 'myFile')
      data.append('size', this.files[0].size)
      data.append('myFile', this.files[0])
      // 实现formData上传
      this.$formData({
        type: 'post',
        data: data,
        url: '/uploadFile/uploadFile.php',
        success: function (res) {
          console.log(res.data)
        },
        error: function (error) {
          console.log(error)
        }
      })
    },
    dragLeave: function (event) {
      console.log('拖离')
    },
    dragOver: function (event) {
      console.log('拖来拖去')
    },
    dragEnter: function (event) {
      console.log('拖拽进')
    },
    // 当文件拖进框内时, 添加入files数组
    drop: function (event) {
      console.log('拖拽松手')
      var file = event.dataTransfer.files[0]
      this.files.push(file)
      console.log(this.files)
    }
  }
}
</script>

<style scoped>
  #drop_area {
    width: 300px;
    height: 200px;
    background-color: #CCC;
    border: 2px dashed #000000;
    text-align: center;
  }
  .ui_button_primary:hover {
    background-color: #00b4f5;
    border-color: #00b4f5;
    color: #fff;
  }
  .ui_button:hover {
    color: #2d3441;
    border-color: #ababaf;
    text-decoration: none;
  }
  .ui_button_primary {
    border: 1px solid #00a5e0;
    background-color: #00a5e0;
    color: #fff;
  }
  .ui_button {
    display: inline-block;
    line-height: 38px;
    font-size: 14px;
    text-align: center;
    color: #545a6c;
    border: 1px solid #d0d0d5;
    border-radius: 4px;
    padding: 0 15px;
    min-width: 50px;
    background-color: #00a5e0;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-transition: border-color .15s,background-color .15s;
    transition: border-color .15s,background-color .15s;
    outline: 0 none;
    cursor: pointer;
    overflow: visible;
  }
</style>
