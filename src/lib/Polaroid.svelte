<script lang="ts">
  import PinIcon from "./icons/PinIcon.svelte";

  export let companyName = "";
  export let position = "";
  export let from = "";
  export let to = "";
</script>

<div
  class="bg-primary-contentBackground w-60 mx-auto h-52 sm:h-60 sm:w-72 lg:w-[25rem] lg:h-[20rem] 2xl:w-[30rem] 2xl:h-[35rem] lg:mt-6 2xl:mt-8 pt-4 pb-20 px-6 mt-4 -rotate-6 relative"
>
  <ul
    class="bg-primary-background h-full flex justify-center items-center flex-col text-xl"
  >
    <li class="text-center lg:text-2xl xl:text-3xl">{companyName}</li>
    <li class="lg:text-2xl xl:text-3xl">{position}</li>
  </ul>
  <p class="text-center text-primary-background text-xl pt-4">
    {from} - {to}
  </p>
  <div
    class="absolute top-0 left-1/2 z-10 -translate-y-3 w-7 h-7 lg:w-9 lg:h-9 lg:-translate-y-5"
  >
    <PinIcon />
  </div>
</div>
