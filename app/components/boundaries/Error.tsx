import { Link } from "@remix-run/react";
import { ErrorTemplate } from "./ErrorTemplate";

export function Error({ error }: { error: Error }) {
  return (
    <ErrorTemplate
      title={error.name}
      left={
        <>
          <h1 className="mt-auto text-4xl font-bold text-stone-400">
            Rapaz! Deu ruim...
          </h1>
          <p className="mt-10 text-xl text-stone-400">
            Tem um V8 rodando aqui embaixo. Mas parece que alguma coisa
            desconjuntou a rebimboca da parafuseta. O erro detalhado está logo
            abaixo.
          </p>
          <Link
            to="/"
            className="mb-10 mt-5 text-xl text-primary-content underline"
          >
            Clique aqui, para voltar do começo
          </Link>
          <code>{error.message}</code>
          <code>{JSON.stringify(error.stack, null, 2)}</code>
        </>
      }
      right={
        <img
          src="/assets/images/plift.jpg"
          alt=""
          className="rounded-box ml-auto h-96 w-96 object-cover object-top"
        />
      }
    />
  );
}
