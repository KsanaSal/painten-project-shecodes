document
                .querySelector(".btn")
                .addEventListener("click", orderedBtn);

            function orderedBtn() {
                let name = prompt("What is your name?");
                if (name.length) {
                    alert(
                        `Thanks ${name} for order call me! My phone is downstairs 😍`
                    );
                    let phone = document.querySelector(".autor");
                    phone.innerHTML = "My phone '+380664019615'";
                } else {
                    alert("No name no number phone 🤔");
                }
            }