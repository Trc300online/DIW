import './index.css'

const sections = [
  { id: "intro", title: "Introducció" },
  { id: "install", title: "Instal·lació" },
  { id: "config", title: "Configuració" },
  { id: "usage", title: "Ús bàsic" },
  { id: "components", title: "Components" },
  { id: "api", title: "API Reference" },
]

const codeExample = `@import "tailwindcss";

@theme {
  --color-brand: #6366F1;
}

@layer base {
  body {
    font-family: system-ui;
  }
}`

const tableData = [
  { prop: "color", type: "string", default: "primary", description: "Color del component" },
  { prop: "size", type: "sm | md | lg", default: "md", description: "Mida del component" },
  { prop: "disabled", type: "boolean", default: "false", description: "Deshabilita el component" },
  { prop: "onClick", type: "function", default: "-", description: "Funció a executar al clic" },
]

function App() {
  return (
    <div className='body'>
      <p className='h1'>Comença a crear la teva pàgina de documentació aquí!</p>
      <p className='h2'>Comença a crear la teva pàgina de documentació aquí!</p>
      <p className='h3'>Comença a crear la teva pàgina de documentació aquí!</p>
      <p className='a'>Comença a crear la teva pàgina de documentació aquí!</p>
      <p className='code'>Comença a crear la teva pàgina de documentació aquí!</p>
      <p className='pre'>Comença a crear la teva pàgina de documentació aquí!</p>
      <table className='table'>
        <tr>
          <th className='th'>asdfasdf</th>
          <th className='th'>asd</th>
        </tr>
        <tr>
          <td className='td'>assdfffsdf</td>
          <td className='td'>alkjhlkj</td>
        </tr>
      </table>
      <blockquote className='blockquote'>sfasdfasdf asdf  asdfasdfasdf asdf asf</blockquote>
      <hr className='hr'/>
      <hr className='hr'/>
      <hr className='hr'/>

      <button className='btn'>asdf</button>
      <button className='btn-primary'>asdf</button>
      <button className='btn-secondary'>asdf</button>
      <p className='badge'>asdffasdasdfasfasff</p>
      <a href="#" className='nav-link'>asdfsadf</a>
      <a href="#" className='nav-link-active'>asdfsadf</a>
      <ul className='ul'>
        <li>asdf</li>
        <li>asdf</li>
        <li>asdf</li>
        <li>asdf</li>
      </ul>
      <ol className='ol'>
        <li>asdf</li>
        <li>asdf</li>
        <li>asdf</li>
        <li>asdf</li>
      </ol>

      <p className='alert'>asdfhklasjdfhlsjkadfhaskjdfhaskljfhaskjldfhsaf</p>
      <p className='alert-info'>asdfhklasjdfhlsjkadfhaskjdfhaskljfhaskjldfhsaf</p>
      <p className='alert-warning'>asdfhklasjdfhlsjkadfhaskjdfhaskljfhaskjldfhsaf</p>
      <p className='alert-error'>asdfhklasjdfhlsjkadfhaskjdfhaskljfhaskjldfhsaf</p>      
      <p className='alert-success'>asdfhklasjdfhlsjkadfhaskjdfhaskljfhaskjldfhsaf</p>
      <p className='card'>asdfhklasjdfhlsjkadfhaskjdfhaskljfhaskjldfhsaf</p>
      <p className='p'>Comença a crear la teva pàgina de documentació aquí! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quas sapiente perferendis hic voluptates culpa quibusdam. Vel unde, nisi officiis dignissimos mollitia repudiandae autem magnam. Error fugit minus rerum obcaecati.</p>
      <p className='p'>Comença a crear la teva pàgina de documentació aquí! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, laudantium fugiat at aspernatur explicabo a ut, nam pariatur repellat inventore perspiciatis voluptates aut dolores delectus esse sunt ducimus veniam harum.</p>
    </div>
  )
}

export default App

