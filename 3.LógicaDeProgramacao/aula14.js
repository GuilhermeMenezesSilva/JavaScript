// break

for (let i = 0; i < 10; i++) {

    if (i === 3) {
        nome = "Matheus"
    }

    if (i === 5 && nome === "Matheus") {
        console.log("O nome é Matheus, pode parar")
        break
    }

    console.log(i)
}