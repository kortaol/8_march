onclick = (e) => {
    let i = Math.floor(Math.random() * 8);

    let flower = document.createElement('img');
    flower.src = `/flowers/flower${i}.png`;
    flower.style.left = `${e.clientX - flower.width / 2}px`;
    flower.style.top = `${e.clientY - flower.height / 2}px`;
    flower.classList.add('flower');
    document.body.appendChild(flower);
    console.log(e);
}
