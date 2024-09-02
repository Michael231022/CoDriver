secret_word = "June"
guess = " "
chance = 0

while guess != secret_word:
    guess = input("Enter your guess: ")
    chance += 1

    if guess != secret_word:
        print("You are wrong!")

if chance >= 3:
    print("[Hint: Month]")
    
print("You win!")