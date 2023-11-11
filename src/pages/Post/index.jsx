import "./Post.css";

import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";
import NotFound from "pages/NotFound";
import PageDefault from "components/PageDefault";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<PageDefault />}>
        <Route
          index
          element={
            <ModelPost
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </ModelPost>
          }
        />
      </Route>
    </Routes>
  );
}
