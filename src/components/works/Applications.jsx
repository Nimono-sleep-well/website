import React from 'react'

const applications = [
    {
        name: 'ちぃうご',
        description: 'IntelliJ、VSCodeなどの各種エディタと連携し、タイピングやビルド失敗にリアクションしてくれるかわいいデスクトップ生物。',
        link: '/metaballs'
    },
    {
        name: 'こたつメタバース',
        description: 'こたつに入りながら友達と会話できるメタバースアプリケーション。',
        link: '/waves'
    },
    {
        name:'VCT-UDB',
        description: 'VCT(VALORANT公式大会)の観戦をもっと楽しく。',
        link: '/vct-udb'
    },
    {
        name: 'Ojisan-Responser',
        description: '話しかけると反応してくれるおじさんDiscordBOT。',
        link: '/portfolio'
    },
    {
        name: 'Deutch-Uhr',
        description: '現在時刻をドイツ語でお届け。',
        link: '/clock'
    },
    {
        name: 'ChillAim',
        description: 'Processingにて制作。左右から飛んでくる物体を射抜く3D射的ゲーム。',
        link: '/chillaim'
    },
    {
        name: 'ColorChanger',
        description: 'デザイン考案のお供。色を選ぶと、選んだ色に合う色を提案してくれるアプリケーション。',
        link: '/colorchanger'
    }
]

const Applications = () => {
    return (
        <div>
            <h1 className='text-white'>Works</h1>
        </div>
    )
}

export default Applications