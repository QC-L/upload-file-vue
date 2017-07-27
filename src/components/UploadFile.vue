<template>
  <div id="upload">
    <div>
      <label class="ui_button ui_button_primary" for="xFile">上传文件</label>
      <input type="file" id="xFile" style="position:absolute;clip:rect(0 0 0 0);" @change="fileChanged">
    </div>
    <div id="drop_area"
         @drop.prevent="drop"
         @dragleave.prevent="dragLeave"
         @dragover.prevent="dragOver"
         @dragenter.prevent="dragEnter">将文件拖拽到此区域
    </div>
    <div id="preview">
      <ul>
        <li v-for="file in files">{{file.name}}</li>
      </ul>
    </div>
    <button @click="click">提交上传</button>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      files: []
    }
  },
  methods: {
    fileChanged: function (event) {
      console.log('文件变更')
      var file = event.target.files[0]
      this.files.push(file)
    },
    click: function () {
      console.log('提交')
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
