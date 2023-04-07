import { BlogCard } from "~/components/blog/BlogCard";
import { BounceButton } from "~/components/common/BounceButton";
import { HalfScreenPic } from "~/components/common/HalfScreenPic";
import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import type { BlogPageProps } from "~/utils/types";

export const BlogPage = ({ data }: { data: BlogPageProps }) => (
  <>
    <HalfScreenPic
      src="/assets/images/blog.webp"
      alt="William Gonçalves, homem branco de barba sorrindo, enquanto segura um microfone. Usa camisa e boné vermelhos"
      placeLeft
    />
    <Container colReverse>
      <SectionLeft>
        <Prose>
          <Title variant="h1" text="Blog" className="text-primary" />
          <p className="mt-0 whitespace-pre-line">
            Confira meus artigos publicados na Dev Community
          </p>
        </Prose>
        <BounceButton href="#posts" />
      </SectionLeft>
      <SectionRight>{null}</SectionRight>
    </Container>
    <Container id="posts">
      <SectionLeft>
        <div className="mx-auto mt-20 flex w-full max-w-7xl flex-wrap justify-center gap-10">
          {data.posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </SectionLeft>
    </Container>
  </>
);
