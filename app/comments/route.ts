type comments = {
  id: string;
  text: string;
};

const comments: comments[] = [
  { id: "1", text: "comment 1" },
  { id: "2", text: "comment 2" },
  { id: "3", text: "comment 3" },
  { id: "4", text: "comment 4" },
];

export function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComment: comments = {
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
