<template>
  <div class="dialog">
    <v-modal title="编辑节点"
             :visible="visible"
             @cancel="handleCancel">

      <v-form direction="horizontal">
        <v-form-item label="IP地址" :label-col="labelCol" :wrapper-col="wrapperCol" required>
          <v-input type="text" v-model="form.ip" placeholder="请输入IP地址" size="large"></v-input>
        </v-form-item>
        <v-form-item label="节点类型" :label-col="labelCol" :wrapper-col="wrapperCol" required>
          <v-radio-group v-model="form.type" :data="nodeType"></v-radio-group>
        </v-form-item>
        <v-form-item v-if="form.type=='master'" label="登录用户" :label-col="labelCol" :wrapper-col="wrapperCol" required>
          <v-input type="text" v-model="form.username" placeholder="请输入IP地址" size="large"></v-input>
        </v-form-item>
        <v-form-item v-if="form.type=='master'" label="登录密码" :label-col="labelCol" :wrapper-col="wrapperCol" required>
          <v-input type="password" v-model="form.password" placeholder="请输入登录密码" size="large"></v-input>
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
  name: 'EsNodeAddDialog',
  data () {
    return {
      nodeType: [
        {value: 'master', text: 'master'},
        {value: 'data', text: 'data'},
        {value: 'client', text: 'client'},
        {value: 'ingest', text: 'ingest'}
      ],
      form: {
        ip: '',
        type: 'master',
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
