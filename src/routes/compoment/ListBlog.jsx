import React, { useState } from "react";
import TableBase from "./TableBase";
import Search from "./Search";
import useSearch from "../../hook/SearchHook";

function ListBlog({ blogs }) {
  const [key, setkey] = useState("");
  const [sort, setsort] = useState("");
  const { data, setdata } = useSearch(key, blogs);
  console.log(sort);
  const columns = [
    { field: "id", Header: "ID" },
    { field: "title", Header: "Title" },
    {
      field: "image",
      Header: "Image",
      Columsfunction: (dataAvatar) => (
        <div>
          <img src={`${dataAvatar}`} alt="" />
        </div>
      ),
    },
    { field: "desc", Header: "Desc" },
    { field: "description", Header: "Description" },
  ];
  return (
    <div>
      <Search setkey={setkey} />
      <TableBase
        data={data}
        columns={columns}
        setsort={setsort}
        setdata={setdata}
      />
    </div>
  );
}

export default ListBlog;
