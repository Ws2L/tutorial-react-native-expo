# Comandos
- npm init // Cria o package.json para iniciar o projeto node

# Comandos úteis
- npx create-expo-app@latest --template // cria o projeto React Native com Expo

# Comandos Expo
- npm start (roda o projeto no expo)
- npx expo start --tunnel (so em situações onde o dispositivo não está conectado na mesma rede do computador)

# Comandos Git
- git config --global user.name
- git config --global user.email

quais os tipos de navegação posso usar com expo router
- stack (empilhar telas uma em cima da outra)
- tabs opções ficam na parte inferior do dispositivo
- drower abre uma seção na esquerda da página
- modal

*Pontos que sao importantes para a prova*

#useState e useEffect - react-core
#view, text e stylesheet - react-native

*React-native*
- programar em uma unica linguagem que é o javascript e construir para ios e android
- apenas desenvolvido no ambiente do node.js mas o resultado final vai gerar um build para cada modelo de dispositivo não sendo dependente do node
- framework do desenvolvimento mobile é o expo
- No MVC o react native faz parte da camada View
- useState useEffect estao na biblioteca
- react native biblioteca que disponibiliza recursos para desenvolver para os dispositivos

*Componentes*
- componentes sao uma funções que representam uma parte da interface e servem para otimizar a manutenção e organização do projeto
- criar um arquivo js e cria uma funçao js e a funcao vai retornar a apresentaçã do componente
- "function"
- return - o que mostra na tela
- para estilizar um componente usa se stylesheet derivado do react-native que usa o "css-in-js"(é parecido mas não tem todos os estilos do css padrao)
- nem todos os estilos funcionam em todos os dispositivos
- sao informaçoes e/ou caracteristicas do componente para diferenciar um do outro

*navegação*
- expo router tras as telas
- stack cria a pilha das telas
- tabs
- drower
- modal
- layout consegue definir a estrategia de telas que vai ser ultilizada

*Hooks*
- podem ser adquiridos do react-core ou outras bibliotecas com useRouter do expo-router e podemos desenvolver tambem
- servem pra adicionar alguma funcionalidade importante para os codigos
- todos começam com use e precisam ser usados antes do return e dentro dos componentes

*useState*
- função usada para controlar os estado do componentes

*useEffect*
- função que dispara outra função quando o componente é exibido ou alterado de alguma forma

*Prop Drilling*
- quando um componente filho precisa atualizar um estado que esta no pai, passando os dois estados com propriedade

*Estados globais com Zustand*
- 