import dbConnect from "@/app/lib/db";
import {
  addProduct,
  getProducts,
  getSingleProduct,
} from "../../admin/products/action";

export async function GET(request) {
  await dbConnect();
  const url = new URL(request.url);
  const query = url.searchParams;

  const id = query.get("id");
  if (!id) {
    const products = await getProducts();
    return Response.json({ data: products });
  }

  const singleProduct = await getSingleProduct(id);
  return Response.json({ data: singleProduct });
}

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    const newProduct = await addProduct(new Map(Object.entries(body)));
    // Perform your logic here (e.g., save to database)

    // Return a successful response
    return new Response(
      JSON.stringify({ message: "Data saved successfully", data: newProduct }),
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

export default async function handler(request, response) {
  await dbConnect(); // Ensure database connection is established
  console.log("Request received: ", req.method, req.body);

  const { method, body, query } = req;

  try {
    switch (method) {
      case "POST": // Create a new product
        const newProduct = await addProduct(new Map(Object.entries(body))); // Convert the plain object to a Map
        return res
          .status(201)
          .json({ message: "Product added successfully", data: newProduct });

      case "GET": // Retrieve products
        if (query.id) {
          // Fetch a single product if `id` is in the query
          const singleProduct = await getSingleProduct(query.id);
          return res.status(200).json({ data: singleProduct });
        }
        const products = await getProducts();
        return res.status(200).json({ data: products });

      // Handle other HTTP methods if needed
      default:
        res.setHeader("Allow", ["POST", "GET"]);
        return res
          .status(405)
          .json({ message: `Method ${method} not allowed` });
    }
  } catch (error) {
    console.error("API Error:", error.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
