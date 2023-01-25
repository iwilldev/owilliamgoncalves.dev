import { BlogCard } from "~/components/blog/BlogCard";
import { BounceButton } from "~/components/common/BounceButton";
import { Prose } from "~/components/common/Prose";
import { Title } from "~/components/common/Title";
import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import { SectionRight } from "~/components/layout/SectionRight";
import type { BlogPageProps } from "~/utils/types";

export const BlogPage = ({ data }: { data: BlogPageProps }) => (
  <>
    <Container>
      <SectionLeft>
        <Prose>
          <Title variant="h1" text="Blog" className="text-primary" />
          <p className="mt-0 whitespace-pre-line">
            Confira meus artigos publicados na Dev Community
          </p>
        </Prose>
      </SectionLeft>
      <SectionRight>
        <BounceButton href="#posts" />
      </SectionRight>
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
