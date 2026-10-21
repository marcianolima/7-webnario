# GeoCanoas — 7º Webinário Governo Digital

Apresentação web do GeoCanoas (Prefeitura de Canoas/RS), em **Reveal.js 6.0.2**, 100% frontend, hospedável no **GitHub Pages**, sem backend ou API key.

- **Repositório:** https://github.com/marcianolima/7-webnario
- **Endereço previsto do site:** https://marcianolima.github.io/7-webnario/
- **Evento:** 21/10/2026 — Geoinformação e Inteligência Urbana
- **Palestrante:** Marciano da Costa Lima, Engenheiro Cartógrafo, Diretoria do GeoCanoas/SMDU

## Apresentação atual (33 slides)

A apresentação foi reorganizada em **33 slides**, planejados para aproximadamente 40 minutos. Cada um tem notas para a pessoa apresentadora. Os blocos abordam:

- Alcance institucional divulgado pelo GeoCanoas: **+10 anos de geotecnologia, +100 aplicações desenvolvidas e +10 secretarias atendidas**. São informações declaradas no portal, sem auditoria externa.
- Construção e gestão da base cartográfica, georreferenciamento, integração, infraestrutura de dados e serviços WebGIS.
- Casos reais **divulgados pelo portal municipal**: Mapa Cadastral, Topográfico, Zoneamento Urbano, Consulta de Viabilidade e Informativo Prévio.
- Defesa Civil: Pontos de Riscos, Inundação em Canoas e Pluviômetros/Linígrafo.
- Gestão setorial: Minha Unidade de Saúde, Redes de Ensino Escolar, Ecopontos e equipamentos de segurança.
- **13 capturas reais enviadas para este webinar**, incorporadas em arquivos WebP locais: mapa cadastral (16/10/2026), PDUA/zoneamento, aplicativo e PDF de Informativo de Lote, comparador temporal 1973–2018, estudo de perigo hidráulico com dados AquaProjetos, bacias hidrográficas, projetos em andamento, dois dashboards de empreendimentos, dashboard do Censo 2022 e mapas de domicílios particulares e coletivos.
- Exemplo ilustrativo de **endereçamento ambíguo — “Rua 2”**: divergências entre nome oficial, uso local e provedores externos, reforçando a necessidade de padronização.
- Histórico de imagens, indicadores, processos administrativos, transparência, governança e proposta de Lei GeoCanoas.
- Encerramento com acesso ao portal municipal, repositório e página de projetos.

### Fontes municipais utilizadas

1. **Portal GeoCanoas:** https://sistemas.canoas.rs.gov.br/geo/portal/ — seu conteúdo foi consultado e os indicadores, imagens e exemplos foram selecionados conforme a página.
2. **Projetos GeoCanoas:** https://sistemas.canoas.rs.gov.br/geo/projetos-geo/ — fornecida como segunda fonte, mas seu conteúdo não pôde ser acessado externamente nesta atualização. Um link foi adicionado; não foram inventados resultados ou imagens atribuídos a esta página.

O registro rastreável de indicadores, imagens WebP e observações está em `assets/data/fontes.json`.

### Capturas locais e fontes do portal

As **13 capturas fornecidas pelo apresentador** foram incorporadas em `assets/images/capturas/*.webp` e carregadas pelo Reveal.js sob demanda. São imagens reais de aplicações, mapas e painéis, sem solicitação de API key. Os arquivos foram inicialmente convertidos a partir de prévias disponíveis para transferência, com largura entre aproximadamente 230 e 580 pixels; **não são os originais em resolução integral**. Para exibição em projetor grande, recomenda-se substituir cada WebP pela versão da captura original em resolução completa, mantendo os mesmos nomes.

Outros slides ainda referenciam imagens WebP do próprio Portal GeoCanoas por URL HTTPS, com substitutos SVG locais claramente identificados se o servidor externo falhar. Esses SVGs são conceituais e nunca devem ser usados como cartografia oficial.

**Responsabilidade técnica e temporal:** o estudo de perigo hidráulico TR100 é um cenário modelado com dados AquaProjetos, não a mancha observada de 2024; os valores dos dashboards são os que aparecem nas capturas e não constituem estatística atualizada automaticamente; a “Rua 2” é exemplo hipotético. O zoneamento e a proposta de Lei GeoCanoas devem ser apresentados conforme seu status normativo próprio.

### Ordenação e destaques

- Slides 1–5: abertura, indicadores institucionais, desafios e arquitetura;
- **Slide 6:** mapa cadastral real enviado em `Captura de tela 2026-10-16 132658.png`;
- Sequência seguinte: base cartográfica, endereçamento, viabilidade e **apoio técnico ao PDUA**;
- Informativo de Lote: aplicativo e documento emitido;
- Evolução urbana, bacias e **estudo de perigo hidráulico**;
- Projetos em andamento, dashboards de empreendimentos e **Censo 2022**;
- Aplicações setoriais, integração de processos, governança e encerramento.

No slide 5, a revelação dos blocos e das setas foi ordenada por `data-fragment-index`: a seta aparece **após** a etapa que a antecede.

## Estrutura

    7-webnario/
    ├── index.html
    ├── .nojekyll
    ├── .github/
    │   └── workflows/
    │       └── pages.yml
    ├── css/
    │   ├── theme.css
    │   └── custom.css
    ├── js/
    │   └── config.js
    ├── assets/
    │   ├── data/
    │   │   └── fontes.json
    │   └── images/
    │       ├── capturas/      # 13 mapas e screenshots locais em WebP
    │       ├── favicon.svg
    │       ├── mapa-territorio.svg
    │       ├── mapa-cadastro.svg
    │       ├── mapa-zoneamento.svg
    │       ├── mapa-inundacao.svg
    │       └── mapa-indicadores.svg
    └── README.md

Não existe build nem instalação obrigatória. Reveal.js 6.0.2 e seus plugins Notes são carregados por CDN com versão fixada. As fontes Manrope e DM Sans vêm do Google Fonts. Para operação totalmente offline, hospede essas dependências localmente em uma evolução futura.

## Rodar localmente

Use um servidor HTTP em vez de abrir o HTML por file://.

    git clone https://github.com/marcianolima/7-webnario.git
    cd 7-webnario
    python3 -m http.server 8000

Abra http://localhost:8000/. No Windows, se necessário, rode:

    py -m http.server 8000

## Ativar o GitHub Pages

Já existe um workflow para publicar o conteúdo estático em cada push para a branch main. Na interface do GitHub:

1. Abra Settings → Pages;
2. Em Build and deployment, escolha Source: **GitHub Actions**;
3. Confira Actions → **Deploy GeoCanoas presentation to Pages**;
4. Depois do workflow bem-sucedido, acesse https://marcianolima.github.io/7-webnario/.

**Importante:** ter o arquivo do workflow no repositório não garante que Pages esteja ativado. A configuração da página precisa permitir deploy via Actions. Se estiver usando Source: Deploy from a branch, troque para GitHub Actions ou use apenas a publicação pela branch, evitando configurar os dois mecanismos em paralelo.

## Comandos exatos para o repositório JÁ criado

Este repositório foi identificado como **marcianolima/7-webnario** e tem a branch main. Para fazer o checkout correto:

    git clone https://github.com/marcianolima/7-webnario.git
    cd 7-webnario
    git status

Para editar o projeto localmente, salvar e publicar:

    git pull origin main
    git add .
    git commit -m "feat: melhora apresentação GeoCanoas"
    git push origin main

Os commits na main acionam o workflow de publicação. Não é necessário comando separado de deploy.

Se você já tem uma pasta local chamada 7-webnario, dentro dela confira antes o estado:

    git remote -v
    git branch --show-current
    git status
    git pull --rebase origin main

Não execute git init dentro de uma pasta já clonada.

## Para um REPOSITÓRIO NOVO, se quiser outra cópia

Crie primeiro um repositório novo no GitHub e, **em uma cópia independente do projeto**, rode:

    git init
    git branch -M main
    git remote add origin https://github.com/SEU_USUARIO/NOVO_REPOSITORIO.git
    git add .
    git commit -m "feat: primeira apresentação Reveal.js"
    git push -u origin main

Se o novo repositório tiver README inicial gerado pelo GitHub, clone-o primeiro para integrar históricos em vez de sobrescrevê-lo. Nunca use --force sem examinar o histórico remoto.

## Controles durante a apresentação

| Tecla / controle | Ação |
|---|---|
| ←, →, ↑, ↓ | Navegar |
| Espaço | Avançar slide ou fragmento |
| F | Tela cheia |
| Esc ou O | Visão geral |
| S | Speaker notes (popup) |
| T ou botão Tema | Alternar dark/light |
| Barra inferior | Progresso |
| Número inferior | Slide atual / total |
| Botão PDF | Versão de impressão |
| Toque e deslize | Navegação em dispositivos móveis |

Para as notas, o navegador pode pedir autorização para abrir um popup. Para o webinar, recomendo usar um segundo monitor e conferir a apresentação em tela cheia antes de começar.

## Exportar PDF

Abra uma destas URLs:

- http://localhost:8000/?print-pdf
- https://marcianolima.github.io/7-webnario/?print-pdf

No Google Chrome ou Microsoft Edge:

