export function userListController(request, response) {
    return response.json(
        [
            { name: "Gideão" },
            { name: "Leri" }
        ]
    )
}
