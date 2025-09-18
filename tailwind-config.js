// tailwind-config.js
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'ui-sans-serif', 'system-ui'],
                logo: ['Lato', 'sans-serif'],
            },
            fontSize: {
                h1: ['36px', { lineHeight: '44px', fontWeight: '600' }],
                h2: ['28px', { lineHeight: '36px', fontWeight: '600' }],
                h3: ['22px', { lineHeight: '30px', fontWeight: '500' }],
                body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
                small: ['14px', { lineHeight: '20px', fontWeight: '400' }],
            },
            colors: {
                base: '#FFFFFF', // фон сайта
                active: '#D9EBD5', // фон активных элементов
                card1: '#F1E6BA', // фон карточек 2
                button: '#EEEEEE', // фон кнопок
                card2: '#F6F6F6', // фон карточек заведений и специалистов
                navactive: '#232323', // фон активной кнопки в моб. навбаре
            },
            borderRadius: {
                soft: '25px', // общее скругление
            },
        },
    },
};
