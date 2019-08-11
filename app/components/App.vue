<template>
    <Page>
        <ActionBar title="Olá pessoal"/>
        <GridLayout columns="1*" rows="2*, 3*" backgroundColor="#3c495e">
          <Label row="0" col="1" backgroundColor="#43b883"/>
          <!-- <Label text="first" height="70" backgroundColor="#43b883"/>
          <Label text="second" height="70" backgroundColor="#1c6b48"/>
          <Label text="third" height="70" backgroundColor="#289062"/> -->
          <Button text="Button"
            height="70"
            col="1" row="0"
            borderRadius="50"
            @tap="$router.push('/page')"
            backgroundColor="white" />
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
    methods: {
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
