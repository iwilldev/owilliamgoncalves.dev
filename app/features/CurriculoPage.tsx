import { BounceButton } from "~/components/common/BounceButton";
import { HalfScreenPic } from "~/components/common/HalfScreenPic";
import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Courses } from "~/components/curriculo/Courses";
import { Education } from "~/components/curriculo/Education";
import { Experience } from "~/components/curriculo/Experience";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import type { CurriculoPageProps } from "~/utils/types";

export const CurriculoPage = ({ data }: { data: CurriculoPageProps }) => (
  <>
    <Container id="inicio" colReverse>
      <HalfScreenPic
        src="/assets/images/curriculo.webp"
        alt="William Gonçalves, homem branco de barba sorrindo, enquanto segura um teclado com as mãos. Usa camisa e boné vermelhos"
      />
      <SectionLeft>
        <Prose>
          <Title variant="h1" text="Currículo" className="text-primary" />
        </Prose>
        <BounceButton href="#experiencia" />
      </SectionLeft>
      <SectionRight>{null}</SectionRight>
    </Container>
    <Container id="experiencia">
      <SectionLeft>
        <Prose>
          <Title
            variant="h2"
            text="Experiência"
            className="text-primary-content"
          />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <Experience data={data.experiences} />
        <BounceButton href="#formacao" />
      </SectionRight>
    </Container>
    <Container id="formacao">
      <SectionLeft>
        <Prose>
          <Title
            variant="h2"
            text="Formação Acadêmica"
            className="text-primary-content"
          />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <Education data={data.educations} />
        <BounceButton href="#cursos" />
      </SectionRight>
    </Container>
    <Container id="cursos">
      <SectionLeft>
        <Prose>
          <Title variant="h2" text="Cursos" className="text-primary-content" />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <Courses data={data.courses} />
        <BounceButton href="#inicio" toUp />
      </SectionRight>
    </Container>
  </>
);
