import { BounceButton } from "~/components/common/BounceButton";
import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import { Skills } from "~/components/skills/Skills";
import type { SkillsPageProps } from "~/utils/types";

export const SkillsPage = ({ data }: { data: SkillsPageProps }) => (
  <>
    <Container id="inicio">
      <SectionLeft>
        <Prose>
          <Title variant="h1" text="Skills" className="text-primary" />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <BounceButton href="#usei-no-trabalho" />
      </SectionRight>
    </Container>
    <Container id="usei-no-trabalho">
      <SectionLeft>
        <Prose>
          <Title
            variant="h2"
            text="Uso ou já usei em projetos pelos quais passei"
            className="text-primary-content"
          />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <Skills skills={data.proSkills} className="mb-12" />
        <BounceButton href="#usei-em-projetos-pessoais" />
      </SectionRight>
    </Container>
    <Container id="usei-em-projetos-pessoais">
      <SectionLeft>
        <Prose>
          <Title
            variant="h2"
            text="Já usei em projetos pessoais e de estudo"
            className="text-primary-content"
          />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <Skills skills={data.beginnerSkills} className="mb-12" />
        <BounceButton href="#tenho-interesse" />
      </SectionRight>
    </Container>
    <Container id="tenho-interesse">
      <SectionLeft>
        <Prose>
          <Title
            variant="h2"
            text="Tenho interesse e quero aprender mais"
            className="text-primary-content"
          />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <Skills skills={data.studySkills} className="mb-12" />
        <BounceButton href="#inicio" toUp />
      </SectionRight>
    </Container>
  </>
);
