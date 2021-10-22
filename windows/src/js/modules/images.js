const images = () => {
    const imgPopup = document.createElement('div'),
          workSecton = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    workSecton.appendChild(imgPopup);

    // imgPopup.style.cssText = 'justifyContent: center; alignItems: center; display: none;';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    workSecton.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;