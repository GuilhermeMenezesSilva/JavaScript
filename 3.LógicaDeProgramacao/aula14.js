// break

let nome = "Guilherme"

for (let i = 0; i < 10; i + 1) {

    if (i === 3) {
        nome = "Matheus"
    }

    if (i === 5 && nome === "Matheus") {
        console.log("O nome é Matheus, pode parar")
        break
    }

    console.log(i)
}