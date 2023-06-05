<script lang="ts">
  import { onMount } from "svelte";

  let divRef: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          divRef.classList.add("animate-grow");
        } else {
          divRef.classList.remove("animate-grow");
        }
      })
    );

    observer.observe(divRef);

    return () => {
      observer.unobserve(divRef);
    };
  });
</script>

<div class="flex justify-center items-center w-full" bind:this={divRef}>
  <slot />
</div>
