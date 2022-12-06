function simplify(text){
    const separators = /[s,.;:()'+ ]/g;
    //capitalização e normalização
    text = text.toUpperCase().normalize("NFD")
    //separando e removendo repetidos
    const arr = text.split(separators).filter((item, pos, self) => self.indexOf(item) == pos)
    //removendo nulls, undefineds e strings vazias
    return arr.filter(item => (item))
}

const gerarTag = (obj) => {
    let tags = []

    for (const key in obj)
        if(key === "title" || key === "body")
            tags = [...simplify(obj[key]), ...tags]

    obj.tags = tags
    return obj
}
const geradorDeTags = (array) => {
    for (let i = 0; i < array.length; i++)
        array[i] = gerarTag(array[i])
    
    return array
}

module.exports = {
    buscador: (search, array) => {
        array = geradorDeTags(array)
        search = simplify(search)
        console.log(array.map(e => e.tags))
        return array.filter(obj => obj.tags.some(tag => search.includes(tag)))
    }
}