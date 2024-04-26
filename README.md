This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).





## Getting Started

First,  install all dependencies

```shell
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Then, you will see error 

```shell
Import trace for requested module:
./node_modules/react-chatbotify/dist/react-chatbotify.css
./node_modules/react-chatbotify/dist/index.js
 ⨯ ./node_modules/react-chatbotify/dist/react-chatbotify.css
Global CSS cannot be imported from within node_modules.
Read more: https://nextjs.org/docs/messages/css-npm
Location: node_modules/react-chatbotify/dist/index.js
```



file changes made since creating the Next.js application:

+ ChatBot component is placed in the home page in  `src/pages/index.tsx` (lazy loading is applied)

+ `react-chatbotify.css` has been copied into `src/pages` and injected into project in `src/pages/_app.tsx`



Next step:

+ Comment out the importing of global css lines within `index` files in react-chatbotify within `node_modules` directory, but same error still popping out

