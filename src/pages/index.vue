<template>
    <div class="page-index">
        <Controls v-model="controls"></Controls>
    </div>
</template>

<style lang="scss">
    .page-index {
    }
</style>

<script>
  import Controls from "../components/calculator/Controls";
  export default {
    // Name of component
    name: 'page-index',

    // Array of mixins
    mixins: [],

    // Dictionary of components
    components: {Controls},

    // Array/Dictionary of props
    props: {},

    // Data of component
    data() {
      return {
        controls: {},
      };
    },

    // Dictionary of watched data keys
    watch: {},

    // List of computed variables
    computed: {},

    // List of callable methods
    methods: {},

    // Called when component is created in memoory
    created() {
    },

    // Called when component is mounted on DOM
    mounted() {
    },

    // Called before component is destroyed from memory
    beforeDestroy() {
    },
  }
</script>