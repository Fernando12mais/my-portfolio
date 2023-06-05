<script>
  import FigmaIcon from "./icons/FigmaIcon.svelte";
  import ReactIcon from "./icons/ReactIcon.svelte";
  import HtmlIcon from "./icons/HTMLIcon.svelte";
  import CssIcon from "./icons/CSSIcon.svelte";
  import JavascriptIcon from "./icons/JavascriptIcon.svelte";
  import TypescriptIcon from "./icons/TypescriptIcon.svelte";
  import MongoDbIcon from "./icons/MongoDBIcon.svelte";
  import NodeJsIcon from "./icons/NodeJsIcon.svelte";
  import StyledComponentsIcon from "./icons/StyledComponentsIcon.svelte";
  import TailwindIcon from "./icons/TailwindIcon.svelte";
  import GitIcon from "./icons/GitIcon.svelte";
  import NextJsIcon from "./icons/NextJsIcon.svelte";
  import FadeIn from "./FadeIn.svelte";

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

<div class="bg-primary-background/20 backdrop-blur-[2rem] p-8 rounded-md">
  <ul class="grid grid-cols-4 gap-8">
    {#each icons as { Icon, name }}
      <FadeIn>
        <li
          class="flex flex-col justify-center items-center duration-75 hover:scale-125"
        >
          <Icon />

          <p>{name}</p>
        </li>
      </FadeIn>
    {/each}
  </ul>
</div>
