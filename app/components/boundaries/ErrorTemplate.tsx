import { Meta, Links } from "@remix-run/react"
import { Container } from "../layout/Container"
import { SectionLeft } from "../layout/SectionLeft"
import { SectionRight } from "../layout/SectionRight"

export function ErrorTemplate ({
  title,
  left,
  right,
}: {
  title: string
  left: React.ReactNode
  right: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="h-full w-full">
      <head>
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body className="flex h-full w-full justify-center">
        <Container>
          <SectionLeft>
            {left}
          </SectionLeft>
          <SectionRight>
            {right}
          </SectionRight>
        </Container>
      </body>
    </html>
  )
}