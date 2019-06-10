<template>
  <div id="app" class="layout">
    <Layout>
      <Header>Header</Header>
      <Content><router-view/></Content>
      <Footer>©copyright</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
<style scoped lang="less">
    #app, .ivu-layout {
      height: 100%;
    }

    .ivu-layout-header {
      text-align: center;
      color: #fff;
    }

    .ivu-layout-footer {
      text-align: center;
    }
</style>
