import axios from 'axios';

const api = axios.create({baseURL: 'https://dog.ceo/api/breeds/image'});

const  items = document.querySelectorAll('.item');

items.forEach(item => {
    addImage(item)
})

async function addImage(item) {
    const response = await api.get('/random');
    const imageUrl = response.data.message;
    const img = document.createElement('img');
    img.setAttribute('src', imageUrl);
    img.style.width = '236px';
    img.style.borderRadius = '20px';
    item.appendChild(img)
    console.log(`funcionou kkkk img ${item}`);
}