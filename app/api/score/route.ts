import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  // Get the search params from the URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Match ID is required" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      `https://cricket-api-wine.vercel.app/score?id=${id}`
    );
    return NextResponse.json(response.data);
  } catch {
    return NextResponse.json(
      { error: "Failed to parse resume" },
      { status: 500 }
    );
  }
}
