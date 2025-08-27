import React, { useState, useEffect } from 'react';
import generateRandomPositions from '../../functions/generateRandomPositions';
import ContentCard from '../ContentCard';

const products = [
    {
        name: 'ちぃうご',
        description: 'IntelliJ、VSCodeなどの各種エディタと連携し、タイピングやビルド失敗にリアクションしてくれるかわいいデスクトップ生物。Kloudハッカソン#2最優秀賞',
        date: new Date().toLocaleDateString(),
        image: "",
        color: "#3A29FF",
        icon: "🎮",
        demoUrl: "#",
        githubUrl: "#",
        status: "completed",
        category: "デスクトップアプリ",
        technologies: ["Kotlin", "compose"]
    },
    {
        name: 'こたつメタバース',
        description: 'こたつに入りながら友達と会話できるメタバースアプリケーション。',
        date: new Date().toLocaleDateString(),
        image: "",
        color: "#D747FF",
        icon: "🏠",
        demoUrl: "#",
        githubUrl: "#",
        status: "completed",
        category: "Webアプリ",
        technologies: ["React", "Tailwindcss", "firestore"]
    },
    {
        name: 'VCT-UDB',
        description: 'eSports観戦をもっと楽しく。',
        date: new Date().toLocaleDateString(),
        image: "",
        color: "#47B9FF",
        icon: "🎯",
        demoUrl: "#",
        githubUrl: "#",
        status: "completed",
        category: "Discord BOT",
        technologies: ["Python", "Discord.py"]
    },
    {
        name: 'Ojisan-Responser',
        description: '話しかけると反応してくれるおじさんDiscordBOT。',
        date: new Date().toLocaleDateString(),
        image: "",
        color: "#FF3232",
        icon: "👨",
        demoUrl: "#",
        githubUrl: "#",
        status: "completed",
        category: "Discord Bot",
        technologies: ["Python", "Discord.py"]
    },
    {
        name: 'Deutch-Uhr',
        description: '現在時刻をドイツ語でお届け。',
        date: new Date().toLocaleDateString(),
        image: "",
        color: "#FF94B4",
        icon: "🕐",
        demoUrl: "#",
        githubUrl: "#",
        status: "completed",
        category: "ユーティリティ",
        technologies: ["Python", "Tkinter"]
    },
    {
        name: 'ChillAim',
        description: 'Processingにて制作。左右から飛んでくる物体を射抜く3D射的ゲーム。',
        date: new Date().toLocaleDateString(),
        image: "",
        color: "#FB8E6A",
        icon: "🎮",
        demoUrl: "#",
        githubUrl: "#",
        status: "completed",
        category: "ゲーム",
        technologies: ["Processing", "Java", "3D Graphics"]
    },
    {
        name: 'ColorChanger',
        description: 'デザイン考案のお供。色を選ぶと、選んだ色に合う色を提案してくれるアプリケーション。',
        date: new Date().toLocaleDateString(),
        image: "",
        color: "#FF47F0",
        icon: "🎨",
        demoUrl: "#",
        githubUrl: "#",
        status: "completed",
        category: "デスクトップアプリ",
        technologies: ["Python", "Tkinter"]
    }
];

const Products = ({ toggleInfo }) => {
    const [randomPosition, setRandomPosition] = useState([]);

    // useEffectを使って適切にステートを更新
    useEffect(() => {
        setRandomPosition(generateRandomPositions(products));
    }, []);

    // プロダクトクリック処理
    const handleProductClick = (product) => {
        console.log('Product clicked:', product);
        // ここで詳細ページへの遷移やモーダル表示などを実装
        if (product.demoUrl && product.demoUrl !== '#') {
            window.open(product.demoUrl, '_blank');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-8 pointer-events-none">
            <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">

                <div className="relative z-20 w-0 h-0" />
                <h1 className='absolute top-0 text-5xl text-white'>Products</h1>

                {/* 放射状に展開するワークアイテム */}
                {products.map((product, index) => {
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
                            key={product.name}
                            work={product}
                            position={position}
                            index={index}
                            toggleInfo={toggleInfo}
                            onClick={handleProductClick}
                        />
                    );
                })}

                {/* 背景のグローエフェクト */}
                <div className={`
                    absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20
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

export default Products;