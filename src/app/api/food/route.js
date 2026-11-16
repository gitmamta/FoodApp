
import connectDB from "@/lib/db";
import Food from "@/models/Food";
import { NextResponse } from "next/server";

// GET ALL VEG FOOD
export async function GET() {
  try {
    await connectDB();

    const foods = await Food.find({
      foodType: "Veg"
    });

    return NextResponse.json({
      success: true,
      foods
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch veg food"
    }, { status: 500 });
  }
}

// ADD MULTIPLE VEG FOOD
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Please send an array of food items"
      }, { status: 400 });
    }

    for (const item of body) {
      if (!item.name || item.price == null || !item.category) {
        return NextResponse.json({
          success: false,
          message: "Name, price and category are required"
        }, { status: 400 });
      }
    }

    const foods = await Food.insertMany(
      body.map(item => ({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
        foodType: "Veg",
        isAvailable: true
      }))
    );

    return NextResponse.json({
      success: true,
      message: "Veg food added successfully",
      foods
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, { status: 400 });
  }
}
