import bcrypt from 'bcryptjs'

const data = { 
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('password'),
      isAdmin: true
    },
    {
      name: 'example',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    }
  ],
  products: [
    { name: 'pants', price: 5, imagesrc: '/../public/unknown (4).png', pid: '123' },
    { name: 'dogshljglkhlkhlkjhlkj', price: 5, imagesrc: '/../public/unknown (4).png', pid: '23' },
    { name: 'dra', price: 5, imagesrc: '/../public/unknown (4).png', pid: '13253223' },
    { name: 'dfg', price: 5, imagesrc: '/../public/unknown (4).png', pid: '153423423' },
    { name: 'dogs', price: 5, imagesrc: '/../public/unknown (4).png', pid: '23' },
    { name: 'dra', price: 5, imagesrc: '/../public/unknown (4).png', pid: '13253223' },
    { name: 'dfg', price: 5, imagesrc: '/../public/unknown (4).png', pid: '153423423' },
    { name: 'dogs', price: 5, imagesrc: '/../public/unknown (4).png', pid: '23' },
    { name: 'dra', price: 5, imagesrc: '/../public/unknown (4).png', pid: '13253223' },
    { name: 'dfg', price: 5, imagesrc: '/../public/unknown (4).png', pid: '153423423' }]
}

export default data;