"use client"
import { tableTypes } from "@/config/types";
import "./styles/components.css";
export default function Table({ data }: tableTypes) {
  const headers = Object.keys(data);
  return (
    <table>
      <tbody>
        {headers.map((item, i) => (
          <tr key={i}>
            <th>{item}</th>
          </tr>
        ))}
        {data.map((item, i) => (
          <>
            {headers.map((h: string, j) => (
              <tr key={i}>
                <td>{data[i].username}</td>
                <td>{data[i].password}</td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </table>
  );
}
