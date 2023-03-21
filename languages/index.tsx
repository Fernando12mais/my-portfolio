import Tag from "@/components/tag";

const languages = (darkMode: boolean) => ({
  eng: {
    darkmode: darkMode ? "Light" : "Dark",
    role: "Frontend developer",
    description: (
      <>
        I am daily working with <Tag>React</Tag>, <Tag>Typescript</Tag>, and
        <Tag> Styled-components </Tag>.<br /> I am proficient in <Tag>CSS</Tag>{" "}
        ,<Tag>Git</Tag> and have experience using the atomic design methodology
        to build scalable and <Tag>maintainable UIs</Tag>.
      </>
    ),
    about: {
      title: "About me",
      content: (
        <>
          <li>Speak two languages (Portuguese and English)</li>
          <li>Loves spread knowledge and learn</li>
          <li>Lives in Brazil</li>
        </>
      ),
    },
    skills: {
      title: "My developer skills",
      frontend: (
        <>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>React</li>
          <li>CSS</li>
          <li>Atomic design</li>
          <li>Figma</li>
          <li>State management (Redux, Context API)</li>
          <li>Clean code (DRY)</li>
          <li>Styled-components</li>
          <li>Tailwind CSS (I built this portfolio with it)</li>
          <li>NextJs</li>
        </>
      ),
      backend: {
        content: (
          <>
            <li>NodeJs</li>
            <li>MongoDb</li>
            <li>Prisma</li>
            <li>NextAuth</li>
            <li>NextJs</li>
          </>
        ),
        title: "Backend (learning)",
      },
    },
    projects: {
      title: "My projects (coming soon)",
      content: "",
    },
  },
  pt: {
    darkmode: darkMode ? "Claro" : "Escuro",
    role: "Desenvolvedor front-end",
    description: (
      <>
        Trabalho diariamente com <Tag>React</Tag>, <Tag>Typescript</Tag>, E
        <Tag> Styled-components </Tag>.<br /> Sou proficiente em <Tag>CSS</Tag>{" "}
        ,<Tag>Git</Tag> E possuo experiência usando a metodologia do design
        atômico para criar interfaces escaláveis{" "}
        <Tag>e de fácil manutenção</Tag>.
      </>
    ),
    about: {
      title: "Sobre mim",
      content: (
        <>
          <li>Falo duas línguas (Português e Inglês)</li>
          <li>Amo espalhar conhecimento e aprender</li>
          <li>Moro no Brasil</li>
        </>
      ),
    },
    skills: {
      title: "Minhas habilidades como desenvolvedor",
      frontend: (
        <>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>React</li>
          <li>CSS</li>
          <li>Atomic design</li>
          <li>Figma</li>
          <li>Gerenciamento de estado(Redux, Context API)</li>
          <li>Código limpo (Não se repita)</li>
          <li>Styled-components</li>
          <li>Tailwind CSS (Fiz este portfólio com ele)</li>
          <li>NextJs</li>
        </>
      ),
      backend: {
        content: (
          <>
            <li>NodeJs</li>
            <li>MongoDb</li>
            <li>Prisma</li>
            <li>NextAuth</li>
            <li>NextJs</li>
          </>
        ),
        title: "Backend (Aprendendo)",
      },
    },
    projects: {
      title: "Meus projetos (em breve)",
      content: "",
    },
  },
});

export default languages;
