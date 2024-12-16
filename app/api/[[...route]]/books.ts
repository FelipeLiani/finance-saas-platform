// books.ts
import { Hono } from 'hono'
import { BookDashed } from 'lucide-react'

const books = new Hono()

books.get('/', (c) => c.json('list books'))
books.post('/', (c) => c.json('create a book', 201))
books.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default books