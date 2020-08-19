<template>
  <div class="filesbox">
    <div v-if="handleFile(this.fileUrl)" class="pdfStyle">
      <a-icon theme="twoTone" type="file-pdf" :style="{ fontSize: '50px' }" />
    </div>
    <div v-if="!handleFile(this.fileUrl)">
      <img
        class="showimg"
        @click="imgClick"
        :src="'/file/file/download/' + fileUrl"
        :title="fileTitle"
        alt
      />
    </div>

    <div ref="aa">
      <a-modal
        width="60vw"
        class="modalClass"
        :visible="visible"
        :bodyStyle="bodyStyle"
        :dialogStyle="dialogStyle"
        @cancel="handleCancel"
        :footer="null"
        centered
        :getContainer="() => this.$refs.aa"
      >
        <img class="imgClass" :id="imageSrc" :src="imageSrc" alt @mousewheel="zoomImg" />
        <div class="footModal">
          <a-button class="btnClass" @click="spinImg">
            <a-icon
              type="reload"
              :style="{ fontSize: '20px', color: 'rgb(140, 145, 148)',zIndex:'9999' }"
            />
          </a-button>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script>
import AButton from "ant-design-vue/es/button/button";
import ACard from "ant-design-vue/es/card/Card";
import AForm from "ant-design-vue/es/form/Form";
import AFormItem from "ant-design-vue/es/form/FormItem";
import ASelect from "ant-design-vue/es/select/index";
import utils from "../../utils/utils.js";
import ATextarea from "ant-design-vue/es/input/TextArea";
import ACheckboxGroup from "ant-design-vue/es/checkbox/Group";
import APopconfirm from "ant-design-vue/es/popconfirm";
import AInputNumber from "ant-design-vue/es/input-number";
import AInput from "ant-design-vue/es/input/Input";
import AModal from "ant-design-vue/es/modal/Modal";
import AIcon from "ant-design-vue/es/icon/index";

const ASelectOption = ASelect.Option;
export default {
  name: "FilesBox",
  components: {
    AButton,
    ACard,
    AForm,
    AFormItem,
    ASelect,
    APopconfirm,
    AInputNumber,
    ATextarea,
    AInput,
    AModal,
    AIcon
  },
  props: {
    fileUrl: "",
    fileTitle: ""
  },
  inject: ["reload"],
  data() {
    return {
      visible: false,
      imageSrc: "",
      auditingAction: { status: undefined },
      loading: false,
      username: localStorage.getItem("username"),
      placeholderText: "选择审核项",
      current: 0,
      bodyStyle: {
        background: "transparent",
        boxShadow: "none",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      },
      dialogStyle: {
        background: "transparent",
        boxShadow: "none"
      }
    };
  },
  created() {},
  mounted() {},

  methods: {
    handleFile(string) {
      if (string) {
        let arr = string.split(".");
        if (arr[arr.length - 1] === "pdf") {
          return true;
        } else {
          return false;
        }
      }
    },
    cancel: function() {},
    onChange: function(value) {
      console.log(value);
    },
    imgClick(e) {
      this.imageSrc = e.target.currentSrc;
      this.visible = true;
    },
    handleCancel(e) {
      this.visible = false;
      var img = document.getElementById(`${this.imageSrc}`);
      img.style.transform = "rotate(" + "0" + "deg)";
      img.style.zoom = "normal";
    },
    spinImg() {
      var img = document.getElementById(`${this.imageSrc}`);
      this.current++;
      let current = (this.current * 90) % 360;
      img.style.transform = "rotate(" + current + "deg)";
    },
    zoomImg(event) {
      // console.log(event);
      var img = document.getElementById(`${this.imageSrc}`);
      var zoom = parseInt(img.style.zoom, 10) || 100;
      zoom += event.wheelDelta / 12; //可适合修改
      // console.log(zoom);
      if (zoom > 100 && zoom < 150) img.style.zoom = zoom + "%";
    }
  }
};
</script>  
<style scoped lang='less'>
.filesbox {
  display: inline-block;
}
.pdfStyle {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.showimg {
  width: 100px;
  cursor: pointer;
}

.imgClass {
  vertical-align: middle;
  border-style: none;
  width: 40vw;
  cursor: crosshair;
}

.modalClass {
  overflow: hidden;
}
.footModal {
  text-align: center;
  padding-top: 10px;
  z-index: 9999;
}

/deep/.ant-modal-content {
  background-color: transparent !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.btnClass {
  background: transparent;
  border: none;
}
/deep/.ant-btn:hover,
.ant-btn:focus {
  color: transparent;
  background: transparent;
  border: none;
}
/deep/.ant-btn:active,
.ant-btn.active {
  color: transparent;
  background: transparent;
  border: none;
}
</style>
