import { ITicket } from "@/types/feature/ManageTickets/ManageTickets.interface";

import axios from "axios";

export async function fetchTickets(ordering: string|null) {
  
  try {
    const response = await axios.get(
      `http://212.80.19.130:8000/v1/communication/groups/tickets?ordering=${ordering}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQxOTQ5OTIxLCJpYXQiOjE3MzkzNTc5MjEsImp0aSI6IjhiZjNkMWMwNzRlNTRiMGI5M2YyYTA0ZTBhMDk5YTI4IiwidXNlcl9pZCI6MSwicm9sZXMiOltdLCJoYXNfZGF0YV9hY2Nlc3MiOnRydWUsImdyb3VwcyI6W3siaWQiOjEsImdyb3VwIjp7ImlkIjoxLCJ0aXRsZSI6Im51bWJlciAxIn0sInJvbGUiOiJNQU5BR0VSIiwiaXNfbWFpbl9ncm91cCI6dHJ1ZX1dfQ.3BeBVYLiL3iQvJZZtvwLe0qWnfi4EGljB7AIRpFCISE",
          "Content-Type": "application/json",
        },
      }
    );

    return response.data as ITicket;
  } catch (e: any) {
    console.error(e.message);
    throw new Error(e.message);
  }

  //   const response =data.json()
  // if (response.status !== 200) {
  //     console.log(response.data.json())
  //     // throw new Error(response.message)
  // }
}
