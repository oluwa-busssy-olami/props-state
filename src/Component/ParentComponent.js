import ChildComponent from "./ChildComponent";
import Employee from "./Employee";
import Counter from "./Counter";

function ParentComponent() {
  return (
    // <div>
    //   <h1> I 'm the Parent Component</h1>{" "}
    //   <ChildComponent
    //     style={{ color: "blue" }}
    //     text={"I am the first Child"}
    //     name={"Blessing"}
    //     age={24}
    //   />{" "}
    //   <ChildComponent
    //     style={{ color: "red" }}
    //     text={"I am the second Child"}
    //     name={"Opeyemi"}
    //     age={20}
    //   />{" "}
    //   <ChildComponent
    //     style={{ color: "green" }}
    //     text={"I am the Third Child"}
    //     name={"Busolami"}
    //     age={21}
    //   />{" "}
    //   <ChildComponent
    //     style={{ color: "orange" }}
    //     text={"I am the fourth Child"}
    //     name={"Oluwabunmi"}
    //     age={21}
    //   />{" "}
    // </div>

    // <div>
    //   <Employee
    //     firstName={"Busolami"}
    //     lastName={"Oluwabi"}
    //     emailId={"oluwabibusola@gmail.com"}
    //   />{" "}
    // </div>
    <div>
      <Counter />
    </div>
  );
}

export default ParentComponent;
