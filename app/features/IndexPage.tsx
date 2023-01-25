import { ProfilePic } from "~/components/common/ProfilePic";
import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import type { IndexPageProps } from "~/utils/types";

export const IndexPage = ({ data }: { data: IndexPageProps }) => (
  <Container colReverse>
    <SectionLeft>
      <Prose>
        <Title variant="h1" text="William Gonçalves" className="text-primary" />
        <p className="mt-0 block">{data.indexText}</p>
      </Prose>
    </SectionLeft>
    <SectionRight>
      <ProfilePic
        src={data.indexImage}
        alt="William Gonçalves, homem branco de barba sorrindo, enquanto segura um teclado com as mão. Usa camisa e boné vermelhos"
      />
    </SectionRight>
  </Container>
);
