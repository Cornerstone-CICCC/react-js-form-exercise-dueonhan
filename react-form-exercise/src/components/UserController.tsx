import { useState } from "react";

// ✅ Form state type definition
type FormState = {
  firstname: string;
  lastname: string;
  age: string;
  favoriteFoods: string[];
};

export default function App() {
  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastname: "",
    age: "",
    favoriteFoods: [],
  });

  const [showUser, setShowUser] = useState<boolean>(false);

  const foods: string[] = ["Chicken", "Beef", "Vegetables", "Dessert", "Pork"];

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">User Form</h1>

        <div className="space-y-3">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Favorite Foods</p>
          <div className="grid grid-cols-2 gap-2">
            {foods.map((food) => (
              <label key={food} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={food}
                  checked={form.favoriteFoods.includes(food)}
                  onChange={handleFoodChange}
                />
                {food}
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleDisplay}
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Display User
          </button>
          <button
            onClick={handleClear}
            className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
          >
            Clear
          </button>
        </div>

        {showUser && (
          <p className="mt-6 bg-gray-50 p-4 rounded">
            Hello {form.firstname} {form.lastname}. You are {form.age} years old
            and your favorite foods are: {form.favoriteFoods.join(", ")}.
          </p>
        )}
      </div>
    </div>
  );
}
