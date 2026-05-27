# Plano: Recriar site do Google Sites

## Aviso importante sobre o acesso

A API do Google Drive consegue **listar e identificar** o arquivo do Google Sites (mimeType `application/vnd.google-apps.site`), mas **não exporta o HTML renderizado** das páginas — o Drive API não tem endpoint de export para Sites como tem para Docs/Sheets.

Para extrair o conteúdo real (textos, imagens, estrutura de seções) preciso da **versão publicada** do site. No Google Sites: botão **Publicar** (canto superior direito) → escolher um endereço web → confirmar. Isso gera uma URL pública (ex: `sites.google.com/view/...`) que pode ser scraped sem quebrar a privacidade da edição.

O plano combina os dois acessos: Drive para confirmar/identificar o site, Firecrawl para extrair conteúdo da versão publicada.

## Etapas

### 1. Conectar Google Drive
Vincular o conector `google_drive` ao projeto para acessar metadados do site original (título, data de modificação, lista de páginas se disponível via API).

### 2. Conectar Firecrawl + publicar o site
- Vincular o conector `firecrawl` (scraping AI-powered).
- Pedir que você publique o site no Google Sites e me envie a URL pública.
- Usar `firecrawl.crawl(url)` para extrair todas as páginas em markdown + capturar screenshots de cada uma para referência visual fiel.

### 3. Recriar a estrutura no TanStack Start
- Mapear cada página do Sites para um arquivo de rota em `src/routes/` (ex: `index.tsx`, `sobre.tsx`, `contato.tsx`).
- Cada rota recebe `head()` próprio com title/description únicos (SEO).
- Layout compartilhado (header/footer/nav) em `__root.tsx` ou em um layout pathless.

### 4. Aplicar identidade visual idêntica
- Extrair cores, fontes e espaçamentos do site original via screenshots e Firecrawl `branding` format.
- Definir tokens semânticos em `src/styles.css` (`--primary`, `--background`, etc. em `oklch`).
- Reconstruir cada seção com componentes Tailwind + shadcn/ui, sem inventar elementos que não existiam no original.

### 5. Recriar mídia
- Baixar imagens via Firecrawl e salvar em `src/assets/`.
- Importar como ES6 imports nos componentes (`import hero from "@/assets/hero.jpg"`).

### 6. Revisão lado a lado
- Comparar cada rota recriada com screenshot da página original.
- Ajustar tipografia, espaçamento e cores até ficar fiel.

## Detalhes técnicos

- **Stack**: TanStack Start + Tailwind v4 + shadcn/ui (já configurado).
- **Roteamento**: file-based em `src/routes/`, uma rota por página do Sites.
- **Conectores**: `google_drive` (metadata) + `firecrawl` (conteúdo + branding).
- **Imagens**: armazenadas em `src/assets/`, importadas estaticamente.
- **Sem backend** nesta fase — é um site estático de conteúdo. Lovable Cloud só entra se você quiser formulário de contato, autenticação, etc.

## O que preciso de você antes da implementação

1. Aprovar a conexão do Google Drive (vou disparar o prompt).
2. **Publicar o site no Google Sites** e me enviar a URL pública — sem isso, não consigo extrair conteúdo fiel.
3. Confirmar se quer apenas a recriação visual estática ou se há funcionalidades extras (formulário, login, etc.).
