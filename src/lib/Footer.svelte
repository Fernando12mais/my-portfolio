<script>
  import WhatsappIcon from "./icons/WhatsappIcon.svelte";
  import GmailIcon from "./icons/GmailIcon.svelte";
  import LinkedinIcon from "./icons/LinkedinIcon.svelte";
  import ButtonIcon from "./ButtonIcon.svelte";
</script>

<footer
  class="flex flex-col fixed bottom-0 max-w-max w-full mt-auto pb-16 px-16 z-10"
>
  <p class="text-big">Contate-me</p>

  <div class="flex items-center gap-6">
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
