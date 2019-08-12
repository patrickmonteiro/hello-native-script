<template>
    <Page>
        <ActionBar title="PAGE"/>
        <GridLayout columns="1*" rows="2*, 3*" backgroundColor="#3c495e">
          <SegmentedBar>
            <SegmentedBarItem title="First" />
            <SegmentedBarItem title="Second" />
            <SegmentedBarItem title="Third" />
          </SegmentedBar>
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
