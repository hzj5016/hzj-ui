<template>
  <button class="h-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <h-icon :name="icon" class="h-icon" v-if="icon && !loading"></h-icon>
    <h-icon name="loading" class="loading h-icon" v-if="loading"></h-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        if(val !== 'left' && val !== 'right') {
          return false
        }else {
          return true
        }
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
.h-button {
  font-size: var(--font-size);
  background: var(--button-bg);
  padding: 0 1em;
  height: var(--button-height);
  color: var(--color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color);
    background: #eee;
    transition: background-color 0.6s;
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  &.icon-left {
    > .h-icon {
      margin-right: 0.1em;
      order: 1;
    }
    > .content {
      order: 2;
    }
  }
  &.icon-right {
    > .h-icon {
      margin-right: 0;
      margin-left: 0.1em;
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
  .loading{
    animation: spin 2s linear infinite;
  }
}
</style>