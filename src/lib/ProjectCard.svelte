<script lang="ts">
  export let src: string;

  export let title: string;

  export let description: string;
  export let href: string;

  let isMouseOver = false;
</script>

<a
  on:mouseenter={() => {
    isMouseOver = true;
  }}
  on:mouseleave={() => {
    isMouseOver = false;
  }}
  {href}
  class="bg-primary-content rounded-lg h-full flex flex-col gap-4 max-w-lg mx-auto hover:border-2 hover:border-primary-action relative overflow-hidden"
  target="_blank"
>
  <div class="p-4">
    <h3 class="text-4xl text-center font-bold text-primary-background">
      {title}
    </h3>

    <video autoplay loop muted width="700">
      <track kind="captions" />
      <source type="video/mp4" {src} />
    </video>

    <p class="text-primary-background text-center text-xl">{description}</p>
  </div>

  <div
    class={`absolute bg-primary-action bottom-0 p-4 w-full text-center duration-300 transition-transform ${
      isMouseOver ? "translate-y-0" : "translate-y-full"
    }`}
  >
    Clique para ver o projeto
  </div>
</a>
