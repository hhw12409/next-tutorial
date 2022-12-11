import type { NextApiResponse } from "next";
export default function Error({ statusCode }: { statusCode: string }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: { res: NextApiResponse; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

// 서버에러 페이지는 정적으로 최적화를 제공하지않는다.
// 해당코드로 404, 500모두 처리가 가능하다. 하지만 404는 static로 관리하는것이 좋다.
