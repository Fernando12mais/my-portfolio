<script>
  import WhatsappIcon from "./icons/WhatsappIcon.svelte";
  import GmailIcon from "./icons/GmailIcon.svelte";
  import LinkedinIcon from "./icons/LinkedinIcon.svelte";
  import ButtonIcon from "./ButtonIcon.svelte";
  const message =
    "Olá Fernando vi seu portfolio e gostaria de te conhecer melhor, você está disponível para uma conversa?";
</script>

<div class="flex items-center justify-center gap-6 pb-8 px-16">
  <ButtonIcon
    href={`https://api.whatsapp.com/send/?phone=5551997006226&text=${message}`}
  >
    <WhatsappIcon />
  </ButtonIcon>

  <ButtonIcon href={`mailto:fernandogabriel12mais@gmail.com?body=${message}`}>
    <GmailIcon />
  </ButtonIcon>

  <ButtonIcon href="https://www.linkedin.com/in/fernando-fernandes-b692531a3/">
    <LinkedinIcon />
  </ButtonIcon>
</div>
