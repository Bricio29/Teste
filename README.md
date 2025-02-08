# Portfolio BricioDev
Olá pessoal!
Deixe-me apresentar, sou Fabrício Weslley. Nesta ocasião, gostaria de compartilhar o projeto de site de portfólio que desenvolvi.

**Tecnologias Utilizadas:**
- ReactJS
- Tailwind CSS
- AOS
- Firebase
- Framer Motion
- Lucide
- Material UI
- SweetAlert2

**Website Link:**
[https://www.eki.my.id/](https://www.eki.my.id/)

Agradeceríamos se você decidisse usar este projeto. Por favor inclua crédito ao usá-lo. Obrigado! 🙏

---

# Tutorial: Executando o Projeto

Aqui está um tutorial simples para executar este projeto.

## Pré-requisitos

Certifique-se de já ter instalado:
**Node.js**

---

## Etapas para executar o projeto

1. **Baixe este projeto:**

   ```bash
   git clone https://github.com/EkiZR/Portofolio_V5.git
   ```

2. **Instale todas as dependências:**

   ```bash
   npm install
   ```
   Ou use:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Rode o projeto:**

   ```bash
   npm run dev
   ```

4. **Abra no navegador:**

   Acesse a aplicação através do link exibido em seu terminal. 

---

## Criando uma compilação de produção

Para criar uma versão pronta para produção:

1. Execute o comando de construção:

   ```bash
   npm run build
   ```

2. Os arquivos de construção serão salvos na pasta `dist`. Você pode enviar esta pasta para o seu servidor de hospedagem.

---

## Notas

Se você encontrar problemas durante a execução do projeto, certifique-se de que:
- O Node.js está instalado corretamente.
- Você está no diretório correto do projeto.
- Todas as dependências são instaladas sem erros.

---

## Firebase Configuração

Para configurar o Firebase para este projeto, siga estas etapas:

1. **Adicione o Firebase ao projeto:**
   - Acesse o [Firebase Console](https://console.firebase.google.com/).
   - Crie um novo projeto ou use um existente.

2. **Ativar banco de dados Firestore:**
   - Crie um banco de dados.

3. **Vá para Configurações do Projeto:**
   - Clique no ícone de configurações.
   - Copie a configuração do Firebase.

4. **Acesse Regras:**
   - Defina as regras como `true`.

5. **Ajuste a estrutura da coleção:**
   - Configure as coleções conforme mostrado nas imagens a seguir:
   ![Collection Structure Example 1](https://github.com/user-attachments/assets/38580122-08a4-4499-a8fd-0f253652a239)
   ![Collection Structure Example 2](https://github.com/user-attachments/assets/d563d7ad-f1ab-46ff-8185-640dcebd0363)

6. **Atualize os arquivos `firebase.js` e `firebase-comment.js`:**
   - Substitua o conteúdo `firebaseConfig` pela configuração do Firebase.