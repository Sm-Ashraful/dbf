import dbConnect from "@/app/lib/db";
import {
  addProduct,
  getProducts,
  getSingleProduct,
} from "../../admin/products/action";

// Connect to the database
await dbConnect();

// Handle GET requests
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const query = url.searchParams;

    const id = query.get("id");
    if (!id) {
      const products = await getProducts();
      return new Response(JSON.stringify({ data: products }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const singleProduct = await getSingleProduct(id);
    return new Response(JSON.stringify({ data: singleProduct }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle POST requests
export async function POST(request) {
  try {
    const body = await request.json();

    // Save the new product to the database
    const newProduct = await addProduct(new Map(Object.entries(body)));

    return new Response(
      JSON.stringify({
        message: "Product added successfully",
        data: newProduct,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling POST request:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to process request",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
