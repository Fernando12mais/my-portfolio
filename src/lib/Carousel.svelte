<script lang="ts">
  import { Swipe } from "svelte-swipe";
  import type { SwipeProps } from "svelte-swipe/dist/Swipe.svelte";
  import Arrow from "./icons/Arrow.svelte";
  let SwipeComp: Swipe;
  export let onSlideChange: (index: number) => void;
  const swipeConfig: SwipeProps = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0,
  };

  function nextSlide() {
    SwipeComp.nextItem();
  }

  function prevSlide() {
    SwipeComp.prevItem();
  }
</script>

<div class="h-64 sm:h-[20rem] lg:h-[25rem] 2xl:h-[41rem] px-4 relative">
  <Swipe
    on:change={(e) => {
      console.log(e);
      onSlideChange(e.detail.active_item);
    }}
    bind:this={SwipeComp}
    {...swipeConfig}
  >
    <slot />
  </Swipe>

  <button
    class="animate-scale -rotate-90deg fill-primary-content/50 hover:fill-primary-action arrow active:fill-primary-action/70 z-10 disabled:animate-none disabled:fill-primary-content/20 left-0 absolute-center"
    on:click={prevSlide}
  >
    <Arrow className="xl:w-20 xl:h-20" />
  </button>

  <button
    class="animate-scale rotate-90deg fill-primary-content/50 hover:fill-primary-action arrow active:fill-primary-action/70 z-10 disabled:animate-none disabled:fill-primary-content/20 right-0 absolute-center"
    on:click={nextSlide}
  >
    <Arrow className="xl:w-20 xl:h-20" />
  </button>
</div>
