'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Technology', 'Design', 'Business', 'Lifestyle'];
const blogs = [
  { id: 1, title: 'The Future of AI', category: 'Technology' },
  { id: 2, title: 'Minimalist Design Principles', category: 'Design' },
  { id: 3, title: 'Starting a Startup', category: 'Business' },
  { id: 4, title: 'Work-Life Balance Tips', category: 'Lifestyle' },
  { id: 5, title: 'Advancements in Web Development', category: 'Technology' },
];

export default function BlogCategory() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Categories</h1>
      
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <motion.div 
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
      >
        {filteredBlogs.map((blog) => (
          <Card key={blog.id} className="p-4 hover:shadow-xl transition-shadow">
            <CardContent>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-500">{blog.category}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
