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
    { 
      name: 'pants', 
      price: 75, 
      image: '/../public/unknown (4).png', 
      pid: '123',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs',
    },
    { 
      name: 'dogshljglkhlkhlkjhlkj', 
      price: 15, 
      image: '/../public/unknown (4).png', 
      pid: '23',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs',
    },
    { 
      name: 'dra', 
      price: 25, 
      image: '/../public/unknown (4).png', 
      pid: '13253223',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    },
    { 
      name: 'dfg', 
      price: 35, 
      image: '/../public/unknown (4).png', 
      pid: '153423423',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    },
    { 
      name: 'dogs', 
      price: 545, 
      image: '/../public/unknown (4).png', 
      pid: '23',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    },
    { 
      name: 'dra', 
      price: 545, 
      image: '/../public/unknown (4).png', 
      pid: '13253223',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    },
    { 
      name: 'dfg', 
      price: 5, 
      image: '/../public/unknown (4).png', 
      pid: '153423423',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    },
    { 
      name: 'dogs', 
      price: 513, 
      image: '/../public/unknown (4).png', 
      pid: '23',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    },
    { 
      name: 'dra', 
      price: 95, 
      image: '/../public/unknown (4).png', 
      pid: '13253223',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    },
    { 
      name: 'dfg', 
      price: 89, 
      image: '/../public/unknown (4).png', 
      pid: '153423423',
      category: 'stuff',
      countInStock: 4,
      description: 'wear them on your legs', 
    }
  ]
}

export default data;