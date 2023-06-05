<script lang="ts">
  import { onMount } from "svelte";

  let divRef: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) =>
        entry.isIntersecting
          ? divRef.classList.add("animate-fade-in")
          : divRef.classList.remove("animate-fade-in")
      )
    );

    observer.observe(divRef);

    return () => {
      observer.unobserve(divRef);
    };
  });
</script>

<div bind:this={divRef}>
  <slot />
</div>
