# We want to create an easy backend UI with Directus as CMS and a blog with Next JS

## First : Let's create our Directus app

### 🚀 Part A: Create a new project with Directus 9
#### Step 1 : `npx create-directus-project <my-project>`

#### Step 2 : Connect your database

Directus need to be connected to a database to be installed.
So, if you have one, just add your informations, if you don't have one and want just to start quickly your project, use SQLite as database.
You can choose random mail and password for a test project.

#### Step 2 : Register the first administrator user

Once the installation is complete, your browser automatically opens a new tab.
(if it doesn't or if you want to re-open the login tab `yarn run develop`)
By completing the form, you create your own account. Once done, you become the first administator user of this Strapi application. Welcome aboard, commander!
You now have access to the admin panel (opens new window):

Now your strapi app is ready to use !

### 🛠 Part B: Build your content
#### Step 1: Create collection types with the Content-Types Builder
- Go to Plugins > Content-Types Builder (opens new window)in the main navigation.
- Create a table with Display name
- Choose every field you need for your table
- Switch to **Advanced Settings** tab if you need to custom your field like "Required" or "Unique field" for example
- Finally, click **Save** and wait for Strapi to restart

Create every Collection types you need for your application

#### Step 2: Use the collection types to create new entries
- Go to Collection types > <My_Collection> (opens new window)in the main navigation.
- Click on Add New <Collection_Element>.
- You are creating a new element (article for example)
- Click Save and then Publish.

You can set-up a relation filed wich is to make relation beetween your collections types.

#### Step 3: Set Roles & Permissions
We want to be able to get our data, so the next step is for handle our endpoints and our CRUD :
- Click on General > Settings at the bottom of the main navigation.
- Under Users & Permissions Plugin, choose Roles (opens new window).
- Click the Public role.
- Scroll down under Permissions.
- In the Application tab, find your <Collection_Type>.
- Click the checkboxes next to find and findone.
- Repeat with every collection you need to have access: click the checkboxes next to find and findone.
- Finally, click Save.

#### Step 4: Publish the content
Don't forget to publish your content !
By default, any content you create is saved as a draft.

#### Step 5: Use the API
Now you can use for example Postman or Insomnia or your front-end application to get some data !
your first end point will be at [http://localhost:1337/<collection>]
and gives you the list of all content in your table.

The response will be in Json.

Have fun !


-------------------------------------------------------------------------------------------
## First : Let's create our Next JS app
doc here : [https://nextjs.org/docs/getting-started]

### 🚀 Part A: Create a new project with Next JS
- `npx create-next-app <my-project>`
- `cd my-blog-with-next`
- `yarn run dev`
- Visit ``http://localhost:3000`` to view your application.

### Part Optionnal: If you want to use Tailwind CSS
src : [https://tailwindcss.com/docs/guides/nextjs]

- `yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest`

- `npx tailwindcss init -p`

in **tailwind.config.js :**
```javascript
module.exports = {
  mode: 'jit',
	purge : ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

in **./styles/globals.css :**
```javascript
@tailwind base ;
@tailwind components ;
@tailwind utilities ;
```

- in directory **./styles/** delete non using stuff

- in file **./pages /index.js**
Delete Head and Image and non using stuff

or copy/past this :
```javascript
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lets build something cool</h1>
      
    </div>
  )
}
```