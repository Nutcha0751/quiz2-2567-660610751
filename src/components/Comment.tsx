"use client";

import { CommentProps } from "@/libs/types";
import { ReplyProps } from "@/libs/types";
import Reply from "./Reply";

export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}: CommentProps) {
  return (
    <div>
      your code for Comment component here ...
      {/* You can use map-loop to render Reply component here */}
    </div>
  );
}
