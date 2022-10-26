// Api structure
// POST /api/lists - create a new list
// GET /api/lists/:code - get a list
// PUT /api/lists/:code - update a list

// Api Class
class ToDoApi {
	// Create a new list
	public async createList(): Promise<Object> {
		return fetch("/api/lists", { method: "POST" }).then((r) => r.json());
	}

	// Get a list
	public async getList(code: string): Promise<Object> {
		return fetch(`/api/lists/${code}`).then((r) => r.json());
	}
}
