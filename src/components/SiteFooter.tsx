export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 text-sm text-muted-foreground sm:grid-cols-3">
          <div>
            <p className="font-serif text-base font-bold text-foreground">UFRRJ</p>
            <p className="mt-2">
              Impacto das Atividades Extensionistas na comunidade.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contato</p>
            <p className="mt-2">[E-mail]</p>
            <p>[Endereço]</p>
            <p>[Número de telefone]</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Sugestões</p>
            <a
              href="mailto:dididi@gmail.com"
              className="mt-2 inline-block text-primary underline-offset-4 hover:underline"
            >
              dididi@gmail.com
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} UFRRJ — Projeto de Extensão.
        </p>
      </div>
    </footer>
  );
}
