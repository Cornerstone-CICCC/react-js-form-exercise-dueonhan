import { useState } from "react";
const App = () => {
  /* Your states here */

  type FormState = {
    firstname: string;
    lastname: string;
    age: string;
    favoriteFoods: string[];
  };

  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastname: "",
    age: "",
    favoriteFoods: [],
  });

  const [showUser, setShowUser] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      favoriteFoods: checked
        ? [...prev.favoriteFoods, value]
        : prev.favoriteFoods.filter((food) => food !== value),
    }));
  };

  const handleDisplay = () => {
    setShowUser(true);
  };

  const handleClear = () => {
    setForm({
      firstname: "",
      lastname: "",
      age: "",
      favoriteFoods: [],
    });
    setShowUser(false);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={form.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={form.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={form.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              checked={form.favoriteFoods.includes("Chicken")}
              onChange={handleFoodChange}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              checked={form.favoriteFoods.includes("Beef")}
              onChange={handleFoodChange}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              checked={form.favoriteFoods.includes("Vegetables")}
              onChange={handleFoodChange}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              checked={form.favoriteFoods.includes("Dessert")}
              onChange={handleFoodChange}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              checked={form.favoriteFoods.includes("Pork")}
              onChange={handleFoodChange}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleDisplay}>Display User</button>
      <button onClick={handleClear}>Clear</button>

      <div className="output">
        {
          /* Display the greeting here */
          showUser && (
            <div className="output">
              Hello {form.firstname} {form.lastname}. You are {form.age} years
              old and your favorite foods are: {form.favoriteFoods.join(", ")}.
            </div>
          )
        }
      </div>
    </div>
  );
};

export default App;
