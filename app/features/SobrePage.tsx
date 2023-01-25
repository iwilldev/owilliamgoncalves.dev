import { BounceButton } from "~/components/common/BounceButton";
import { ProfilePic } from "~/components/common/ProfilePic";
import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import { FamilyImages } from "~/components/sobre/FamilyImages";
import type { SobrePageProps } from "~/utils/types";

export const SobrePage = ({ data }: { data: SobrePageProps }) => (
  <>
    <Container id="inicio">
      <SectionLeft>
        <Prose>
          <Title variant="h1" text="Sobre" className="text-primary" />
        </Prose>
      </SectionLeft>
      <SectionRight>
        <BounceButton href="#familia" />
      </SectionRight>
    </Container>
    <Container id="familia" colReverse>
      <SectionLeft>
        <Prose className="mb-12">
          <p className="mt-0 whitespace-pre-line">{data.aboutText1}</p>
        </Prose>
        <BounceButton href="#design" placeLeft />
      </SectionLeft>
      <SectionRight>
        <FamilyImages images={data.aboutFamilyImages} />
      </SectionRight>
    </Container>
    <Container id="design">
      <SectionLeft>
        <img
          className={`animate-from-barely-visible non-animate object-cover`}
          src={data.aboutDesign}
          alt=""
        />
      </SectionLeft>
      <SectionRight>
        <Prose className="mb-12">
          <p className="mx-auto mt-0 whitespace-pre-line">{data.aboutText2}</p>
        </Prose>
        <BounceButton href="#carreira" />
      </SectionRight>
    </Container>
    <Container id="carreira" colReverse>
      <SectionLeft>
        <Prose className="mb-12">
          <p className="mx-auto whitespace-pre-line">{data.aboutText3}</p>
        </Prose>
        <BounceButton href="#inicio" toUp placeLeft />
      </SectionLeft>
      <SectionRight>
        <ProfilePic
          src={data.aboutBanger}
          alt="William Gonçalves, homem branco de barba, segurando um teclado com uma mão e fazendo chifrinhos com a outra. Usa camisa e boné vermelhos"
        />
      </SectionRight>
    </Container>
  </>
);
