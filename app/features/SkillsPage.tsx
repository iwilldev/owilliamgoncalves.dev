import { BounceButton } from "~/components/common/BounceButton";
import { HalfScreenPic } from "~/components/common/HalfScreenPic";
import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import { Skills } from "~/components/skills/Skills";
import type { SkillsPageProps } from "~/utils/types";

export const SkillsPage = ({ data }: { data: SkillsPageProps }) => (
  <>
    <Container id="inicio" colReverse>
      <HalfScreenPic
        src="/assets/images/skills.webp"
        alt="William Gonçalves, homem branco de barba sorrindo, enquanto segura um teclado com as mãos apontando-o para a câmera. Usa camisa e boné vermelhos"
      />
      <SectionLeft>
        <Prose>
          <Title variant="h1" text="Skills" className="text-primary" />
        </Prose>
        <BounceButton href="#usei-no-trabalho" />
      </SectionLeft>
      <SectionRight>{null}</SectionRight>
    </Container>
    <Container id="usei-no-trabalho">
      <SectionLeft>
        <Prose>
          <Title
            variant="h2"
            text="Uso ou já usei em projetos de trabalho, pessoais e de estudo"
            className="text-primary-content"
          />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <Skills skills={data.proSkills} className="mb-12" />
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
