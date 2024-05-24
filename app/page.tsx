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

    getAllPostsbyUserId(userId: 10) {
      body
      id
      userId {
        company {
          name
        }
        address {
          geo {
            lat
            lng
          }
        }
        id
        name
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(query);
  console.log(data, "data123");
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
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              ID
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Body
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Company Name
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Latitude
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Longitude
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllPostsbyUserId?.map((post) => (
            <tr key={post?.id}>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {post?.userId?.id}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {post?.body}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {post?.userId?.name}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {post?.userId?.company?.name}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {post?.userId?.address?.geo?.lat}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {post?.userId?.address?.geo?.lng}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
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
        </thead>
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
