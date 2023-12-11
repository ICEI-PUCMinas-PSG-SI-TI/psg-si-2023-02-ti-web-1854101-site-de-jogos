function toggleFavorite(gameId, element) {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!favorites.includes(gameId)) {
        
        favorites.push(gameId);
        alert('Jogo adicionado aos favoritos!');
    } else {
        
        favorites = favorites.filter(id => id !== gameId);
        alert('Jogo removido dos favoritos!');
    }

    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
