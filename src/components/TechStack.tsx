import React from 'react';
import {motion} from 'framer-motion';
import {
    SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiAngular,
    SiNodedotjs, SiExpress, SiNestjs, SiDjango, SiLaravel,
    SiMongodb, SiPostgresql, SiMysql, SiRedis, SiSupabase,
    SiDocker, SiKubernetes, SiGithubactions, SiJenkins,
    SiTailwindcss, SiFigma, SiAdobexd, SiFramer, SiStorybook
} from 'react-icons/si';

const categories = [
    {
        title: "Frontend",
        color: "from-yellow-500/20 to-orange-500/20",
        borderColor: "group-hover:border-yellow-500/50",
        bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' /%3E%3Cpath d='M8 21h8'/%3E%3Cpath d='M12 17v4'/%3E%3C/svg%3E",
        technologies: [
            {icon: <SiJavascript className="w-10 h-10"/>, name: 'JavaScript', color: '#F7DF1E'},
            {icon: <SiTypescript className="w-10 h-10"/>, name: 'TypeScript', color: '#3178C6'},
            {icon: <SiReact className="w-10 h-10"/>, name: 'React', color: '#61DAFB'},
            {icon: <SiVuedotjs className="w-10 h-10"/>, name: 'Vue.js', color: '#4FC08D'},
            {icon: <SiAngular className="w-10 h-10"/>, name: 'Angular', color: '#DD0031'}
        ]
    },
    {
        title: "Backend",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "group-hover:border-green-500/50",
        bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'%3E%3Crect x='2' y='3' width='20' height='18' rx='2' /%3E%3Cpath d='M6 7h12'/%3E%3Cpath d='M6 11h12'/%3E%3Cpath d='M6 15h12'/%3E%3C/svg%3E",
        technologies: [
            {icon: <SiNodedotjs className="w-10 h-10"/>, name: 'Node.js', color: '#339933'},
            {icon: <SiExpress className="w-10 h-10"/>, name: 'Express', color: '#000000'},
            {icon: <SiNestjs className="w-10 h-10"/>, name: 'NestJS', color: '#E0234E'},
            {icon: <SiDjango className="w-10 h-10"/>, name: 'Django', color: '#092E20'},
            {icon: <SiLaravel className="w-10 h-10"/>, name: 'Laravel', color: '#FF2D20'}
        ]
    },
    {
        title: "Database",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "group-hover:border-blue-500/50",
        bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'%3E%3Cpath d='M4 6c0-1.1 3.6-2 8-2s8 .9 8 2'/%3E%3Cpath d='M20 6v12c0 1.1-3.6 2-8 2s-8-.9-8-2V6'/%3E%3Cpath d='M4 12c0 1.1 3.6 2 8 2s8-.9 8-2'/%3E%3C/svg%3E",
        technologies: [
            {icon: <SiMongodb className="w-10 h-10"/>, name: 'MongoDB', color: '#47A248'},
            {icon: <SiPostgresql className="w-10 h-10"/>, name: 'PostgreSQL', color: '#4169E1'},
            {icon: <SiMysql className="w-10 h-10"/>, name: 'MySQL', color: '#4479A1'},
            {icon: <SiRedis className="w-10 h-10"/>, name: 'Redis', color: '#DC382D'},
            {icon: <SiSupabase className="w-10 h-10"/>, name: 'Supabase', color: '#3ECF8E'}
        ]
    },
    {
        title: "DevOps",
        color: "from-purple-500/20 to-indigo-500/20",
        borderColor: "group-hover:border-purple-500/50",
        bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E",
        technologies: [
            {icon: <SiDocker className="w-10 h-10"/>, name: 'Docker', color: '#2496ED'},
            {icon: <SiKubernetes className="w-10 h-10"/>, name: 'Kubernetes', color: '#326CE5'},
            {icon: <SiGithubactions className="w-10 h-10"/>, name: 'GitHub Actions', color: '#2088FF'},
            {icon: <SiJenkins className="w-10 h-10"/>, name: 'Jenkins', color: '#D24939'}
        ]
    },
    {
        title: "Design",
        color: "from-pink-500/20 to-rose-500/20",
        borderColor: "group-hover:border-pink-500/50",
        bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'%3E%3Cpath d='M12 19l7-7 3 3-7 7-3-3z'/%3E%3Cpath d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'/%3E%3Cpath d='M2 2l7.586 7.586'/%3E%3Ccircle cx='11' cy='11' r='2'/%3E%3C/svg%3E",
        technologies: [
            {icon: <SiTailwindcss className="w-10 h-10"/>, name: 'Tailwind CSS', color: '#06B6D4'},
            {icon: <SiFigma className="w-10 h-10"/>, name: 'Figma', color: '#F24E1E'},
            {icon: <SiAdobexd className="w-10 h-10"/>, name: 'Adobe XD', color: '#FF61F6'},
            {icon: <SiFramer className="w-10 h-10"/>, name: 'Framer', color: '#0055FF'},
            {icon: <SiStorybook className="w-10 h-10"/>, name: 'Storybook', color: '#FF4785'}
        ]
    }
];

const TechStack = () => {
    return (
        <div className="min-h-11 bg-black p-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-light text-transparent bg-clip-text bg-purple-500 mb-4">
                        Tech Stack
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                    variants={{
                        hidden: {opacity: 0},
                        show: {
                            opacity: 1,
                            transition: {staggerChildren: 0.2}
                        }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            variants={{
                                hidden: {opacity: 0, y: 20},
                                show: {opacity: 1, y: 0}
                            }}
                            className="group"
                        >
                            <div className={`relative rounded-2xl bg-[#151B2E] p-6 
                transition-all duration-300 border border-gray-800/50
                hover:border-gray-700/50 overflow-hidden`}
                            >

                                {/* Category Icon */}
                                <div
                                    className="absolute inset-0 opacity-10 group-hover:opacity-60 transition-opacity duration-300 "
                                    style={{
                                        backgroundImage: `url("${category.bgImage}")`,
                                        backgroundSize: '200px',
                                        backgroundPosition: 'right -20px bottom -20px',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>

                                    <div className="grid grid-cols-5 gap-4">
                                        {category.technologies.map((tech, techIndex) => (
                                            <motion.div
                                                key={techIndex}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{delay: techIndex * 0.1}}
                                                whileHover={{scale: 1.1}}
                                                className="flex flex-col items-center"
                                            >
                                                <div
                                                    style={{color: tech.color}}
                                                    className="transition-all duration-300 hover:scale-110"
                                                >
                                                    {tech.icon}
                                                </div>
                                                <p className="mt-2 text-xs font-medium text-gray-400 text-center">
                                                    {tech.name}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 
                  group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}/>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;
