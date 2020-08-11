<template>
  <div class="dialog">
    <v-modal title="创建容器"
             :visible="visible"
             @cancel="handleCancel">

      <v-form direction="horizontal">
        <v-form-item label="容器名称" :label-col="labelCol" :wrapper-col="wrapperCol" required>
          <v-input type="text" placeholder="请输入容器名称" size="large"></v-input>
        </v-form-item>
        <v-form-item label="容器类型" :label-col="labelCol" :wrapper-col="wrapperCol" required>
          <v-select  :data="typeOptions" v-model="form.typeValue"></v-select>
        </v-form-item>
      </v-form>
      <div slot="footer">
        <v-button key="cancel" type="ghost" size="large" @click="handleCancel">
          取消
        </v-button>
        <v-button key="confirm" type="primary" size="large" :loading="footerLoading" @click="handleOk">
          提 交
        </v-button>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  name: 'ContainerAddDialog',
  props: {
    show: Boolean
  },
  data () {
    return {
      visible: false,
      footerLoading: false,
      form: {
        typeValue: '0',
        username: '',
        password: ''
      },
      typeOptions: [{
        value: '0',
        label: 'ElasticSearch'
      }, {
        value: '1',
        label: 'Solr'
      }],
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    }
  },
  watch: {
    show (newValue) {
      this.visible = newValue
    }
  },
  methods: {
    handleOk () {
      this.footerLoading = true
    },
    handleCancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>

</style>
