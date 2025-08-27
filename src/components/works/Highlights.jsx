import React, { useState, useEffect } from 'react';
import generateRandomPositions from '../../functions/generateRandomPositions';
import ContentCard from '../ContentCard';

const highlights = [
    {
        name: "Kloudハッカソン#2最優秀賞受賞",
        description: "Kloud主催のハッカソンにチーム「くりすたほしい」として参加、プロダクト「ちぃうご」で最優秀賞を受賞。",
        date: new Date(2023, 5 - 1, 21, 0, 0).toLocaleDateString(),
        image: "",
        color: "#FFD700", // ゴールド
        icon: "🏆",
        category: "受賞歴",
        status: "completed"
    },
    {
        name: "SECCON Beginners 2024 28位",
        description: "SECCON Beginners 2024において、962チーム中28位を記録。",
        date: new Date(2024, 6 - 1, 16, 0, 0).toLocaleDateString(),
        image: "",
        color: "#FF6B6B", // レッド
        icon: "🔐",
        category: "CTF",
        status: "completed"
    },
    {
        name: "Midnight Flag CTF 学生12位",
        description: "Midnight Flag CTFにおいて、学生12位を記録。レンヌにて開催されるFinalに進出。",
        date: new Date(2025, 4 - 1, 14, 0, 0).toLocaleDateString(),
        image: "",
        color: "#4ECDC4", // ティール
        icon: "🚩",
        category: "CTF",
        status: "completed"
    },
    {
        name: "TsukuCTF 2025 学生11位 総合31位",
        description: "TsukuCTFにおいて、882チーム中31位、学生11位を記録。",
        date: new Date(2025, 3 - 1, 15, 0, 0).toLocaleDateString(),
        image: "",
        color: "#45B7D1", // ブルー
        icon: "⚡",
        category: "CTF",
        status: "completed"
    },
    {
        name: "Midnight Flag CTF Final 学生3位",
        description: "レンヌにて行われたMidnight Flag CTF Finalにチーム「m01nm01n」として参加、学生3位を記録。",
        date: new Date(2025, 6 - 1, 21, 0, 0).toLocaleDateString(),
        image: "",
        color: "#96CEB4", // グリーン
        icon: "🥉",
        category: "CTF Final",
        status: "completed"
    },
];

const Highlights = ({ toggleInfo }) => {
    const [randomPosition, setRandomPosition] = useState([]);

    // useEffectを使って適切にステートを更新
    useEffect(() => {
        setRandomPosition(generateRandomPositions(highlights));
    }, []);

    // ハイライトクリック処理
    const handleHighlightClick = (highlight) => {
        console.log('Highlight clicked:', highlight);
        // ここで詳細ページへの遷移やモーダル表示などを実装
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-8 pointer-events-none">
            <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">

                <div className="relative z-20 w-0 h-0" />
                <h1 className='absolute top-0 text-5xl text-white'>HighLights</h1>

                {/* 放射状に展開するワークアイテム */}
                {highlights.map((highlight, index) => {
                    // デフォルト値を設定して安全にアクセス
                    const position = randomPosition[index] || {
                        x: 0,
                        y: 0,
                        size: 64,
                        angle: 0,
                        radius: 250
                    };

                    return (
                        <ContentCard
                            key={highlight.name}
                            work={highlight}
                            position={position}
                            index={index}
                            toggleInfo={toggleInfo}
                            onClick={handleHighlightClick}
                        />
                    );
                })}

                {/* 背景のグローエフェクト */}
                <div className={`
                    absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20
                    transform transition-all duration-1000 blur-xl pointer-events-none
                    ${toggleInfo >= 1 ? 'scale-200 opacity-50' : 'scale-75 opacity-20'}
                `}></div>
            </div>

            {/* アニメーション用のキーフレーム */}
            <style jsx>{`
                @keyframes drawLine {
                    from {
                        opacity: 0;
                        transform: scaleY(0);
                    }
                    to {
                        opacity: 0.8;
                        transform: scaleY(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default Highlights;