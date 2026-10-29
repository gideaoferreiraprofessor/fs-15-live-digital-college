export function userListController(request, response) {
  const fakeUsers = [
    { name: "Gideão" },
    { name: "Leri" }
  ]

  return response.json(fakeUsers) 
}
