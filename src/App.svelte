<script lang="ts">
  import WhatsappIcon from "./lib/icons/WhatsappIcon.svelte";
  import GmailIcon from "./lib/icons/GmailIcon.svelte";
  import LinkedinIcon from "./lib/icons/LinkedinIcon.svelte";
  import ButtonIcon from "./lib/ButtonIcon.svelte";
  import FigmaIcon from "./lib/icons/FigmaIcon.svelte";
  import ReactIcon from "./lib/icons/ReactIcon.svelte";
  import HtmlIcon from "./lib/icons/HTMLIcon.svelte";
  import CssIcon from "./lib/icons/CSSIcon.svelte";
  import JavascriptIcon from "./lib/icons/JavascriptIcon.svelte";
  import TypescriptIcon from "./lib/icons/TypescriptIcon.svelte";
  import MongoDbIcon from "./lib/icons/MongoDBIcon.svelte";
  import NodeJsIcon from "./lib/icons/NodeJsIcon.svelte";
  import StyledComponentsIcon from "./lib/icons/StyledComponentsIcon.svelte";
  import TailwindIcon from "./lib/icons/TailwindIcon.svelte";
  import GitIcon from "./lib/icons/GitIcon.svelte";
  import NextJsIcon from "./lib/icons/NextJsIcon.svelte";
  import Polaroid from "./lib/Polaroid.svelte";
  import Experience from "./lib/Experience.svelte";
  import TimeIcon from "./lib/icons/TimeIcon.svelte";
  import ScreenIcon from "./lib/icons/ScreenIcon.svelte";
  import ApiIcon from "./lib/icons/APIIcon.svelte";
  import Carousel from "./lib/Carousel.svelte";

  const icons = [
    { name: "Figma", Icon: FigmaIcon },
    { name: "React", Icon: ReactIcon },
    { name: "HTML", Icon: HtmlIcon },
    { name: "CSS", Icon: CssIcon },
    { name: "Javascript", Icon: JavascriptIcon },
    { name: "Typescript", Icon: TypescriptIcon },
    { name: "MongoDB", Icon: MongoDbIcon },
    { name: "NodeJs", Icon: NodeJsIcon },
    { name: "Styled-components", Icon: StyledComponentsIcon },
    { name: "TailwindCSS", Icon: TailwindIcon },
    { name: "Git", Icon: GitIcon },
    { name: "NextJs", Icon: NextJsIcon },
  ];
</script>

<main class="w-full">
  <section
    class="min-h-screen bg-portfolio1 w-full bg-no-repeat bg-right flex flex-col items-center"
  >
    <header class="max-w-max w-full pt-16">
      <p class="text-big">Frontend developer</p>
      <p class="text-big">Inglês fluente</p>
    </header>

    <h1
      class="font-title leading-[8.75rem] absolute left-[70%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
    >
      Fernando fernandes
    </h1>

    <footer
      class="flex flex-col fixed bottom-0 max-w-max w-full mt-auto pb-16 z-10"
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
  </section>

  <section
    class="min-h-screen bg-portfolio2 bg-no-repeat bg-cover flex flex-col items-center justify-center relative"
  >
    <h2 class="font-title leading-[8.75rem] absolute top-16">Habilidades</h2>

    <div class="bg-primary-background/20 backdrop-blur-[2rem] p-8 rounded-md">
      <ul class="grid grid-cols-4 gap-8">
        {#each icons as { Icon, name }}
          <li class="flex flex-col justify-center items-center">
            <Icon />

            <p>{name}</p>
          </li>
        {/each}
      </ul>
    </div>
  </section>
  <section class="min-h-screen pt-16 max-w-8xl mx-auto">
    <div class="flex">
      <div class="flex flex-1 items-center gap-16">
        <Carousel
          onNext={(index) => {
            console.log(index);
          }}
          onPrev={(index) => {
            console.log(index);
          }}
        >
          <Polaroid
            companyName="Paipe-Tecnologia e inovação"
            from="May 2021"
            to="Jul 2022"
            position="Frontend developer"
          />
          <Polaroid
            companyName="Taipe-Tecnologia e inovação"
            from="May 2021"
            to="Jul 2022"
            position="Frontend developer"
          />

          <Polaroid
            companyName="Faipe-Tecnologia e inovação"
            from="May 2021"
            to="Jul 2022"
            position="Frontend developer"
          />
        </Carousel>
      </div>

      <div class="flex-1">
        <h2 class="font-title leading-[8.75rem] mb-8">Experiências</h2>

        <Experience
          experienceDetails={[
            { Icon: TimeIcon, info: "1 ano de experiência" },
            { Icon: ScreenIcon, info: "Desenvolvimento de interfaces" },
            { Icon: ApiIcon, info: "Consume de APIs" },
          ]}
        />
      </div>
    </div>
    <button
      class="border-primary-action border-2 mx-auto block py-4 px-14 text-small rounded-lg -translate-x-1/2 text-primary-content mt-14"
      >Mais detalhes</button
    >
  </section>
</main>

<!-- <ul class="flex flex-col items-end justify-between">
        <li class="text-small">1 ano de experiência</li>
        <li class="text-small">Desenvolvimento de interfaces</li>
        <li class="text-small">Consumo de APIs</li>
      </ul>

      <div
        class="flex justify-center items-center flex-col w-[25rem] h-[25rem] bg-primary-content animate-lighting rounded-full"
      >
        <p class="text-primary-background text-small">Frontend developer</p>

        <p class="text-primary-background text-medium my-8">
          Paipe-Tecnologia e inovação
        </p>

        <p class="text-primary-background text-xl">May 2021 - Jul 2022</p>
      </div> -->
