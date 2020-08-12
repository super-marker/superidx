<template>
    <div class="main">
      <v-breadcrumb :style="{ margin: '12px 0' }">
        <v-breadcrumb-item href="/">SUPERIDX</v-breadcrumb-item>
        <v-breadcrumb-item href="/container">索引容器</v-breadcrumb-item>
        <v-breadcrumb-item href="/node">节点管理</v-breadcrumb-item>
      </v-breadcrumb>
      <div class="content">
        <v-row :gutter="16" :style="{height: '100%'}">
          <v-col class="gutter-row" span="6" :style="{height: '100%'}">
            <div class="gutter-box">
              <v-button-group>
                <v-button size="small" type="primary" icon="plus" :disabled="!selectNode" @click="addNode" title="增加节点"></v-button>
                <v-button size="small" type="primary" icon="edit" :disabled="ifDisabled" @click="modalVisible = true" title="编辑节点"></v-button>
                <v-button size="small" type="primary" icon="close" :disabled="ifDisabled" @click='delNode' title="删除节点"></v-button>
              </v-button-group>
              <v-tree :data="nodes" @select="select" ref="tree" show-line></v-tree>
            </div>
          </v-col>
          <v-col class="gutter-row" span="18" :style="{height: '100%',background: '#333'}">
            <div class="gutter-box">col-6</div>
          </v-col>
        </v-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NodeManager',
  data () {
    return {
      id: this.$route.query.id,
      name: this.$route.query.name,
      nodes: [{
        title: this.$route.query.name,
        expanded: true,
        children: []
      }],
      selectNode: null,
      ifDisabled: !(this.selectNode != null && this.selectNode.title !== this.name)
    }
  },
  methods: {
    select (selectedNodes) {
      this.selectNode = selectedNodes[0]
      this.ifDisabled = !(this.selectNode != null && this.selectNode.title !== this.name)
    },
    addNode () {
      this.$refs.tree.addNode(this.selectNode.clue, {
        title: `${this.selectNode.title}的节点`
      })
    },
    delNode () {
      if (this.selectNode.title !== this.name) {
        this.$refs.tree.delNode(this.selectNode.clue)
      }
    }
  }
}
</script>

<style scoped>

</style>
