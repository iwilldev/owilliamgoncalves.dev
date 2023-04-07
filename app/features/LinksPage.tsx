import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import type { LinksPageProps } from "~/utils/types";

export const LinksPage = ({ data }: { data: LinksPageProps }) => (
  <Container>
    <SectionLeft>
      <Prose>
        <Title variant="h1" text="Contatos" className="text-primary" />
        <p className="mt-0 block">Me liga, me manda um telegramaaaa...</p>
      </Prose>
    </SectionLeft>
    <SectionRight>
      {data.links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn mx-auto mb-10 w-full max-w-sm gap-2"
        >
          {link.icon}
          <p>{link.label}</p>
        </a>
      ))}
    </SectionRight>
  </Container>
);
