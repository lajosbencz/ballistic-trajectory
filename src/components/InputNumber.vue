<template>
    <div class="control" :class="rootClasses">
        <input type="number"
               ref="input"
               class="input"
               :class="inputClasses"
               :autocomplete="newAutocomplete"
               :min="minValue"
               :max="maxValue"
               :step="step"
               :value="newValue"
               v-bind="$attrs"
               @input="onInput"
               @blur="onBlur"
               @focus="onFocus"
        />

        <Icon v-if="icon"
              class="is-left"
              :icon="icon"
              :pack="newIconPack"
              :size="iconSize"
        />

        <Icon class="is-right"
              v-if="!loading && statusType"
              :icon="statusTypeIcon"
              :pack="newIconPack"
              :size="iconSize"
              :type="statusType"
              both
        />

    </div>
</template>

<script>
  import Icon from 'buefy/src/components/icon/Icon'
  import config from 'buefy/src/utils/config'
  import FormElementMixin from 'buefy/src/utils/FormElementMixin'

  export default {
    // Name of component
    name: 'BInputNumber',

    inheritAttrs: false,

    // Array of mixins
    mixins: [FormElementMixin],

    // Dictionary of components
    components: {
      Icon,
      [Icon.name]: Icon
    },

    // Array/Dictionary of props
    props: {
      value: Number,
      step: {
        type: Number,
        default: 1,
      },
      minValue: {
        type: Number,
        default: Number.MIN_SAFE_INTEGER,
      },
      maxValue: {
        type: Number,
        default: Number.MAX_SAFE_INTEGER,
      },
    },

    // Data of component
    data() {
      return {
        newValue: this.value,
        newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
      };
    },

    // Dictionary of watched data keys
    watch: {
      value(value) {
        this.newValue = parseInt(value);
      },
      newValue(value) {
        this.$emit('input', value);
        !this.isValid && this.checkHtml5Validity();
      }
    },

    // List of computed variables
    computed: {
      rootClasses() {
        return [
          this.iconPosition,
          this.size,
          {
            'is-expanded': this.expanded,
            'is-loading': this.loading,
            'is-clearfix': !this.hasMessage
          }
        ]
      },
      inputClasses() {
        return [
          this.statusType,
          this.size,
          { 'is-rounded': this.rounded }
        ]
      },
      hasIconRight() {
        return this.loading || this.statusType
      },
      iconPosition() {
        if (this.icon && this.hasIconRight) {
          return 'has-icons-left has-icons-right'
        } else if (!this.icon && this.hasIconRight) {
          return 'has-icons-right'
        } else if (this.icon) {
          return 'has-icons-left'
        }
      },
      statusTypeIcon() {
        switch (this.statusType) {
          case 'is-success': return 'check';
          case 'is-danger': return 'alert-circle';
          case 'is-info': return 'information';
          case 'is-warning': return 'alert';
        }
      },
      hasMessage() {
        return !!this.statusMessage
      },
      valueLength() {
        return this.newValue.toString().length;
      }
    },

    // List of callable methods
    methods: {
      inc() {
        this.newValue++;
        console.log('incremented to ', this.newValue);
      },
      dec() {
        this.newValue--;
        console.log('decremented to ', this.newValue);
      },
      onInput(event) {
        this.$nextTick(() => { this.newValue = parseInt(event.target.value) })
      }
    },

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