import React from 'react'

const categoryColors = {
    Language: 'bg-blue-100',
    Framework: 'bg-green-100',
    Tool: 'bg-gray-100',
    Design: 'bg-pink-100',
}

const SkillCard = ({ name, icon, category }) => {
    return (
        <div className={`flex items-center gap-2 p-3 rounded-lg shadow ${categoryColors[category] || 'bg-white'}`}>
            <img src={icon} alt={name} className="w-8 h-8" />
            <div>
                <div className="font-bold">{name}</div>
                <div className="text-xs text-gray-500">{category}</div>
            </div>
        </div>
    )
}

export default SkillCard