export async function GET() {
  const navlist = [
    { name: "Home", url: "/#" },
    { name: "About", url: "/#" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" }
  ];

  return new Response(JSON.stringify(navlist), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}