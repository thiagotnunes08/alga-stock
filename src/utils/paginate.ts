export default function paginate (
    array:any[],
    itensPerPage:number,
    actualPage:number
) {
    return array.slice(
        (actualPage - 1) * itensPerPage,
        actualPage * itensPerPage
    )
}