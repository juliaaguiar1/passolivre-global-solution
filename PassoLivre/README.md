# PassoLivre | Global Solution - CitizenTech

> **A cidade acessível começa com a sua voz.**

Aplicativo mobile acadêmico em **React Native + Expo** para registrar barreiras de acessibilidade nas cidades. O foco está no cidadão que encontra calçadas quebradas, obstáculos ou rampas ausentes em seu trajeto.

## Integrantes

> **PREENCHER ANTES DA ENTREGA:** nomes completos e RM em ordem alfabética.

## O que funciona

- Navegação por quatro abas: **Início, Explorar, Registros, Ajustes**.
- Cadastro de barreira com categoria, título, descrição, endereço, foto opcional e localização opcional com consentimento.
- Validação dos dados do formulário e confirmação de salvamento.
- Visualização, filtragem e exclusão dos registros.
- Persistência local via AsyncStorage para consulta offline, inclusive após reiniciar o app.
- Três exemplos **fictícios**, sinalizados como **DEMO**.
- Acessibilidade: suporte ao escalonamento de fontes, ajuste adicional de texto grande, alto contraste, rótulos para leitores de tela, área de toque confortável, feedback textual e redução de movimento.
- Motion design: transição curta de opacidade ao mudar de tela; desativação manual ou conforme preferência de redução de movimento do sistema.

## Limites transparentes do protótipo

- **Não envia reclamações** à prefeitura ou a qualquer serviço externo.
- **Não há sincronização**, banco de dados remoto, mapa em tempo real ou acompanhamento oficial de chamados.
- **Não há compartilhamento comunitário real**; os exemplos são ilustrações fictícias.
- Fotos utilizam URI local de galeria e podem perder acesso se movidas/excluídas pelo sistema; o app não faz cópia persistente da imagem.
- Sem backend, notificações oficiais ou cadastro/login.

## Requisitos

- Node.js LTS e npm
- Expo Go compatível com o SDK do projeto, em Android ou iOS; ou emulador configurado
- Internet apenas para baixar dependências e iniciar ferramentas Expo. **O uso dos registros salvos é offline.**

## Como executar

```bash
npm install
npx expo start
```

Leia o QR code no Expo Go. Se houver incompatibilidade de dependências, execute `npx expo install --fix`, e confirme a versão instalada do Expo Go.

## Jornada principal

1. Usuário abre **Início** e entende a proposta.
2. Seleciona **Registrar barreira**.
3. Define categoria, título, descrição e endereço; pode optar por foto/GPS.
4. Clica **Salvar registro neste aparelho**.
5. Recebe confirmação e acessa **Ver registro**.
6. Consulta depois em **Registros** e pode excluir o registro.

## Testes manuais sugeridos

- Criar registro completo; fechar e reabrir o app; confirmar persistência.
- Criar registro com campos vazios e verificar as mensagens de validação.
- Negar acesso à localização e confirmar que o cadastro manual continua disponível.
- Negar acesso à galeria e confirmar que foto é opcional.
- Filtrar categorias e abrir detalhes dos exemplos DEMO.
- Ativar alto contraste, texto maior e redução de movimento.
- Testar VoiceOver/TalkBack; navegação por toque; fonte ampliada do sistema.
- Colocar o dispositivo em modo avião **após instalar e carregar o app**; verificar leitura/criação local.

## Design e impacto

- Cor principal verde-petróleo, tipografia nativa, cartões com hierarquia, feedback de seleção por cor **e contorno**.
- A interface usa linguagem simples, modo de alto contraste e indicações textuais além dos ícones.
- **ODS 11, meta 11.7:** cidades e espaços públicos acessíveis e inclusivos.
- **IBGE, Censo 2022:** 68,8% dos moradores de áreas urbanas moravam em vias sem rampas para cadeirantes.

Fontes: [IBGE](https://educa.ibge.gov.br/jovens/materias-especiais/22746-censo-2022-revela-que-88-5-dos-moradores-moravam-em-vias-pavimentadas.html) e [ONU Brasil](https://brasil.un.org/pt-br/sdgs/11).

## Entrega

- **GitHub público:** PREENCHER LINK DEPOIS DA PUBLICAÇÃO.
- **Vídeo pitch (2 a 3 min):** PREENCHER LINK DEPOIS DA PUBLICAÇÃO.
- Não envie `node_modules` ao GitHub; mantenha `package.json`, fontes e README.

## Créditos

Desenvolvimento acadêmico - Global Solution CitizenTech, 2026.
