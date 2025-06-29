import React from 'react'
import SkillCard from './SkillCard'

const skills = [
    {name: 'Python', icon: "/icons8-python.svg", category: 'Language'},
    {name: 'JavaScript', icon: "/icons8-javascript.svg", category: 'Language'},
    {name: 'TypeScript', icon: "/icons8-typescript.svg", category: 'Language'},
    {name: 'C', icon: "/icons8-c.svg", category: 'Language'},
    {name: 'React', icon: "/icons8-react.svg", category: 'Framework'},
    {name: 'Next.js', icon: "/icons8-nextjs.svg", category: 'Framework'},
    {name: 'Tailwind CSS', icon: "/icons8-tailwindcss.svg", category: 'Framework'},
    {name: 'Node.js', icon: "/icons8-nodejs.svg", category: 'Framework'},
    {name: 'GitHub', icon: "/icons8-github.svg", category: 'Tool'},
    {name: 'Figma', icon: "/icons8-figma.svg", category: 'Design'},
    {name: 'Blender', icon: "/icons8-blender-3d.svg", category: 'Design'},
]

const Skills = () => {
    return (
        <div
            className="w-full max-w-2xl bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center relative"
            style={{
                borderTop: '6px solid #9ca3af',
                borderLeft: '6px solid #9ca3af',
                borderBottom: '6px solid #9ca3af',
                borderRight: '6px solid #9ca3af',
                borderTopRightRadius: '0.75rem',
                borderBottomLeftRadius: '0.75rem',
                borderTopLeftRadius: '0',
                borderBottomRightRadius: '0',
                borderColor: 'transparent',
                boxShadow: 'none'
            }}
        >
            {/* 左上カギ括弧 */}
            <div className="absolute left-0 top-0 w-8 h-8 border-t-4 border-l-4 border-gray-400 rounded-tl-lg"></div>
            {/* 右下カギ括弧 */}
            <div className="absolute right-0 bottom-0 w-8 h-8 border-b-4 border-r-4 border-gray-400 rounded-br-lg"></div>
            {/* 見出し */}
            <h2 className="text-2xl font-bold mb-6 z-10">Skills</h2>
            {/* スキル内容 */}
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 z-10">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            category={skill.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills