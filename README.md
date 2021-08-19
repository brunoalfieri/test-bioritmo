# Desafio #3 [BIO RITMO](https://github.com/bioritmo/front-end-code-challenge-smartsite)
##### Pontos propostos obrigatórios:
- [x] Layout responsivo [ mobile, tablet, desktop ]
- [x] Consumir JSON a partir de uma url
- [x] Respeitar layout prosposto
- [x] Filtrar dados a partir de um formulário
##### Pontos extras:
- [x] Testes unitários (unit)
- [x] Testes de ponta-a-ponta (end-to-end | e2e)
- [x] Dockerfile + docker-compose
- [x] Docker na heroku
- [x] Travis CI
- [x] [ Aplicativo em produção ](https://test-bioritmo.herokuapp.com/)

--- 
## Inicialização:
- Renomear arquivo `.env.example` para `.env` ou `.env.local`
- Minha máquina possui NODE ?
    - Verifique com `node -v` no terminal do seu sistema operacional
    - Disponibilização [NODE](https://nodejs.org/en/)
- Minha máquina possui DOCKER ? 
    - Verifique com `docker -v` no terminal do seu sistema operacional
    - Disponibilização [DOCKER](https://www.docker.com/get-started)


| COM NODE NO SISTEMA |DESCRIÇÃO |
|-----------| - |
| `npm install`  | Instalação das dependências |
| `npm run dev` | Execução do servidor em desenvolvimento |
| `npm run build` | Construção dos arquivos para produção |
| `npm run start` | Execução do servidor para produção - (Obrigatório ter realizado o `npm run build`) |
| `npm run test:e2e` | Abrirá o painel do cypress para testes e2e |
| `npm run test:unit` | Executará os testes units |
| `npm run lint` | Executará o eslint no projeto (Padronização de código) |

| COM DOCKER |DESCRIÇÃO |
|-----------| - |
| `docker-compose up dev`  | Construirá a imagem do Dockerfile.dev e deixará rodando o servidor de desenvolvimento |
| `docker-compose up prd`  | Construirá a imagem do Dockerfile.prd e deixará rodando o servidor de produção |

--- 
### Outras implementações e informações:
- Test CI
![alt image test ci](https://i.ibb.co/CwLFp5g/download.png)
- Por não haver um layout mais fiel disponível como Figma, foi baseado apenas em imagens sem dimensões dos componentes
- O layout proposto não possui UX, assim sendo implementado a gosto, pois não havia pontos citados referente a isso, tais como:
    - Animação ao clicar em algum botão
    - Animação do *counter*
    - Animação quando cards aparecer/somem
- Quando o local está fechado não aparecerá nenhuma informação - Deduzido a partir das imagens do layout
- Apesar de ser um teste curto e simples, foi implementado alguns padrões dentro do código apenas para fins de avaliação, tais como:
    - **Camada service**
    - Criação de váriaveis globais no **SCSS**
    - Adição de **prototypes globais** tais como $api e $theme
    - Camada de **gerenciamento de estado** (vuex)
    - Separação dos **plugins** de forma manual e objetiva
    - Criação de **váriaveis de ambiente** (.env)
    - Deploy a partir de uma imagem **docker** (heroku.yml é um exemplo que está em produção)
    - Criação de um componente seguindo padrão de **microfronts** (Componente cards > filter)
    - **Imagens** sepradas dentro da pasta public para fácil acesso usando o path
- Formulário possui um requerimento para haver o **submit**/filtro
- Testes unitários possuem FAKER para melhor realidade
- A aplicação possue VuexPersist, no qual faz um salvamento dos dados no localStorage de forma forçada, sendo dificil até para desenvolvedores remover manualmente
- A aplicação só irá atualizar/pegar os dados da API após 1 dias ou quando não existir dados
--- 
### Regra do filtro
- Premissas iniciais
    -  Qual o tempo mínimo de um treino de forma que a pessoa consiga participar dentro do horário escolhido ? Pesquisando dentro da empresa a média das aulas variam de 45 minutos a 60 minutos, assim adotando 60 minutos ( 1 hora ) como **TOLERÂNCIA** do filtro
    -  Caso haver algum local (independente do dia da semana) que possuir no mínimo 1 correspondência com o filtro selecionado, será mostrado
    -  Lugares fechados só apareção caso o usuário selecionar a opção
    -  Foi adotado 00h como 24h para fins de lógica e cálculo
- Sempre sempre que foi feito um filtro será seguido da seguinte ordem lógica
    -  Pegar todos os locais da API
    -  Todos os objetos que não possuirem a *key* -> *SCHEDULES* não entrará no filtro
    -  Para todos que tiverem *SCHEDULES* será pego o *MIN_VALUE* e o *MAX_VALUE*, removendo todas as letras e pegando apenas os 2 primeiros digitos, ou seja: **06h 30** será pego apenas o **06**
    -  Será verificado se o intervalo selecionado está entre o *MIN_VALUE* e o *MAX_VALUE*, caso não esteja, não será filtrado. lembrando que a tolerância é de 1h, ou seja, uma pessoa que deseja treinar **entre** às 6h e 8h da manhã, não poderá entrar as 8h, pois assim sairá as 9h, ou seja, o valor deve sempre estar entre **MIN_VALUE + 1** e **MAX_VALUE - 1**
    -  Havendo no mínimo 1 regra dentre os dias válidos, será retornado o lugar e mostrado ao usuário


