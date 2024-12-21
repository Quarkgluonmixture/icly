function showPhoto(photoUrl) {
    // 创建一个模态框来展示图片
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    let img = document.createElement('img');
    img.src = photoUrl;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';

    modal.appendChild(img);
    document.body.appendChild(modal);

    // 点击模态框时，关闭模态框
    modal.addEventListener('click', function () {
        document.body.removeChild(modal);
    });
}
