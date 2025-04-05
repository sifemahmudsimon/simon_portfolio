export async function GET() {
    const category_types = [
      { type: 1, name: 'Featured' },
      { type: 2, name: 'Mini Projects' },
      { type: 3, name: 'Medium Projects' },
      { type: 4, name: 'Large Projects' },
      { type: 5, name: 'Customized Projects' }
    ];
  
    return new Response(JSON.stringify(category_types), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }