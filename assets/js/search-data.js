// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected LLM, RAG, and full-stack engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, experience, skills, and selected projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-fingraphrag",
          title: 'FinGraphRAG',
          description: "Portfolio Risk &amp; Market Analysis using GraphRAG with Qdrant + Neo4j",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_fingraphrag/";
            },},{id: "projects-llm-agent-amp-tool-enhanced-reasoning",
          title: 'LLM Agent &amp;amp; Tool-Enhanced Reasoning',
          description: "Multi-task reasoning framework with reranking, self-reflection, and MCP tool calls",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_llm_agent/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%75%65%6A%69%6E%67%79%75%61%6E.%63%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jingyuan-Xue", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jingyuan-xue", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
