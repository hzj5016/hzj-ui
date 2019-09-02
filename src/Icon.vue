 <template>
  <svg class="h-icon">
    <use :xlink:href="`#h-${name}`"></use>
  </svg>
</template>
<script>
  export default {
    props: ['name']
  }
</script>
<style lang="scss">
  .h-icon {width: 1.1em; height: 1.1em; }
</style>