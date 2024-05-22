"use client";

import { useSelector } from "react-redux";
import { RootState } from "./_store/store";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetAllTodos {
    getTodos {
      userId {
        id
        name
        email
        website
      }
      id
      completed
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(query);
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);

  if (loading) {
    return (
      <>
        <h1>LOADING......</h1>
      </>
    );
  }
  return (
    <main>
      <h1>Home</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tr>
          <th
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
            }}
          >
            User Name
          </th>
          <th
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
            }}
          >
            User Email
          </th>
          <th
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
            }}
          >
            User Website
          </th>
          <th
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Todo Completed
          </th>
        </tr>
        <tbody>
          {data?.getTodos?.map((todo) => (
            <tr key={todo?.id}>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {todo?.userId?.name}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {todo?.userId?.email}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {todo?.userId?.website}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {todo.completed.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
