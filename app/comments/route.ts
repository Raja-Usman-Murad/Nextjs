import { comments, commentsType } from "./commentsArray";

export function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComment: commentsType = {
    text: comment.text,
    id: (comments.length + 1).toString(),
  };

  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
