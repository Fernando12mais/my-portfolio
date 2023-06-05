<script>
  import WhatsappIcon from "./icons/WhatsappIcon.svelte";
  import GmailIcon from "./icons/GmailIcon.svelte";
  import LinkedinIcon from "./icons/LinkedinIcon.svelte";
  import ButtonIcon from "./ButtonIcon.svelte";
</script>

<div class="bg-slate-800 fixed bottom-0 z-10 w-full">
  <footer class="flex flex-col pb-8 px-16">
    <p class="text-4xl sm:text-5xl text-center">Contate-me</p>

    <div class="flex items-center justify-center gap-6">
      <ButtonIcon>
        <WhatsappIcon />
      </ButtonIcon>

      <ButtonIcon>
        <GmailIcon />
      </ButtonIcon>

      <ButtonIcon>
        <LinkedinIcon />
      </ButtonIcon>
    </div>
  </footer>
</div>
