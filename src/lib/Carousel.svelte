<script lang="ts">
  import { onMount } from "svelte";
  import Arrow from "./icons/Arrow.svelte";

  let wrapper: HTMLDivElement;
  let index = 0;
  let gap = 100;
  let padding = 64;
  export let onNext: (index: number) => void;
  export let onPrev: (index: number) => void;

  onMount(() => {
    let childrenSize = wrapper.children[0].clientWidth;
    wrapper.style.maxWidth = `${childrenSize + padding * 2}px`;
    wrapper.style.padding = `${padding}px`;
    wrapper.style.gap = `${gap}px`;

    Array.from(wrapper.children).forEach((children: HTMLDivElement, index) => {
      if (index == 0) return;

      children.style.position = "absolute";
      children.style.left = `${childrenSize + gap + padding}px`;
    });
  });
</script>

<div class="flex">
  <button
    class="animate-scale -rotate-90deg fill-primary-content/50 hover:fill-primary-action arrow active:fill-primary-action/70 z-10 disabled:animate-none disabled:fill-primary-content/20"
    disabled={index == 0}
    on:click={() => {
      const currentChildren = wrapper.children[index];
      currentChildren.classList.add("duration-1000");
      currentChildren.classList.add("ease-in-out");
      currentChildren.classList.remove("go-to-left");
      currentChildren.classList.add("go-to-right");
      index -= 1;

      onPrev(index);
    }}
  >
    <Arrow />
  </button>
  <div bind:this={wrapper} class="flex overflow-hidden relative">
    <slot />
  </div>

  <button
    disabled={index == wrapper?.children.length - 1}
    class="animate-scale rotate-90deg fill-primary-content/50 hover:fill-primary-action arrow active:fill-primary-action/70 z-10 disabled:animate-none disabled:fill-primary-content/20"
    on:click={() => {
      index += 1;
      const currentChildren = wrapper.children[index];

      currentChildren.classList.add("duration-1000");
      currentChildren.classList.add("ease-in-out");
      currentChildren.classList.remove("go-to-right");
      currentChildren.classList.add("go-to-left");

      onNext(index);
    }}
  >
    <Arrow />
  </button>
</div>
