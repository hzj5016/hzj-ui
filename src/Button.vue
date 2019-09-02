<template>
  <button class="h-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg class="h-icon" v-if="icon">
      <use :xlink:href="`#h-${icon}`" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        if (val !== "left" && val !== "right") {
          return false;
        } else {
          return true;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes loading {
  0% {transform: rotate(0deg)};
  100% {transform: rotate(360deg)}

}
.h-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:hover {
    border-color: var(--border-color-hover);
    background-color: rgb(245, 241, 241);
    transition: background-color .5s;
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .h-icon {
    width: 1.1em;
    height: 1.1em;
    margin-right: .1em;
    order: 1;
    animation: loading 2s linear infinite;
  }
  > .content {
    order: 2;
  }

  &.icon-right {
    > .content {
      order: 1
    }
    > .h-icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
</style>