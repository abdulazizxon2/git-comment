import React, { useReducer, useState } from "react";

export default function Reducer() {
  let testData = [
    {
      title: "olma",
      count: 1,
    },

    {
      title: "nok",
      count: 1,
    },

    {
      title: "banan",
      count: 1,
    },

    {
      title: "kiwi",
      count: 1,
    },

    {
      title: "shaftoli",
      count: 1,
    },
  ];
  let [valueInp, SetValueInp] = useState({
    title: "",
    count: "",
  });

  function clearValue() {
    SetValueInp({ title: "", count: "" });
  }
  function Reduce(state, action) {
    let { payload, type } = action;
    switch (type) {
      case "plus":
        state = state.map((item) =>
          item.id === payload ? { ...item, count: item.count + 1 } : item
        );
        return state;
      case "minus":
        state = state.map((item) =>
          item.id === payload ? { ...item, count: item.count - 1 } : item
        );
        return state;

      case "delete":
        state = state.filter((item) => item.id !== payload);
        return state;
      case "submit":
        payload.preventDefault();
        if (!valueInp?.id) {
          state = [...state, { ...valueInp, id: Date.now() }];
        } else {
          state = state.map((item) =>
            item?.id === valueInp.id ? valueInp : item
          );
        }
        clearValue();
        return state;
      default:
        return state;
    }
  }

  function handleEdit(item) {
    SetValueInp(item);
  }

  testData = testData.map((item, index) => ({ ...item, id: index + 1 }));
  let [count, dispatch] = useReducer(Reduce, testData);
  function handleChange(e) {
    SetValueInp({ ...valueInp, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="reducer_main">
        {count.map((item, index) => {
          return (
            <div className="reducer_card" key={item.id}>
              <button
                className="btn plus_btn"
                onClick={() => dispatch({ type: "plus", payload: item.id })}
              >
                +
              </button>
              <p>{item.count}</p>
              <button
                className="btn minus_btn"
                onClick={() => dispatch({ type: "minus", payload: item.id })}
              >
                -
              </button>
              <h2>{item.title}</h2>

              <button
                className="btn delete_btn"
                onClick={() => dispatch({ type: "delete", payload: item.id })}
              >
                delete
              </button>
              <button className="btn edit_btn" onClick={() => handleEdit(item)}>
                Edit
              </button>
            </div>
          );
        })}
      </div>

      <div className="input_box">
        <form onSubmit={(e) => dispatch({ type: "submit", payload: e })}>
          <input
            type="text"
            placeholder="Nomini kirit"
            name="title"
            value={valueInp?.title}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="sonini kirit"
            name="count"
            value={valueInp?.count}
            onChange={handleChange}
          />
          <button type="submit" className="btn send_btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
