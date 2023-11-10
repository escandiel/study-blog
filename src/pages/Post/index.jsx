import "./Post.css";

import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <h1>Post nao existe mané !</h1>;
  }

  return (
    <ModelPost
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </ModelPost>
  );
}
