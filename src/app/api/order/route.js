import { orderSubmit } from "@/app/admin/orders/action";
import dbConnect from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  await dbConnect();
  const body = await request.json();

  const id = query.get("id");
  if (!id) {
    const products = await getProducts();
    return Response.json({ data: products });
  }

  const singleProduct = await getSingleProduct(id);
  return Response.json({ data: singleProduct });
}

// POST route handler for submitting an order
export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    console.log("Received order data:", body);

    // Call the orderSubmit action
    const response = await orderSubmit(body);

    // Check the response from orderSubmit
    if (response.success) {
      return NextResponse.json(
        {
          message: response.message,
          order: response.order,
        },
        { status: 201 } // HTTP 201 Created
      );
    } else {
      return NextResponse.json(
        { message: response.message },
        { status: 400 } // HTTP 400 Bad Request
      );
    }
  } catch (error) {
    console.error("Error in POST handler:", error);

    // Return an error response
    return NextResponse.json(
      {
        message: "Failed to process the order.",
        error: error.message,
      },
      { status: 500 } // HTTP 500 Internal Server Error
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
