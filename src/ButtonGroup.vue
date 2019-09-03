<template>
  <div class="h-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.h-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .h-button {
    border-radius: 0;
    margin-left: -1px;
    // :first-child 表示一组兄弟中的第一个
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      z-index: 100;
    }
  }
}
</style>