<template>
    <Page>
        <ActionBar title="PAGE"/>
        <GridLayout columns="1*" rows="2*, 3*" backgroundColor="#3c495e">
          <Label text="PAGE" row="0" col="1" backgroundColor="#43b883"/>
        </GridLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello, my first app in Native Script Vue!'
      }
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        /* vertical-align: center; */
        text-align: center;
        font-size: 30;
        color: #333333;
    }
</style>
