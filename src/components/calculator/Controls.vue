<template>
    <div class="c-controls">
        <table>
            <tr>
                <th>
                    scope distance from barrel
                </th>
                <td>
                    <BInputNumber icon="arrows-alt-v" v-model="scopeBarrelDistance"></BInputNumber>
                </td>
                <td>cm</td>
            </tr>
            <tr>
                <th>
                    target distance
                </th>
                <td>
                    <BInputNumber icon="ruler-horizontal" v-model="targetDistance"></BInputNumber>
                </td>
                <td>m</td>
            </tr>
            <tr>
                <th>
                    zeroing distance
                </th>
                <td>
                    <BInputNumber icon="bullseye" v-model="zeroingDistance"></BInputNumber>
                </td>
                <td>m</td>
            </tr>
            <tr>
                <th>
                    muzzle velocity
                </th>
                <td>
                    <BInputNumber icon="long-arrow-alt-right" v-model="muzzleVelocity"></BInputNumber>
                </td>
                <td>m/s</td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss">
    .c-controls {
    }
</style>

<script>
  import BInputNumber from "../InputNumber";
  export default {
    // Name of component
    name: 'Controls',

    // Array of mixins
    mixins: [],

    // Dictionary of components
    components: {BInputNumber},

    // Array/Dictionary of props
    props: {
      value: Object,
    },

    // Data of component
    data() {
      return {
        targetDistance: 100, // m
        zeroingDistance: 100, // m
        scopeBarrelDistance: 3, // cm
        muzzleVelocity: 1000, // m/s
      };
    },

    // Dictionary of watched data keys
    watch: {
      '$data'(newValue) {
        this.$emit('input', newValue);
      },
    },

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