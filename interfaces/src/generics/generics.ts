function Data () {
    let dados: <T>;

    function getData() {
        return dados
    }

    function setData(item: <T>) {
        dados = item
    }
}