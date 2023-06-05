<script lang="ts">
  import { type ComponentType } from "svelte";
  import GrowIn from "./GrowIn.svelte";

  export let experienceDetails: { Icon: ComponentType; info: string }[];
</script>

<ul
  class="flex flex-col px-4 gap-8 lg:gap-20 xl:gap-28 xl:justify-center xl:h-full"
>
  {#each experienceDetails as { Icon, info }}
    <li class="flex">
      {#key info}
        <div
          class="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full bg-primary-contentBackground animate-lighting z-10 flex justify-center items-center flex-shrink-0 hover:scale-125 duration-75 p-2"
        >
          <Icon />
        </div>
      {/key}
      <GrowIn>
        <div
          class={"bg-primary-contentBackground rounded-full flex justify-center items-center -translate-x-4 lg:-translate-x-8 w-full p-2 whitespace-nowrap xl:p-4 xl:-translate-x-10 overflow-hidden"}
        >
          <p class="text-primary-background text-xl lg:text-2xl xl:text-3xl">
            {info}
          </p>
        </div>
      </GrowIn>
    </li>
  {/each}
</ul>
