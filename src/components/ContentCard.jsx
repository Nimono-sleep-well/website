import React, { useState } from 'react';

const ContentCard = ({ work, position, index, toggleInfo, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const iconSize = Math.max(position.size * 0.4, 16);

    return (
        <>
            <div
                className={`
                    absolute rounded-full flex items-center justify-center
                    cursor-pointer shadow-xl border-3 border-white/30 backdrop-blur-sm
                    transform transition-all duration-700 ease-out hover:scale-125
                    ${toggleInfo >= 1
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none scale-0'
                    }
                `}
                style={{
                    width: `${position.size}px`,
                    height: `${position.size}px`,
                    backgroundColor: work.color,
                    fontSize: `${iconSize}px`,
                    transform: toggleInfo >= 1
                        ? `translate(${position.x}px, ${position.y}px) scale(1)`
                        : 'translate(0px, 0px) scale(0)',
                    transitionDelay: toggleInfo >= 1 ? `${index * 50}ms` : '0ms'
                }}
                title={work.name || work.title}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => onClick && onClick(work)}
            >
                <span className="drop-shadow-lg">{work.icon}</span>
            </div>

            {/* 詳細情報カード - ホバー時に表示 */}
            {isHovered && toggleInfo >= 1 && (
                <div
                    className="absolute z-40 bg-black/90 text-white p-4 rounded-xl shadow-2xl border border-white/20 backdrop-blur-md min-w-64 max-w-80"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(${position.x > 0 ? position.x - 300 : position.x + 100}px, ${position.y - 60}px)`,
                        animation: 'fadeInDetail 0.2s ease-out both'
                    }}
                >
                    {/* ヘッダー */}
                    <div className="flex items-center gap-3 mb-3">
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                            style={{ backgroundColor: work.color }}
                        >
                            {work.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white">{work.name || work.title}</h3>
                            <p className="text-xs text-gray-400">{work.category}</p>
                        </div>
                    </div>

                    {/* 説明文 */}
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                        {work.description}
                    </p>

                    {/* 技術スタック（もしあれば） */}
                    {work.technologies && (
                        <div className="mb-3">
                            <p className="text-xs text-gray-400 mb-2">技術スタック:</p>
                            <div className="flex flex-wrap gap-1">
                                {work.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-white/10 rounded text-xs text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 日付（もしあれば） */}
                    {work.date && (
                        <div className="mb-3">
                            <p className="text-xs text-gray-400">日付: {work.date}</p>
                        </div>
                    )}

                    {/* ステータスとリンク */}
                    <div className="flex justify-between items-center">
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${work.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                                work.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-300' :
                                    'bg-blue-500/20 text-blue-300'
                                }`}
                        >
                            {work.status === 'completed' ? '完了' :
                                work.status === 'in-progress' ? '進行中' :
                                    work.status ? '企画中' : '実績'}
                        </span>

                        <div className="flex gap-2">
                            {work.demoUrl && work.demoUrl !== "#" && (
                                <button className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded hover:bg-cyan-500/30 transition-colors">
                                    デモ
                                </button>
                            )}
                            {work.githubUrl && work.githubUrl !== "#" && (
                                <button className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded hover:bg-gray-500/30 transition-colors">
                                    GitHub
                                </button>
                            )}
                        </div>
                    </div>

                    {/* 矢印（要素の方向に応じて配置） */}
                    <div
                        className="absolute w-3 h-3 bg-black/90 border-r border-b border-white/20 rotate-45"
                        style={{
                            [position.x > 0 ? 'right' : 'left']: '-6px',
                            top: '50%',
                            transform: `translateY(-50%) ${position.x > 0 ? 'rotate(45deg)' : 'rotate(-135deg)'}`
                        }}
                    />
                </div>
            )}

            {/* アニメーション用のキーフレーム */}
            <style jsx>{`
                @keyframes fadeInDetail {
                    from {
                        opacity: 0;
                        transform: translateY(10px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </>
    );
};

export default ContentCard;