export function productListController(request, response) {
    return response.json(
        [
            { name: "Tênis Nike" },
            { name: "Tênis Adidas" }
        ]
    )
}
