<script lang="ts">
  import type { ComponentType } from "svelte";

  export let experienceDetails: { Icon: ComponentType; info: string }[];
</script>

<ul class="flex flex-col gap-20">
  {#each experienceDetails as { Icon, info }}
    <li class="flex">
      <div
        class="w-20 h-20 rounded-full bg-primary-contentBackground animate-lighting z-10 flex justify-center items-center"
      >
        <Icon />
      </div>

      <div
        class="bg-primary-contentBackground rounded-full flex justify-center items-center w-4/5 text-small -translate-x-8"
      >
        <p class="text-primary-background">{info}</p>
      </div>
    </li>
  {/each}
</ul>
