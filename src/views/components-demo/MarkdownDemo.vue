<template>
  <div class="components-container">
    <aside>
      Markdown is based on
      <a href="https://github.com/nhnent/tui.editor" target="_blank">tui.editor</a>，simply wrapped with Vue.
      <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html">
        Documentation
      </a>
    </aside>

    <div class="editor-container">
      <el-tag class="tag-title">
        Basic:
      </el-tag>
      <MarkdownEditor
        v-model="content1"
        height="300px"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        Markdown Mode:
      </el-tag>
      <MarkdownEditor
        ref="markdownEditor"
        v-model="content2"
        :options="{
          hideModeSwitch: true,
          previewStyle: 'tab'
        }"
        height="200px"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        Customize Toolbar:
      </el-tag>
      <MarkdownEditor
        v-model="content3"
        :options="{
          toolbarItems: ['heading', 'bold', 'italic']
        }"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        I18n:
      </el-tag>
      <el-alert
        type="success"
        title="You can change the language of the admin system to see the effect"
        :closable="false"
      />
      <MarkdownEditor
        ref="markdownEditor"
        v-model="content4"
        :language="language"
        height="300px"
      />
    </div>

    <el-button
      type="primary"
      icon="el-icon-document"
      style="margin-top:80px;"
      @click="getHtml"
    >
      Get HTML
    </el-button>
    <div v-html="html"></div>
  </div>
</template>

<script>
import MarkdownEditor from "@/components/MarkdownEditor";

const content = `
**This is test**

* vue
* element
* webpack

`;

export default {
  name: "MarkdownDemo",
  components: { MarkdownEditor },
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: '',
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      }
    }
  },
  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language]
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml();
      console.log(this.html);
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-container{
  margin-bottom: 30px;
}
.tag-title{
  margin-bottom: 5px;
}
</style>
