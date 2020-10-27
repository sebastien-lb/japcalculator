export async function handler(event, context) {
	return {
		statusCode: 418,
		body: JSON.stringify({ message: "Hello" }),
	};
}