import React from 'react'

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const birthday = `2006-11-19`;
const age = year - parseInt(birthday.slice(0, 4)) - (month < parseInt(birthday.slice(5, 7)) || (month === parseInt(birthday.slice(5, 7)) && day < parseInt(birthday.slice(8, 10))) ? 1 : 0);

const Introduce_myself = () => {
    return (
        <div className='w-full bg-white flex flex-col items-center pb-40'>
            <img
                src="/my_icon.png"
                alt="Nimonoのアイコン"
                className="w-32 h-32 rounded-full mb-6 shadow-lg"
            />
            <h1 className='text-black text-5xl font-bold mb-4'>
                Ryosei Morita
            </h1>
            <p className='text-gray-700 text-lg max-w-xl text-center'>
                千葉県生まれの{age}歳<br />
                木更津工業高等専門学校 情報工学科所属<br />
                CTFチームm01nm01n所属<br />
                興味のある分野はWeb開発、サイバーセキュリティ、AIなどなど...<br />
            </p>
        </div>
    )
}

export default Introduce_myself