<template>
    <div class="main">
      <v-breadcrumb :style="{ margin: '12px 0' }">
        <v-breadcrumb-item href="/">SUPERIDX</v-breadcrumb-item>
        <v-breadcrumb-item href="/container">索引容器</v-breadcrumb-item>
      </v-breadcrumb>
      <div class="content" v-if="list.length > 0">
        <div class="top-btn">
          <v-button type="primary" icon="plus" @click="add">添加容器</v-button>
        </div>
        <div class="list">
          <v-row :gutter="16">
            <template v-for="(item,key) in list">
              <v-col :span="8" :key="key">
                <v-card :title="item.name" :bordered="true">
                  <div>
                    <img :src="require('../../assets/img/container_type_'+item.type+'.png')">
                  </div>
                  <div class="card-btn">
                    <v-button type="success" size="small">进入</v-button>
                  </div>
                  <div slot="extra">
                    <v-button size="small">编辑</v-button>
                    <v-button size="small">删除</v-button>
                    <v-button size="small" @click="goNodeLink(item.id,item.name)">节点管理</v-button>
                    <v-button type="primary" size="small">部署</v-button>
                  </div>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </div>
      </div>
      <div class="content" v-else>
        <div :style="{height:'120px', width:'300px',margin:'150px auto'}">
          <img src="../../assets/img/container.png" :style="{height:'120px', width:'120px', verticalAlign: 'middle'}">
          <label :style="{fontSize:'14px'}">还没有容器，马上去创建<a @click="add"><v-icon type="plus"></v-icon></a></label>
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
      show: false,
      list: []
    }
  },
  created () {
    this.getList()
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
    },
    getList () {
      this.$axios.get('/api/container/list').then(
        res => {
          this.list = res.data
        }
      ).catch(() => {
        this.$message.error('数据加载异常')
      })
    },
    goNodeLink (id, name) {
      this.$router.push({name: 'NodeManager', query: {id: id, name: name}})
    }
  }
}
</script>

<style scoped>
  .top-btn{
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
  }
  .ant-card{
    margin-top:20px;
  }
  .ant-card-body{
    padding:24px 24px 5px 24px !important;
  }
  .card-btn{
    text-align: right;
    margin-top: 10px;
  }
</style>
