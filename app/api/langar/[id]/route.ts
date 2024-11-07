import { db } from "@/app/libs/db";
import { NextResponse } from "next/server";
export async function DELETE(request:Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (id) {
      const data = await db.langar.delete({ where: { id } });
      return NextResponse.json({ data, success: true });
    } else {
      const now = new Date();
      now.setUTCHours(18, 30, 0, 0);
      const data = await db.langar.deleteMany({
        where: {
          createdAt: {
            lt: now,
          },
        },
      });
      return NextResponse.json({
        data,
        success: true,
        message: `${data.count} documents deleted`,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
