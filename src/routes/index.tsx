import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UFRRJ — Impacto das Atividades Extensionistas na comunidade" },
      { name: "description", content: "Projeto de extensão do curso de Ciência da Computação da UFRRJ. Conheça o curso, o projeto e as atividades realizadas." },
      { property: "og:title", content: "UFRRJ — Atividades Extensionistas" },
      { property: "og:description", content: "Impacto das Atividades Extensionistas na comunidade." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const activities = [
  {
    n: "1",
    title: "Laboratório de Programação e Estrutura de Dados",
    desc: "Nesta atividade, o foco é a implementação prática de conceitos lógicos. O objetivo é desenvolver pequenos programas para resolver problemas específicos, exercitando a sintaxe de linguagens de programação e a organização de dados na memória (como listas, pilhas e filas). É o momento de \"codar\" e aprender a depurar erros de lógica.",
  },
  {
    n: "2",
    title: "Análise e Otimização de Algoritmos",
    desc: "Trata-se de uma atividade mais teórica e matemática, voltada para a eficiência. O estudante analisa o desempenho de diferentes soluções para um mesmo problema, utilizando notações matemáticas para medir o tempo de execução e o consumo de recursos. O objetivo é descobrir como resolver tarefas complexas da maneira mais rápida e econômica possível.",
  },
  {
    n: "3",
    title: "Modelagem e Gestão de Bancos de Dados",
    desc: "Esta atividade foca em como a informação é estruturada e armazenada. Os alunos trabalham no desenho de esquemas de dados, garantindo que as informações sejam salvas de forma íntegra e sem redundâncias. Inclui a prática de consultas complexas para extrair relatórios e insights de grandes volumes de informação digital.",
  },
  {
    n: "4",
    title: "Desenvolvimento de Projeto Integrador (Software)",
    desc: "É uma atividade de longa duração que simula o ambiente profissional. Em grupo, os estudantes devem conceber, planejar e construir uma aplicação completa para resolver um problema real. Envolve desde o levantamento de requisitos com o \"cliente\" até a escolha das tecnologias, codificação e testes finais da interface e do servidor.",
  },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Projeto de Extensão · UFRRJ
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl">
            Impacto das Atividades Extensionistas na comunidade
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Levamos a Ciência da Computação para fora da sala de aula — conectando teoria, prática e o mundo real através de projetos que transformam.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/atividades"
              className="bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
            >
              Ver atividades
            </Link>
            <Link
              to="/sobre"
              className="border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Sobre o projeto
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE O CURSO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
          Sobre o curso
        </h2>
        <div className="mt-2 h-1 w-16 bg-primary" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            O curso de Ciência da Computação é uma das graduações mais dinâmicas e fundamentais da era digital. Ao contrário do que muitos pensam, não se trata apenas de "consertar computadores" ou "fazer sites", mas sim do estudo sistemático da computação, dos algoritmos e da resolução de problemas complexos através da tecnologia.
          </p>
          <h3 className="font-serif text-xl font-bold text-foreground">O Que se Estuda?</h3>
          <p>
            O currículo é projetado para oferecer uma base sólida tanto em teoria quanto em aplicação prática. O curso geralmente se divide em três grandes pilares:
          </p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {[
              { t: "Matemática e Teoria", d: "Cálculo, Álgebra Linear, Lógica Matemática e Teoria da Computação. É aqui que o aluno aprende o \"porquê\" das coisas funcionarem." },
              { t: "Desenvolvimento de Software", d: "Linguagens de programação (C, Java, Python, etc.), Estruturas de Dados e Engenharia de Software." },
              { t: "Sistemas e Infraestrutura", d: "Arquitetura de Computadores, Sistemas Operacionais, Redes e Bancos de Dados." },
            ].map((p) => (
              <li key={p.t} className="border-l-4 border-primary bg-secondary/40 p-5">
                <p className="font-serif text-base font-bold text-foreground">{p.t}</p>
                <p className="mt-2 text-sm text-foreground/80">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOBRE O PROJETO */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
            Sobre o projeto
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              Um projeto acadêmico no curso de Ciência da Computação é o momento em que a teoria das salas de aula encontra a prática do mundo real. Mais do que apenas escrever linhas de código, esses projetos visam a resolução de problemas reais, utilizando metodologias estruturadas e pensamento computacional.
            </p>
            <h3 className="font-serif text-xl font-bold text-foreground">Objetivos do Projeto</h3>
            <p>O propósito de um projeto de graduação geralmente gira em torno de três eixos principais:</p>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                ["Aplicação de Conhecimento", "Consolidar conceitos de algoritmos, bancos de dados e engenharia de software."],
                ["Trabalho em Equipe", "Simular o ambiente de desenvolvimento profissional, utilizando ferramentas de controle de versão (como Git)."],
                ["Inovação", "Buscar soluções mais eficientes ou criativas para desafios cotidianos ou científicos."],
              ].map(([t, d], i) => (
                <li key={t} className="bg-background p-6">
                  <p className="font-serif text-3xl font-black text-primary">0{i + 1}</p>
                  <p className="mt-3 font-serif text-base font-bold text-foreground">{t}</p>
                  <p className="mt-2 text-sm text-foreground/80">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ATIVIDADES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
          Atividades
        </h2>
        <div className="mt-2 h-1 w-16 bg-primary" />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {activities.map((a) => (
            <article key={a.n} className="group border border-border bg-background p-6 transition hover:border-primary">
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl font-black text-primary">{a.n}.</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{a.desc}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
                  >
                    Saiba mais →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">Sugestão de melhora?</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">
            Entre em contato pelo e-mail{" "}
            <a href="mailto:dididi@gmail.com" className="underline underline-offset-4">
              dididi@gmail.com
            </a>{" "}
            e nos ajude a melhorar nosso site.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-block bg-background px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition hover:opacity-90"
          >
            Ir para contato
          </Link>
        </div>
      </section>
    </div>
  );
}
