import { Container } from "~/components/layout/Container";
import { SectionLeft } from "~/components/layout/SectionLeft";
import type { PostProps } from "~/utils/types";

export const PostPage = ({ data }: { data: PostProps }) => (
  <Container>
    <SectionLeft>
      <div className="flex w-full flex-col items-center">
        <div className="animate-from-barely-visible non-animate prose-lg prose max-w-5xl">
          <img
            className="mask w-full object-cover"
            src={data.cover_image || data.social_image}
            alt=""
          />
          <h2>{data.title}</h2>
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="gh-link mt-0"
          >
            Veja o post original na Dev Community
          </a>
        </div>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: data.body_html }}
        ></div>
      </div>
    </SectionLeft>
  </Container>
);
