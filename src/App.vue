<template>
  <div id="app">
    <v-layout>
      <v-sider collapsible :collapsed="customCollapsed" :trigger="false" :collapsed-width="64">
        <div class="logo">SUPERIDX</div>
        <v-menu mode="inline" :data="menuData"></v-menu>
      </v-sider>
      <v-layout>
        <v-header class="header bg-primary" :style="{padding: 0 }">
          <v-icon class="trigger" :type="this.customCollapsed ? 'menu-unfold' : 'menu-fold'" @click.native="toggle"></v-icon>
        </v-header>
        <v-content :style="{ padding: '0 15px',overflowY: 'auto' }">
          <router-view/>
        </v-content>
        <v-footer :style="{ textAlign: 'center', padding: '10px 50px' }">
          Ant Design ©2016 Created by Ant UED
        </v-footer>
      </v-layout>
    </v-layout>
  </div>
</template>
<script>
import Menu from './menu/index'
export default {
  data () {
    return {
      customCollapsed: false,
      menuData: Menu
    }
  },
  methods: {
    toggle () {
      this.customCollapsed = !this.customCollapsed
    }
  }
}
</script>
<style>
  #app .ant-menu-item{
    white-space: unset;
  }
  #app,.main{
    height: 100%;
    margin:0 auto;
    overflow: hidden;
  }
  #app .ant-layout{
    height: 100%;
    background: #f9f9f9;
  }
  #app .header{
    height: 50px;
    line-height: 50px;
  }
  #app .trigger {
    font-size: 18px;
    line-height: 50px;
    padding: 0 16px;
    cursor: pointer;
    transition: color .3s;
    color:#fff;
    font-weight: 600;
  }
  #app .trigger:hover {
    color: #b1d0e7;
  }
  #app .ant-layout-sider{
    background: #fff;
  }
  #app .logo {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-weight: 700;
    background: #488ee9;
    font-size: 20px;
  }
  #app .ant-layout-sider-collapsed .anticon {
    font-size: 16px;
  }
  #app .ant-layout-sider-collapsed .nav-text {
    display: none;
  }
</style>
