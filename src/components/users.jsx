import React, { useState } from "react";
import api from "./Api";
import { AiFillDelete } from "react-icons/ai";

export const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((user) => user.filter((user) => user._id !== userId));
  };

  return (
    <>
      <nav className="min-h-[60px] flex justify-between px-5 items-center">
        <p
          className={
            "w-[200px] flex justify-center text-white p-1 " +
            (users.length > 0 ? "bg-blue-600" : "bg-red-600")
          }
        >
          {users.length > 0
            ? "Ma'lumotlar to'liq faol."
            : "Ma'lumotlar o'chirilgan."}
        </p>
        <p className="bg-black text-white px-3 py-2 rounded-xl">
          Table Length
          <span
            className={
              "inline-block text-xl " + 
              (users.length >= 0 && users.length < 4
                ? "text-red-300"
                : users.length >= 4 && users.length < 7
                ? "text-purple-300"
                : users.length >= 7 && users.length < 9
                ? "text-yellow-300"
                : users.length >= 9
                ? "text-green-300"
                : "null")
            }
          >
            {users.length}
          </span>
        </p>
      </nav>
      <table className="table-auto w-[90%] mx-auto border mt-4">
        <thead>
          <tr className="border">
            <td>№</td>
            <th>Name</th>
            <th>Quality</th>
            <th>Profession</th>
            <th>Instratelsia Once</th>
            <th>Grade</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="border hover:bg-black/20" key={user._id}>
              <td>{user.number}</td>
              <td className="py-2">{user.name}</td>
              <td className="py-2 flex gap-1">
                {user.qualities.map((item) => (
                  <span
                    className={
                      "text-sm text-white py-[2px] px-1 rounded-md bg-" +
                      item.color
                    }
                    key={item._id}
                  >
                    {item.name}
                  </span>
                ))}
              </td>
              <td className="py-2">{user.profession.name}</td>
              <td className="py-2">{user.completedMeetings}</td>
              <td className="py-2">{user.rate}</td>
              <td>
                <button
                  className="bg-red-500 p-1 rounded-md text-white flex justify-evenly items-center"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
