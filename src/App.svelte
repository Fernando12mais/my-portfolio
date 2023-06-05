<script lang="ts">
  import Polaroid from "./lib/Polaroid.svelte";
  import Experience from "./lib/Experience.svelte";
  import TimeIcon from "./lib/icons/TimeIcon.svelte";
  import ScreenIcon from "./lib/icons/ScreenIcon.svelte";
  import ApiIcon from "./lib/icons/APIIcon.svelte";
  import Carousel from "./lib/Carousel.svelte";
  import GridSkills from "./lib/GridSkills.svelte";
  import Footer from "./lib/Footer.svelte";
  import TeachIcon from "./lib/icons/TeachIcon.svelte";

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
        { Icon: TeachIcon, info: "Treinamento de programadores trainees" },
        { Icon: ScreenIcon, info: "Desenvolvimento de interfaces" },
      ],
    },
  ];
</script>

<main class="w-full">
  <section
    class="min-h-screen bg-portfolio1 w-full bg-no-repeat bg-right flex flex-col lg:flex-row bg-cover"
  >
    <div class="flex-1 px-4 lg:px-16">
      <header class="w-full pt-16">
        <p class="text-small lg:text-big">Frontend developer</p>
        <p class="text-small lg:text-big">Inglês fluente</p>
      </header>
    </div>

    <div class="flex-1 flex justify-center items-center pr-10">
      <h1 class="font-title text-small">Fernando fernandes</h1>
    </div>

    <Footer />
  </section>

  <!-- <section
    class="min-h-screen bg-portfolio2 bg-no-repeat bg-cover flex flex-col items-center justify-center relative"
  >
    <h2 class="font-title leading-[8.75rem]">Habilidades</h2>
    <GridSkills />
  </section> -->
  <!-- <section class="min-h-screen pt-16 max-w-8xl mx-auto">
    <div class="flex">
      <div class="flex flex-1 items-center gap-16">
        <Carousel
          onNext={(newIndex) => {
            index = newIndex;
          }}
          onPrev={(newIndex) => {
            index = newIndex;
          }}
        >
          {#each companies as company}
            <Polaroid
              companyName={company.companyName}
              from={company.from}
              position={company.position}
              to={company.to}
            />
          {/each}
        </Carousel>
      </div>

      <div class="flex-1">
        <h2 class="font-title leading-[8.75rem] mb-8">Experiências</h2>

        <Experience experienceDetails={companies[index].experience} />
      </div>
    </div>
    <button
      class="border-primary-action border-2 mx-auto block py-4 px-14 text-small rounded-lg -translate-x-1/2 text-primary-content mt-14"
      >Mais detalhes</button
    >
  </section> -->
</main>
