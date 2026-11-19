PassoLivre — Global Solution FIAP 2026
A cidade acessível começa com a sua voz.

PassoLivre é um aplicativo mobile desenvolvido com React Native e Expo para facilitar o registro pessoal de barreiras de acessibilidade urbana, como calçadas danificadas, obstáculos nas passagens e ausência de rampas. O projeto foi criado no contexto de CitizenTech, com foco no cidadão, na experiência de uso e na inclusão.
Autoria
- Júlia Aguiar de Moura Moisés — RM 568250
- Instituição: FIAP
- Trabalho: Global Solution — CitizenTech (2026)
Atenção: o enunciado da Global Solution prevê grupos de 2 a 5 integrantes. Adicione os demais nomes completos e RMs, em ordem alfabética, caso ainda não estejam informados.

Problema e público beneficiado
Barreiras físicas em calçadas e espaços públicos dificultam os deslocamentos cotidianos e podem limitar a autonomia e a segurança de cidadãos. O PassoLivre foi pensado especialmente para pessoas com deficiência ou mobilidade reduzida, idosos, usuários de cadeira de rodas, pessoas com carrinhos de bebê e pedestres em geral.

A proposta permite organizar informações sobre obstáculos encontrados no caminho, de forma rápida e com linguagem simples, inclusive em situações de conexão instável.
Solução
O usuário pode identificar um obstáculo, descrevê-lo e salvar um registro no próprio aparelho. Depois, consegue consultar os relatos criados e visualizar exemplos demonstrativos de tipos de barreiras. O projeto representa uma prova de conceito acadêmica: não substitui canais oficiais de solicitação de serviços públicos.
Funcionalidades implementadas
- Início: apresentação da proposta, orientação da jornada e acesso rápido ao registro de barreiras.
- Explorar: listagem de registros e exemplos fictícios identificados como demonstração, com filtros por categoria e acesso aos detalhes.
- Novo registro: seleção da categoria, título, descrição e endereço; seleção opcional de foto da galeria e obtenção opcional da localização, mediante permissão.
- Validação e confirmação: avisos para campos obrigatórios e tela de confirmação do registro salvo.
- Meus registros: consulta e exclusão de registros criados pelo usuário.
- Persistência local: dados e preferências armazenados no dispositivo com AsyncStorage, permitindo consulta dos registros sem conexão após o aplicativo estar instalado e carregado.
- Acessibilidade: opção de texto maior, modo de alto contraste, redução de movimento, rótulos de acessibilidade e feedback textual.
- Motion design: transições suaves de opacidade entre telas, desativadas quando a redução de movimento está ativa.
Jornada do usuário
1. Identificar: ao circular pela cidade, o cidadão encontra uma barreira urbana.
2. Abrir o PassoLivre: na tela inicial, escolhe Registrar barreira.
3. Descrever: seleciona categoria e informa título, detalhes e endereço; pode adicionar foto e localização.
4. Salvar: confirma o registro e recebe uma mensagem de sucesso.
5. Consultar: acessa Meus registros para visualizar o histórico e detalhes.
6. Personalizar: em Acessibilidade, ajusta tamanho do texto, contraste e movimentos conforme sua preferência.
Design, UX e acessibilidade
O projeto adota uma identidade visual com verde-petróleo, áreas de toque confortáveis, cartões organizados e uma hierarquia clara de informações. Textos diretos ajudam o cidadão a entender a próxima ação. Cores e ícones são acompanhados por informações textuais para evitar que o significado dependa apenas de sinais visuais.

O movimento tem função de orientar mudanças de tela, e não apenas decorativa. A preferência de redução de movimento permite diminuir distrações durante o uso.
Tecnologias
- React Native
- Expo (SDK 54, conforme a configuração original do projeto)
- JavaScript
- @react-native-async-storage/async-storage
- expo-image-picker
- expo-location
- @expo/vector-icons
Como executar localmente
Pré-requisitos
- Node.js e npm instalados;
- Expo Go no celular, ou ambiente de emulação Android/iOS;
- conexão à internet para instalar as dependências.
Instalação e execução
Acesse a pasta que contém o arquivo package.json. Se você extraiu o ZIP original, essa pasta é PassoLivre_CODIGO_EXPO/PassoLivre.
npm install
npx expo start
Escaneie o QR Code exibido no terminal usando o Expo Go para iniciar o aplicativo no celular.

Para visualizar no navegador, instale as dependências web compatíveis com seu projeto e execute:
npx expo install react-dom react-native-web
npx expo start --web
Se o terminal indicar falta do preset Babel, instale-o com:
npx expo install babel-preset-expo
Recursos nativos e permissões podem se comportar de maneira diferente na versão web. Para validar o aplicativo mobile, priorize os testes no celular.

Estrutura do projeto
PassoLivre/
├── App.js                 # Telas, navegação e lógica do aplicativo
├── src/
│   └── data.js            # Categorias e registros demonstrativos
├── app.json               # Configurações do Expo
├── babel.config.js        # Configuração do Babel
├── package.json           # Scripts e dependências
├── package-lock.json      # Versões resolvidas das dependências
└── README.md              # Documentação do projeto

Referências:
- ONU Brasil — ODS 11
- IBGE — Censo 2022: características urbanísticas do entorno dos domicílios
PassoLivre | FIAP — Global Solution CitizenTech — 2026
