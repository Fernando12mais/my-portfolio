<script>
  import PinIcon from "./PinIcon.svelte";

  export let companyName = "";
  export let position = "";
  export let from = "";
  export let to = "";
</script>

<div
  class="bg-primary-contentBackground pt-4 pb-20 px-6 -rotate-6 relative w-fit h-fit"
>
  <ul
    class="bg-primary-background p-4 h-[19.6875rem] w-[22.1875rem] flex justify-center items-center flex-col text-2xl"
  >
    <li>{companyName}</li>
    <li>{position}</li>
  </ul>

  <p class="text-center text-primary-background text-xl pt-4">
    {from} - {to}
  </p>
  <div class="absolute top-0 left-1/2 -translate-y-12">
    <PinIcon />
  </div>
</div>
