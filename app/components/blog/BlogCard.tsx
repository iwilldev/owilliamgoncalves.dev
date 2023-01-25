import { Link } from "@remix-run/react";
import type { PostResumedProps } from "~/utils/types";

export function BlogCard({ post }: { post: PostResumedProps }) {
  return (
    <Link
      to={`/blog${post.path}`}
      key={post.id}
      className="animate-from-barely-visible non-animate card relative w-80 transform bg-base-300 shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-primary"
    >
      <figure>
        <img
          className="h-40 w-full object-cover object-left opacity-60"
          src={post.cover_image || post.social_image}
          alt={post.title}
        />
      </figure>
      <div className="avatar absolute top-1 right-1">
        <div className="w-12 rounded-xl">
          <img
            src={
              post.organization
                ? post.organization.profile_image_90
                : post.user.profile_image_90
            }
            alt={post.user.name}
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="my-2">{post.description}</p>
        {post.organization && (
          <div className="badge-warning badge badge-lg">
            {post.organization.name}
          </div>
        )}
      </div>
    </Link>
  );
}
