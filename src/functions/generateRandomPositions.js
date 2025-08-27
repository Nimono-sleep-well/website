const generateRandomPositions = (items) => {
    const positions = [];
    const maxAttempts = 100; // 最大試行回数

    for (let i = 0; i < items.length; i++) {
        let position = null;
        let attempts = 0;

        while (!position && attempts < maxAttempts) {
            // ランダムな半径（120-300px）とサイズ（40-80px）を生成
            const radius = Math.random() * 180 + 120;
            const angle = Math.random() * 360;
            const radian = (angle * Math.PI) / 180;
            const size = Math.random() * 80 + 40; // 40-80px

            const candidatePosition = {
                x: Math.cos(radian) * radius,
                y: Math.sin(radian) * radius,
                size: size,
                radius: radius,
                angle: angle
            };

            // 他の要素との衝突をチェック
            let isOverlapping = false;
            for (const existingPos of positions) {
                const distance = Math.sqrt(
                    Math.pow(candidatePosition.x - existingPos.x, 2) +
                    Math.pow(candidatePosition.y - existingPos.y, 2)
                );
                const minDistance = (candidatePosition.size + existingPos.size) / 2 + 20; // 20pxのマージン

                if (distance < minDistance) {
                    isOverlapping = true;
                    break;
                }
            }

            if (!isOverlapping) {
                position = candidatePosition;
            }

            attempts++;
        }

        // 重複回避に失敗した場合のフォールバック
        if (!position) {
            const fallbackAngle = (i * 360) / items.length + Math.random() * 30 - 15;
            const fallbackRadius = 180 + Math.random() * 60;
            const fallbackRadian = (fallbackAngle * Math.PI) / 180;

            position = {
                x: Math.cos(fallbackRadian) * fallbackRadius,
                y: Math.sin(fallbackRadian) * fallbackRadius,
                size: Math.random() * 80 + 80,
                radius: fallbackRadius,
                angle: fallbackAngle
            };
        }

        positions.push(position);
    }

    return positions;
};

export default generateRandomPositions