    
document.addEventListener('DOMContentLoaded', function () {
    const editProfileButton = document.getElementById('editProfileButton');
    const editProfileModal = document.getElementById('editProfileModal');
    const closeButton = document.getElementsByClassName('close')[0];
    const newProfileImageInput = document.getElementById('newProfileImage');
    const newProfileNameInput = document.getElementById('newProfileName');
    const saveChangesButton = document.getElementById('saveChangesButton');
    const profileImage = document.getElementById('profileImage');
    const profileName = document.getElementById('profileName');

    
  
    editProfileButton.addEventListener('click', function () {
      editProfileModal.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function () {
      editProfileModal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === editProfileModal) {
        editProfileModal.style.display = 'none';
      }
    });
  
    saveChangesButton.addEventListener('click', function () {

      const newImage = newProfileImageInput.files[0];
      const newName = newProfileNameInput.value;
  
      if (newImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(newImage);
      }
  
      if (newName) {
        profileName.textContent = newName;
      }
  
   
      editProfileModal.style.display = 'none';
    });
  });
  


document.addEventListener('DOMContentLoaded', function () {
    const userNameInput = document.getElementById('userName');
    const userGamesList = document.getElementById('userGamesList');
    const gameNameInput = document.getElementById('gameName');
    const gameImageInput = document.getElementById('gameImage');
    const addGameButton = document.getElementById('addGameButton');
    const removeGameButton = document.getElementById('removeGameButton');
    const friendNameInput = document.getElementById('friendName');
    const friendImageInput = document.getElementById('friendImage');
    const addFriendButton = document.getElementById('addFriendButton');
    const removeFriendButton = document.getElementById('removeFriendButton');
    const friendsList = document.getElementById('friendsList');
  
    



    const userProfileData = JSON.parse(localStorage.getItem('userProfileData')) || { userName: '', games: [], friends: [] };
    userNameInput.value = userProfileData.userName;
    displayGames();
    displayFriends();
  
    addGameButton.addEventListener('click', function () {
      const gameName = gameNameInput.value;
      const gameImage = gameImageInput.value;
  
      if (gameName && gameImage) {
        userProfileData.games.push({ name: gameName, image: gameImage });
        gameNameInput.value = '';
        gameImageInput.value = '';
        saveUserData();
        displayGames();
      }
    });
  
    removeGameButton.addEventListener('click', function () {
      userProfileData.games.pop();
      saveUserData();
      displayGames();
    });
  
    addFriendButton.addEventListener('click', function () {
      const friendName = friendNameInput.value;
      const friendImage = friendImageInput.value;
  
      if (friendName && friendImage) {
        userProfileData.friends.push({ name: friendName, image: friendImage });
        friendNameInput.value = '';
        friendImageInput.value = '';
        saveUserData();
        displayFriends();
      }
    });
  
    removeFriendButton.addEventListener('click', function () {
      userProfileData.friends.pop();
      saveUserData();
      displayFriends();
    });
  
    function saveUserData() {
      localStorage.setItem('userProfileData', JSON.stringify(userProfileData));
    }
  
    function displayGames() {
      userGamesList.innerHTML = '';
      userProfileData.games.forEach(game => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<img src="${game.image}" alt="${game.name}"> ${game.name}`;
        userGamesList.appendChild(listItem);
      });
    }
  
    function displayFriends() {
      friendsList.innerHTML = '';
      userProfileData.friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<img src="${friend.image}" alt="${friend.name}"> ${friend.name}`;
        friendsList.appendChild(listItem);
      });
    }
  });
  






document.addEventListener('DOMContentLoaded', function () {
    const userNameInput = document.getElementById('userName');
    const userGamesList = document.getElementById('userGamesList');
    const gameNameInput = document.getElementById('gameName');
    const gameImageInput = document.getElementById('gameImage');
    const addGameButton = document.getElementById('addGameButton');
    const removeGameButton = document.getElementById('removeGameButton');
    const friendNameInput = document.getElementById('friendName');
    const friendImageInput = document.getElementById('friendImage');
    const addFriendButton = document.getElementById('addFriendButton');
    const removeFriendButton = document.getElementById('removeFriendButton');
    const friendsList = document.getElementById('friendsList');

    
    let userProfileData = JSON.parse(localStorage.getItem('userProfileData')) || { userName: '', games: [], friends: [] };
    userNameInput.value = userProfileData.userName;
    displayGames();
    displayFriends();

    addGameButton.addEventListener('click', function () {
        const gameName = gameNameInput.value;
        const gameImage = gameImageInput.value;

        if (gameName && gameImage) {
            userProfileData.games.push({ name: gameName, image: gameImage });
            gameNameInput.value = '';
            gameImageInput.value = '';
            saveUserData();
            displayGames();
        }
    });

    removeGameButton.addEventListener('click', function () {
        userProfileData.games.pop();
        saveUserData();
        displayGames();
    });

    addFriendButton.addEventListener('click', function () {
        const friendName = friendNameInput.value;
        const friendImage = friendImageInput.value;

        if (friendName && friendImage) {
            userProfileData.friends.push({ name: friendName, image: friendImage });
            friendNameInput.value = '';
            friendImageInput.value = '';
            saveUserData();
            displayFriends();
        }
    });

    removeFriendButton.addEventListener('click', function () {
        userProfileData.friends.pop();
        saveUserData();
        displayFriends();
    });

    function saveUserData() {
        localStorage.setItem('userProfileData', JSON.stringify(userProfileData));
    }

    function displayGames() {
        userGamesList.innerHTML = '';
        userProfileData.games.forEach(game => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="${game.image}" alt="${game.name}"> ${game.name}`;
            userGamesList.appendChild(listItem);
        });
    }

    function displayFriends() {
        friendsList.innerHTML = '';
        userProfileData.friends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="${friend.image}" alt="${friend.name}"> ${friend.name}`;
            friendsList.appendChild(listItem);
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const editProfileButton = document.getElementById('editProfileButton');
    const editProfileModal = document.getElementById('editProfileModal');
    const closeButton = document.getElementsByClassName('close')[0];
    const newProfileImageInput = document.getElementById('newProfileImage');
    const newProfileNameInput = document.getElementById('newProfileName');
    const saveChangesButton = document.getElementById('saveChangesButton');
    const profileImage = document.getElementById('profileImage');
    const profileName = document.getElementById('profileName');

   
    const storedProfileName = localStorage.getItem('profileName') || 'John Doe';
    const storedProfileImage = localStorage.getItem('profileImage') || 'default-profile-image.jpg';

   
    profileName.textContent = storedProfileName;
    profileImage.src = storedProfileImage;

    editProfileButton.addEventListener('click', function () {
        editProfileModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        editProfileModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    });

    saveChangesButton.addEventListener('click', function () {
      
        const newImage = newProfileImageInput.files[0];
        const newName = newProfileNameInput.value;

        if (newImage) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
         
                localStorage.setItem('profileImage', e.target.result);
            };
            reader.readAsDataURL(newImage);
        }

        if (newName) {
            profileName.textContent = newName;
       
            localStorage.setItem('profileName', newName);
        }

      
        editProfileModal.style.display = 'none';
    });
});
const year = new Date().getFullYear();
document.querySelector(".footer p").innerHTML = `&copy;${year} - COPYRIGHT - NO TOXIC ZONE S.A. TODOS OS DIREITOS RESERVADOS.`;
