<script lang="ts">
  import { type ComponentType } from "svelte";
  import GrowIn from "./GrowIn.svelte";

  export let experienceDetails: { Icon: ComponentType; info: string }[];
</script>

<ul class="flex flex-col gap-20">
  {#each experienceDetails as { Icon, info }, index}
    <li class="flex">
      <div
        class="w-20 h-20 rounded-full bg-primary-contentBackground animate-lighting z-10 flex justify-center items-center flex-shrink-0 hover:scale-125 duration-75"
      >
        <Icon />
      </div>
      <GrowIn>
        <div
          class={"bg-primary-contentBackground rounded-full flex justify-center items-center -translate-x-8 w-full whitespace-nowrap p-2"}
        >
          <p class="text-primary-background">{info}</p>
        </div>
      </GrowIn>
    </li>
  {/each}
</ul>
