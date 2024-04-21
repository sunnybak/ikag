
export const POST = async (request, { params }) => {

    const { 
        sku,
        quote,
        quantity,
        date,
        email,
    } = await request.json();
}