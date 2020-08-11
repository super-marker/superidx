<template>
    <div class="main">
      <v-breadcrumb :style="{ margin: '12px 0' }">
        <v-breadcrumb-item href="/">SUPERIDX</v-breadcrumb-item>
        <v-breadcrumb-item href="/container">索引容器</v-breadcrumb-item>
      </v-breadcrumb>
      <div style="padding: 24px; background: #fff; height: calc(100% - 45px);">
        <div>
          <v-button type="primary" icon="plus" @click="add">添加容器</v-button>
        </div>
      </div>
      <dialog-add :show="show" @cancel="handleCancel" @ok="handleOk"></dialog-add>
    </div>
</template>

<script>
import ContainerAddDialog from '../dialog/ContainerAddDialog'
export default {
  name: 'Container',
  components: {
    'dialog-add': ContainerAddDialog
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    add () {
      this.show = true
    },
    handleCancel () {
      this.show = false
    },
    handleOk () {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
