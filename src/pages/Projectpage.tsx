import React, { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';

const projects = [
    {
        title: "E-commerce Platform",
        description: "A modern e-commerce solution built with Next.js and Stripe",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Web Development",
        year: "2023"
    },
    {
        title: "Portfolio Website",
        description: "A minimalist portfolio for a photography artist",
        image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "UI Design",
        year: "2023"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard with real-time data visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Web Development",
        year: "2022"
    },
    {
        title: "Mobile Banking App",
        description: "Secure and intuitive mobile banking experience",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Mobile App",
        year: "2023"
    },
    {
        title: "Restaurant Booking System",
        description: "Online reservation system for high-end restaurants",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Web Development",
        year: "2022"
    },
    {
        title: "Fitness Tracking App",
        description: "Personal workout and nutrition tracking application",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Mobile App",
        year: "2023"
    }
];

const categories = ["All", "Web Development", "UI Design", "Mobile App"];
const years = ["All", "2023", "2022"];

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
        const matchesYear = selectedYear === "All" || project.year === selectedYear;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesYear && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#111111] text-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <h1 className="text-7xl font-light mb-6">Projects</h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Explore my latest work and creative endeavors. Each project represents a unique
                        challenge and innovative solution.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full bg-[#222] rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <select
                            className="bg-[#222] rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        <select
                            className="bg-[#222] rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-medium mb-1">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.category}</p>
                                    </div>
                                    <span className="text-sm text-gray-400">{project.year}</span>
                                </div>
                                <p className="text-gray-400">{project.description}</p>
                                <button className="flex items-center gap-2 text-sm hover:text-gray-400 transition-colors">
                                    View Project <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;