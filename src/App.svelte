<script lang="ts">
  import Polaroid from "./lib/Polaroid.svelte";
  import Experience from "./lib/Experience.svelte";
  import TimeIcon from "./lib/icons/TimeIcon.svelte";
  import ScreenIcon from "./lib/icons/ScreenIcon.svelte";
  import ApiIcon from "./lib/icons/APIIcon.svelte";
  import Carousel from "./lib/Carousel.svelte";
  import GridSkills from "./lib/GridSkills.svelte";
  import TeachIcon from "./lib/icons/TeachIcon.svelte";
  import { SwipeItem } from "svelte-swipe";
  import Footer from "./lib/Footer.svelte";
  import ProjectCard from "./lib/ProjectCard.svelte";

  let index = 0;

  const companies = [
    {
      companyName: "Paipe-Tecnologia e inovação",
      from: "May 2021",
      to: "Jul 2022",
      position: "Frontend developer",
      experience: [
        { Icon: TimeIcon, info: "1 ano e 3 meses de experiência" },
        { Icon: ScreenIcon, info: "Desenvolvimento de interfaces" },
        { Icon: ApiIcon, info: "Consume de APIs" },
      ],
    },
    {
      companyName: "Sebratec",
      from: "Jul 2022",
      to: "Apr 2023",
      position: "Frontend developer",
      experience: [
        { Icon: TimeIcon, info: "10 meses de experiência" },
        { Icon: TeachIcon, info: "Treinamento de programadores" },
        { Icon: ScreenIcon, info: "Desenvolvimento de interfaces" },
      ],
    },
  ];
</script>

<main class="w-full">
  <section
    class="min-h-screen bg-portfolio1 w-full bg-no-repeat bg-center flex flex-col lg:flex-row xl:bg-cover xl:bg-left"
  >
    <div class="flex-1 p-8">
      <header class="flex flex-col w-full h-full">
        <p class="text-4xl sm:text-5xl">Fullstack developer</p>
        <p class="hidden lg:block text-4xl sm:text-5xl mt-auto">
          Inglês fluente
        </p>
      </header>
    </div>

    <div class="flex-1 flex justify-center lg:items-center lg:justify-start">
      <h1 class="font-title lg:-translate-y-0 text-center lg:text-start h-fit">
        Fernando fernandes
      </h1>
    </div>
    <p class="text-4xl sm:text-5xl p-8 lg:hidden">Inglês fluente</p>
  </section>

  <section
    class="min-h-screen bg-portfolio2 bg-no-repeat bg-cover flex flex-col items-center justify-center gap-8 relative p-4 lg:min-h-0 lg:py-28 lg:max-w-none"
  >
    <h2 class="font-title">Habilidades</h2>
    <GridSkills />
  </section>
  <section
    class="min-h-screen pt-16 max-w-9xl sm:max-w-xl lg:max-w-none mx-auto px-4 lg:min-h-0"
  >
    <h2 class="font-title text-center mb-8">Experiências</h2>
    <div class="flex flex-col lg:flex-row">
      <div class="flex-1 mb-6">
        <Carousel
          onSlideChange={(newIndex) => {
            index = newIndex;
          }}
        >
          {#each companies as company}
            <SwipeItem>
              <Polaroid
                companyName={company.companyName}
                from={company.from}
                position={company.position}
                to={company.to}
              />
            </SwipeItem>
          {/each}
        </Carousel>
      </div>

      <div class="flex-1">
        <Experience experienceDetails={companies[index].experience} />
      </div>
    </div>
    <a
      href="https://api.whatsapp.com/send/?phone=5551997006226&text=Olá Fernando vi seu portfolio e gostaria de te conhecer melhor, você está disponível para uma conversa?&type=phone_number&app_absent=0"
      target="_blank"
      class="border-primary-action border-2 mx-auto block py-4 px-14 text-xl rounded-lg text-primary-content my-14 w-fit lg:text-2xl"
      >Mais detalhes</a
    >
  </section>

  <section
    class="pt-16 max-w-9xl sm:max-w-xl lg:max-w-none mx-auto px-4 lg:min-h-0"
  >
    <h2 class="font-title text-center mb-8">Meus projetos</h2>

    <div class="grid gap-4 lg:grid-cols-3 w-fit mx-auto">
      <ProjectCard
        href="https://leve-moda.vercel.app"
        description="Um e-commerce de roupas criado com NextJs."
        src="/leve-moda.mkv"
        title="Leve moda"
      />
      <ProjectCard
        href="https://freteaqui.vercel.app/"
        description="Uma plataforma pra ajudar clientes e freteiros a fecharem mais negócios."
        src="/frete-aqui.mkv"
        title="Frete Aqui"
      />
      <ProjectCard
        href="https://pokemon-app-12mais.vercel.app/"
        description="Uma plataforma para ver informações sobre pokémons"
        src="/pokemon-app.mkv"
        title="Pokémon App"
      />
    </div>
  </section>

  <footer
    class="pt-16 mx-auto mb-4 px-4 flex flex-wrap justify-center items-center"
  >
    <h2 class="font-title text-center mb-8">Contate-me</h2>
    <Footer />
  </footer>
</main>
