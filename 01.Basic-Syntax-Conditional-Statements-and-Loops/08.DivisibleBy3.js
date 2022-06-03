function divisibleBy3() {
    for (let i = 0; i <= 100; i += 3) {
        if (i > 0 && i % 3 == 0) {
            console.log(i);
        }
    }
}
divisibleBy3();