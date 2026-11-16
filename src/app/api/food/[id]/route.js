
import connectDB from "@/lib/db";
import Food from "@/models/Food";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// GET SINGLE VEG FOOD
export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({
        success: false,
        message: "Invalid food ID"
      }, { status: 400 });
    }

    const food = await Food.findOne({
      _id: id,
      foodType: "Veg"
    });

    if (!food) {
      return NextResponse.json({
        success: false,
        message: "Veg food not found"
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      food
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch food"
    }, { status: 500 });
  }
}


// UPDATE VEG FOOD
export async function PUT(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({
        success: false,
        message: "Invalid food ID"
      }, { status: 400 });
    }

    const body = await request.json();

    const allowedFields = [
      "name",
      "description",
      "price",
      "category",
      "image",
      "isAvailable"
    ];

    const updateData = {};

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    const food = await Food.findOneAndUpdate(
      {
        _id: id,
        foodType: "Veg"
      },
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!food) {
      return NextResponse.json({
        success: false,
        message: "Veg food not found"
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Veg food updated successfully",
      food
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to update food"
    }, { status: 400 });
  }
}


// DELETE VEG FOOD
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({
        success: false,
        message: "Invalid food ID"
      }, { status: 400 });
    }

    const food = await Food.findOneAndDelete({
      _id: id,
      foodType: "Veg"
    });

    if (!food) {
      return NextResponse.json({
        success: false,
        message: "Veg food not found"
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Veg food deleted successfully"
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to delete food"
    }, { status: 500 });
  }
}
