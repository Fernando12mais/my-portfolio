<script>
  export let href = "";
</script>

<a
  {href}
  target="_blank"
  class="flex justify-center items-center w-fit fill-primary-content hover:scale-125 hover:fill-primary-action"
>
  <slot />
</a>
