export async function GET(request) {
 
  return new Response(JSON.stringify(content), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
