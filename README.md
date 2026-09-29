# T&M Manutenção — site

Site de uma página para divulgar os planos de manutenção de piscina e transformar visita no site em pedido de orçamento pelo WhatsApp.

Nome, logo, tagline, região, cores, vídeos e link de WhatsApp foram puxados do Instagram [@tem_manutencao](https://www.instagram.com/tem_manutencao/).

## Antes de publicar

Abra `js/main.js` e confira o bloco `CONFIG`:

- `whatsappLink` — já está com o link oficial de WhatsApp da conta do Instagram (`wa.me/message/...`). Se um dia eles configurarem um número de WhatsApp Business normal, pode trocar por `"https://wa.me/55DDDNUMERO"`.
- `instagramUrl` — já aponta para `instagram.com/tem_manutencao`.
- `nomeEmpresa`, `regiaoTexto`, `horarioTexto` — ajuste se algo mudar.

Os preços dos planos (`R$180`, `R$280`, `R$380`) são valores de referência que eu sugeri, não vieram do Instagram — confirme com a T&M antes de publicar.

## Imagens e vídeos

- `img/logo.png` — logo real da T&M (usada no cabeçalho, favicon e card do Instagram).
- `img/antes.jpg` / `img/depois.jpg` — quadros reais tirados do vídeo de transformação, usados no antes/depois do topo do site.
- `video/*.mp4` — 3 Reels reais do Instagram (transformação, resultado e dica do filtro), com miniaturas em `video/posters/`.

Pra trocar qualquer um desses por um arquivo mais recente, é só substituir o arquivo mantendo o mesmo nome (ou trocar o nome também no `index.html`, seção `#videos` e no hero).

## Ver localmente

Abra `index.html` direto no navegador, ou rode um servidor simples a partir desta pasta:

```
python3 -m http.server 8000
```

e acesse http://localhost:8000

## Publicar

É um site estático (HTML/CSS/JS puro, sem build). Qualquer uma dessas opções funciona:

- **Netlify ou Vercel**: arraste esta pasta no painel do site deles (drag & drop), ou conecte um repositório Git.
- **GitHub Pages**: suba os arquivos para um repositório no GitHub e ative o Pages nas configurações do repositório.
- **Hospedagem compartilhada**: envie os arquivos por FTP para a pasta pública (geralmente `public_html`).

Atenção ao tamanho: a pasta `video/` tem ~5,5MB — a maioria das hospedagens gratuitas aceita numa boa, mas em conexões lentas os vídeos podem demorar pra carregar (por isso usam `preload="metadata"` e só baixam o vídeo inteiro quando a pessoa aperta play).

## Estrutura

```
index.html          → conteúdo da página
css/style.css       → estilo visual (paleta tirada da logo + da água das piscinas nos vídeos)
js/main.js          → WhatsApp, Instagram, textos dinâmicos e rolagem suave (edite o CONFIG aqui)
favicon.ico         → ícone da aba do navegador (recorte circular da logo real)
apple-touch-icon.png→ ícone pra quando alguém salva o site na tela inicial do celular
img/logo.png        → logo real da T&M
img/antes.jpg       → quadro real "antes" (água turva)
img/depois.jpg      → quadro real "depois" (água cristalina)
video/*.mp4         → os 3 Reels reais
video/posters/*.jpg → miniaturas dos vídeos
```