1. Ctrl+P (ou Cmd+P no macOS);
2. Destino: **Salvar como PDF**;
3. Orientação: **Paisagem**;
4. Margens: **Nenhuma**;
5. **Gráficos de plano de fundo: ativados**;
6. Salvar.

A impressão foi configurada para mostrar os fragmentos sem gerar páginas adicionais por etapa. Esse procedimento é o recomendado pelo próprio Reveal.js. Não há necessidade de converter o conteúdo para PowerPoint.

## Manutenção — adicionar slides e imagens

Os slides ficam no arquivo index.html, dentro de div.slides. Cada section.page é uma página.

Exemplo:

    <section class="page process">
      <div class="overline">09 / NOVO TEMA</div>
      <h2>Uma conclusão clara e direta.</h2>
      <p>Uma evidência sintética.</p>
      <aside class="notes">Roteiro de fala e tempo previsto.</aside>
    </section>

Layouts existentes (além dos componentes oficiais adicionados nesta versão):
- hero: capa;
- context: grande mapa e indicadores;
- process: fluxo de etapas;
- map-slide: mapa dominante;
- compare-slide: imagens lado a lado;
- risk-slide: mapa de risco conceitual com explicação;
- gallery-slide: galeria clicável;
- integration-slide: fluxo vertical;
- governance-slide: cards institucionais;
- final-slide: encerramento.

Caso queira conectar dois slides pela animação Auto-Animate, use data-auto-animate com o mesmo data-auto-animate-id nas sections consecutivas e data-id nos elementos correspondentes. Os slides 4 e 5 demonstram o padrão.

### Substituir SVGs por capturas autênticas em WebP

Exporte os mapas **autorizados** das aplicações ou apresentação original, sem dados sensíveis, e converta em WebP. Com ImageMagick:

    magick captura.png -strip -resize '2000x1200>' -quality 82 assets/images/mapa-cadastro.webp

Depois altere a referência no HTML:

    <img data-src="./assets/images/mapa-cadastro.webp"
         loading="lazy"
         alt="Captura real do Mapa Cadastral do GeoCanoas">

Boas práticas:
- Slide com mapa grande: ~1600–2200 px de largura;
- Galeria: ~900–1200 px de largura;
- Meta de tamanho: 100–500 KB por imagem, conforme detalhes;
- Não cortar legenda, fonte e escala em imagens oficiais;
- Carregamento diferido com data-src + loading=lazy;
- Capa crítica carregada normalmente com fetchpriority=high;
- Sempre manter alt descritivo;
- Nomear arquivos em minúsculas, sem espaços ou acentos.

Se o recorte de object-fit:cover ocultar informações relevantes do mapa, altere para object-fit:contain no seletor correspondente do css/custom.css.

## Customizar design e animações

- **css/theme.css:** paleta e tipografia do tema escuro e claro;
- **css/custom.css:** componentes e dez layouts;
- **js/config.js:** Reveal.initialize, velocidade, navegação, PDF, tema e plugins;
- **index.html:** conteúdo, links, imagens, tempo e notas.

Reveal.js foi fixado em **6.0.2** para estabilidade. Para atualizar a versão, altere as 3 URLs da CDN em index.html e teste Notes, Auto-Animate e PDF. Não use latest em produção sem homologação.

Não foi adicionado GSAP porque Reveal.js já oferece animações e transições suficientes para este estilo editorial e isso mantém o projeto leve. A possibilidade de adicioná-lo permanece aberta.

## Evolução para a palestra completa

A estrutura está preparada para novos blocos: ortofotos 25 cm, MDT/MDS, cadastro territorial, informativo do lote, viabilidade urbanística, estudos de inundação, Defesa Civil, educação, saúde, infraestrutura, automações, governança e IDE Municipal.

A **Lei GeoCanoas é uma proposta** e deve permanecer identificada como tal até que haja fonte oficial confirmando eventual aprovação. Mapas de evento observado, perigo modelado e restrições urbanísticas não são equivalentes.

## Solução de problemas

- Tela vazia: conferir console do navegador e acesso à CDN de Reveal.js.
- Imagens quebradas: conferir caminhos e diferenças entre maiúsculas/minúsculas.
- Layout incorreto: atualizar cache do navegador e confirmar carregamento dos CSS.
- Speaker notes não aparecem: permitir popups, depois pressionar S.
- PDF cortado: abrir a URL com ?print-pdf no Chromium, margens zero.
- GitHub Pages 404: conferir Settings → Pages → GitHub Actions e o último deploy.
- Workflow falhou: verificar permissão de Pages, configuração de Source e logs em Actions.

---

GeoCanoas · Prefeitura de Canoas · Webinar de Geoinformação e Inteligência Urbana, outubro de 2026.
