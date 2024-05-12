function listaSimplementeEnlazada() {
    var prev = {};
    for (let index = 0; index < 10; index++) {
        const elem = { "v": index};
        elem["next"] = prev;
        prev = elem;
    }

    while(prev.next) {
        console.log(prev.v)
        prev = prev.next;
    }
}

// LinkedList
listaSimplementeEnlazada();
// {v:2} -> {v:1} -> {v:0} -> {}