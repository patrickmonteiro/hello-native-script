<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
          <Label text="first" height="70" backgroundColor="#43b883"/>
          <Label text="second" height="70" backgroundColor="#1c6b48"/>
          <Label text="third" height="70" backgroundColor="#289062"/>
          <Button text="Button" height="70" @tap="onButtonTap" class="button-margin" />
        </FlexboxLayout>
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
      onButtonTap () {
        alert('Olá pessoal!')
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
    .button-margin {
      margin-top: 300vh
    }
</style>
