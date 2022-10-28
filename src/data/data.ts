import {v4 as uuid} from 'uuid'


export type Receitas={
    id:string,
    name:string,
    desc:string,
    image:string,
    category:'Pizza' | 'Hamburguer' | 'Doces',
    author:string
}
export const receitasData:Receitas[]=[
    {
        id:uuid(),
        name:'pizz1',
        desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
        image:'../../src/assets/imgsdata/pizza1.jpg',
        category:'Pizza',
        author:'Daniel Carvalho'

    },
    {
        id:uuid(),
        name:'pizz2',
        desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
       image:'../../src/assets/imgsdata/pizza2.jpg',
       category:'Pizza',
       author:'Jao Murilo'

   },
   {
    id:uuid(),
    name:'pizz3',
    desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/pizza3.jpg',
   category:'Pizza',
   author:'Karina Maciel'

},
{
    id:uuid(),
    name:'Bolo1',
    desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/pizza3.jpg',
   category:'Doces',
   author:'Karina Maciel'

},
{
    id:uuid(),
    name:'bolo2',
    desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/bolo2.jpg',
   category:'Doces',
   author:'Igor Breno'

},
{
    id:uuid(),
    name:'Burguer1',
    desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/burguer1.jpg',
   category:'Hamburguer',
   author:'Karina Brenda'

},
{
    id:uuid(),
    name:'Burguer2',
    desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/burguer2.jpg',
   category:'Hamburguer',
   author:'Igor Breno'

},
{
   id:uuid(),
   name:'pizz1',
   desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/pizza1.jpg',
   category:'Pizza',
   author:'Daniel Carvalho'

},
{
   id:uuid(),
   name:'pizz2',
   desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
  image:'../../src/assets/imgsdata/pizza2.jpg',
  category:'Pizza',
  author:'Jao Murilo'

},
{
id:uuid(),
name:'pizz3',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/pizza3.jpg',
category:'Pizza',
author:'Karina Maciel'

},
{
id:uuid(),
name:'Bolo1',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/pizza3.jpg',
category:'Doces',
author:'Karina Maciel'

},
{
id:uuid(),
name:'bolo2',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/bolo2.jpg',
category:'Doces',
author:'Igor Breno'

},
{
id:uuid(),
name:'Burguer1',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/burguer1.jpg',
category:'Hamburguer',
author:'Karina Brenda'

},
{
id:uuid(),
name:'Burguer2',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/burguer2.jpg',
category:'Hamburguer',
author:'Igor Breno'

},
{
   id:uuid(),
   name:'pizz1',
   desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/pizza1.jpg',
   category:'Pizza',
   author:'Daniel Carvalho'

},
{
   id:uuid(),
   name:'pizz2',
   desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
  image:'../../src/assets/imgsdata/pizza2.jpg',
  category:'Pizza',
  author:'Jao Murilo'

},
{
id:uuid(),
name:'pizz3',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/pizza3.jpg',
category:'Pizza',
author:'Karina Maciel'

},
{
id:uuid(),
name:'Bolo1',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/pizza3.jpg',
category:'Doces',
author:'Karina Maciel'

},
{
id:uuid(),
name:'bolo2',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/bolo2.jpg',
category:'Doces',
author:'Igor Breno'

},
{
id:uuid(),
name:'Burguer1',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/burguer1.jpg',
category:'Hamburguer',
author:'Karina Brenda'

},
{
id:uuid(),
name:'Burguer2',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/burguer2.jpg',
category:'Hamburguer',
author:'Igor Breno'

},
{
   id:uuid(),
   name:'pizz1',
   desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
   image:'../../src/assets/imgsdata/pizza1.jpg',
   category:'Pizza',
   author:'Daniel Carvalho'

},
{
   id:uuid(),
   name:'pizz2',
   desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
  image:'../../src/assets/imgsdata/pizza2.jpg',
  category:'Pizza',
  author:'Jao Murilo'

},
{
id:uuid(),
name:'pizz3',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/pizza3.jpg',
category:'Pizza',
author:'Karina Maciel'

},
{
id:uuid(),
name:'Bolo1',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/pizza3.jpg',
category:'Doces',
author:'Karina Maciel'

},
{
id:uuid(),
name:'bolo2',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/bolo2.jpg',
category:'Doces',
author:'Igor Breno'

},
{
id:uuid(),
name:'Burguer1',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/burguer1.jpg',
category:'Hamburguer',
author:'Karina Brenda'

},
{
id:uuid(),
name:'Burguer2',
desc:`rem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type release of Letraset `,
image:'../../src/assets/imgsdata/burguer2.jpg',
category:'Hamburguer',
author:'Igor Breno'

},


]