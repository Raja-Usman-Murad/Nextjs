import { redirect } from "next/navigation";
import { comments, commentsType } from "../commentsArray";

export async function GET(
  _request: Request,
  { params }: { params: { commentId: string } }
) {
  if (parseInt(params.commentId) > comments.length) {
    redirect("/comments");
  }
  const commentId = params.commentId;
  const commentIndex = findIndex(commentId);
  const comment = comments[commentIndex];

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { commentId: string } }
) {
  const body = await request.json();
  const { text } = body;
  const commentId = params.commentId;
  const commentIndex = findIndex(commentId);
  comments[commentIndex].text = text;

  return Response.json(comments[commentIndex]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { commentId: string } }
) {
  const commentId = params.commentId;
  const commentIndex = findIndex(commentId);
  const deletedComment = comments[commentIndex];
  delete comments[commentIndex];

  return Response.json(deletedComment);
}

const findIndex = (id: string): number =>
  comments.findIndex((comment: commentsType): boolean => comment.id === id);
