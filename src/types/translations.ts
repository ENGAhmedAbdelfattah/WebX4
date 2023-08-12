// Header Types
export type link = {
  id: string;
  name: string;
  path: string;
};

export type navbar = {
  navbar: {
    lang: string;
    navList: link[];
  };
};

// Home Types
export type landing = {
  hi: string;
  landingHeader: string;
  landingSubheader: string;
  landingParagraph: string;
  headerBtn: string;
};

export type SkillItem = {
  id: string;
  paragraph: string;
  frontendImg?: string;
  backendImg?: string;
  UIUXImg?: string;
  toolsImg?: string;
};

export type CategoryItem = {
  id: string;
  activeName: string;
  categoryImg: string;
  header: string;
};

type ActiveCatgory = {
  [key: string]: any;
}

export type Skills = {
  skillsHeader: string;
  leftItems: CategoryItem[];
  rightItems: {
    frontend: SkillItem[];
    backend: SkillItem[];
    UIUX: SkillItem[];
    tools: SkillItem[];
  };
};

// works:
export type ToolItem = {
  id: string;
  name: string;
  imageName: string;
}

export type WorkItem = {
  worksItemTitle: string;
  worksItemParagraph: string;
  toolsLeft: ToolItem[];
  websiteTitle: string;
  githubSrc: string;
  websiteSrc: string;
}

export type WorksSection = {
  worksHeader: string;
  worksItems: WorkItem[];
  worksItemBuilt: string;
  toolsRight: ToolItem[];
}
