import { Link } from "@remix-run/react";
import type { ThrownResponse } from "@remix-run/react";
import { ErrorTemplate } from "./ErrorTemplate";

export function Catch({ caught }: { caught: ThrownResponse<number, any> }) {
  return (
    <ErrorTemplate
      title={caught.statusText}
      left={
        <>
          <h1 className="mt-auto text-4xl font-bold text-stone-400">
            Mermão! Que rolê foi esse?
          </h1>
          <p className="mt-10 text-xl text-stone-400">
            É estranho que tenhamos chegado até aqui. Como todos os scripts
            dessa página foram revisados em voz alta pelo Cidão Moreira, é
            provável que algum erro de digitação ou um problema de autorização
            tenha direcionado sua navegação pra cá. Mas relaxa!
          </p>
          <Link
            to="/"
            className="mb-10 mt-5 text-xl text-primary-content underline"
          >
            Clique aqui, para voltar do começo
          </Link>
          <pre>
            <code>Status: {caught.status}</code>
          </pre>
          <pre>
            <code>{JSON.stringify(caught.data, null, 2)}</code>
          </pre>
        </>
      }
      right={
        <img
          src="/assets/images/ronaldinho-gaucho.jpg"
          alt=""
          className="ml-auto h-96 w-96 rounded-full object-cover object-top"
        />
      }
    />
  );
}
