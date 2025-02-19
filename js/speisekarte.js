document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/menu.json')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menu-content');
            
            // Render menu categories
            data.categories.forEach(category => {
                const categorySection = document.createElement('section');
                categorySection.className = 'menu-category';
                
                categorySection.innerHTML = `
                    <h2 class="category-title">${category.name}</h2>
                    ${category.items.map(item => `
                        <div class="menu-item">
                            <div class="item-details">
                                <div class="item-name">${item.name}</div>
                                <div class="item-description">${item.description}</div>
                                <div class="item-allergens">Allergene: ${item.allergens.join(', ')}</div>
                            </div>
                            <div class="item-price">${item.price} €</div>
                        </div>
                    `).join('')}
                `;
                
                menuContainer.appendChild(categorySection);
            });
            
            // Add allergen legend
            const allergenLegend = document.createElement('div');
            allergenLegend.className = 'allergen-legend';
            allergenLegend.innerHTML = `
                <div class="allergen-title">Allergene</div>
                <div class="allergen-list">
                    ${Object.entries(data.allergens).map(([key, value]) => 
                        `<div>${key}: ${value}</div>`
                    ).join('')}
                </div>
            `;
            
            menuContainer.appendChild(allergenLegend);
        })
        .catch(error => console.error('Error loading menu:', error));
});