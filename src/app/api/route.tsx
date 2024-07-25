import { renderToReadableStream } from "react-dom/server.browser";
import { WithState } from "../../components/WithState";

export const dynamic = "force-dynamic";

/**
export const GET = async () => {
  const headersList = headers();

  const pageHTML = await fetch("http://localhost:3000", {
    headers: {
      ...headersList.entries,
    },
  }).then((res) => res.text());

  return new Response(pageHTML, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}; */

export const GET = async () => {
  const html = renderToReadableStream(<WithState />);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
