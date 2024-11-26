
# Employee Management System

## Descrição
 é possível adicionar, editar e excluir registros de funcionários.

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **React Hook Form**: Biblioteca para gerenciar formulários em React.
- **Zod**: Biblioteca para validação de esquemas e dados.
- **Axios**: Cliente HTTP baseado em promessas para fazer requisições.
- **Styled Components**: Biblioteca para estilização de componentes em React.
- **React Router**: Biblioteca para roteamento em aplicações React.
- **Jest**: Framework de testes em JavaScript.
- **Testing Library**: Conjunto de utilitários para teste de componentes React.

## Instalação

1. Clone o repositório:
    ```sh
    git clone 
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd employee-management-system
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração do Jest

1. Instale as dependências de desenvolvimento para o Jest:
    ```sh
    npm install --save-dev jest jest-environment-jsdom @types/jest @testing-library/react @testing-library/jest-dom ts-jest
    ```
2. Inicialize o Jest:
    ```sh
    npx jest --init
    ```

3. Adicione o seguinte conteúdo no arquivo `setupTests.ts`:
    ```typescript
    import '@testing-library/jest-dom';
    ```

4. Configure o `tsconfig.json` com as seguintes opções:
    ```json
    {
      "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",
        "types": ["reflect-metadata", "@types/jest","@testing-library/jest-dom"],
        "typeRoots": ["./types", "./node_modules/@types"]
      },
      "exclude": ["node_modules", "**/*.spec.ts", "**/*.test.ts"],
      "include": ["./src/**/*.tsx", "./src/**/*.ts", "src", "./*.test.tsx"]
    }
    ```

5. Crie um arquivo `jest.config.ts` com a seguinte configuração:
    ```typescript
    import type { Config } from '@jest/types';

    const config: Config.InitialOptions = {
      roots: ["<rootDir>/src", "<rootDir>/"],
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      clearMocks: true,
      collectCoverage: true,
      coverageDirectory: "coverage",
      coverageProvider: "v8",
      testMatch: ["**/__tests__/**/*.tsx"],
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    };

    export default config;
    ```

## Execução

1. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```
2. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação.

## Executando Testes

1. Para rodar os testes, use o comando:
    ```sh
    npm test
    ```

## Estrutura do Projeto

O projeto segue a seguinte estrutura de pastas:


## Execução

1. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```
2. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação.


## Funcionalidades

### Tela de Login
- Autenticação de usuário com armazenamento de token no `localStorage`.

### Tela Principal (HomeScreen)
- Exibição de uma lista de funcionários.
- Adição de novos funcionários.
- Edição de funcionários existentes.
- Exclusão de funcionários.

### Componentes Principais
- **Header**: Cabeçalho com logo e saudação ao usuário.
- **Table**: Tabela para exibição de funcionários.
- **ModalAddNew**: Modal para adicionar novos funcionários.
- **ModalEdit**: Modal para editar funcionários existentes.
- **PopupDelete**: Popup de confirmação para exclusão de funcionários.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch com as suas alterações:
    ```sh
    git checkout -b minha-feature
    ```
3. Commit suas alterações:
    ```sh
    git commit -m 'Minha nova feature'
    ```
4. Envie para a branch original:
    ```sh
    git push origin minha-feature
    ```
5. Crie um Pull Request.
