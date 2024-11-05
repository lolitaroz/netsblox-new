import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, ChevronRight } from 'lucide-react'

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = ['All', 'Games', 'Simulations', 'Art', 'Music', 'Science']

    const projects = [
        { title: 'Space Explorer', category: 'Games', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Ecosystem Simulator', category: 'Simulations', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Fractal Generator', category: 'Art', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Music Visualizer', category: 'Music', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Physics Lab', category: 'Science', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Platformer Game', category: 'Games', image: '/placeholder.svg?height=200&width=300' },
    ]

    const filteredProjects = projects.filter(project =>
        (selectedCategory === 'All' || project.category === selectedCategory) &&
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600">
                Explore Projects
            </h1>

            <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="flex items-center gap-2">
                    <Filter className="text-gray-600 dark:text-gray-400" size={20} />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="py-2 px-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Category: {project.category}</p>
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center transition-colors duration-300">
                                View Project <ChevronRight className="ml-2" size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}