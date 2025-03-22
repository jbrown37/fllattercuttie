document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar");
    const characterName = document.getElementById("character-name");
    const characterImage = document.getElementById("character-image");
    const voteCount = document.getElementById("vote-count");
    const voteForm = document.getElementById("votes-form");
    const voteInput = document.getElementById("vote-input");
    const resetVotesButton = document.getElementById("reset-votes");

    let currentCharacter = null;

    fetch("http://localhost:3000/characters")
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const img = document.createElement("img");
                img.src = character.image;
                img.alt = character.name;
                img.addEventListener("click", () => displayCharacterDetails(character));

                characterBar.appendChild(img);
            });
        });

    function displayCharacterDetails(character) {
        currentCharacter = character;
        characterName.textContent = character.name;
        characterImage.src = character.image;
        characterImage.style.display = "block";
        voteCount.textContent = character.votes;
    }

    voteForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (currentCharacter) {
            const addedVotes = parseInt(voteInput.value) || 0;
            currentCharacter.votes += addedVotes;
            voteCount.textContent = currentCharacter.votes;
            voteInput.value = "";

            fetch(`http://localhost:3000/characters/${currentCharacter.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ votes: currentCharacter.votes }),
            });
        }
    });

    resetVotesButton.addEventListener("click", () => {
        if (currentCharacter) {
            currentCharacter.votes = 0;
            voteCount.textContent = 0;

            fetch(`http://localhost:3000/characters/${currentCharacter.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ votes: 0 }),
            });
        }
    });
});
