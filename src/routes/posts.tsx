import { createFileRoute, Link } from "@tanstack/react-router";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define the route with the loader
export const Route = createFileRoute("/posts")({
  loader: async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const posts = await response.json();
    return posts.slice(0, 10); // Return first 10 posts
  },
  component: PostsComponent,
  pendingComponent: () => <div>Loading posts...</div>,
  errorComponent: ({ error }) => (
    <div>Error loading posts: {error.message}</div>
  ),
});

function PostsComponent() {
  const posts = Route.useLoaderData();

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
